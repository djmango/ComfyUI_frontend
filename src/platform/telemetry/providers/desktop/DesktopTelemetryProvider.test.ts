import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { TelemetryEvents } from '@/platform/telemetry/types'

import { DesktopTelemetryProvider } from './DesktopTelemetryProvider'

const state = vi.hoisted(() => ({
  capture: vi.fn(),
  executionContext: {
    is_template: false,
    workflow_name: 'Desktop workflow',
    custom_node_count: 2,
    api_node_count: 1,
    subgraph_count: 1,
    total_node_count: 4,
    has_api_nodes: true,
    api_node_names: ['LoadImage'],
    has_toolkit_nodes: false,
    toolkit_node_names: [],
    toolkit_node_count: 0
  }
}))

vi.mock('@/composables/useAppMode', () => ({
  useAppMode: () => ({
    mode: { value: 'graph' },
    isAppMode: { value: false }
  })
}))

vi.mock('@/platform/telemetry/utils/getExecutionContext', () => ({
  getExecutionContext: () => state.executionContext
}))

describe('DesktopTelemetryProvider', () => {
  beforeEach(() => {
    state.capture.mockClear()
    window.__comfyDesktop2 = {
      Telemetry: {
        capture: state.capture
      }
    }
  })

  afterEach(() => {
    delete window.__comfyDesktop2
  })

  it('forwards run button telemetry to the Desktop bridge', () => {
    new DesktopTelemetryProvider().trackRunButton({
      subscribe_to_run: true,
      trigger_source: 'button'
    })

    expect(state.capture).toHaveBeenCalledExactlyOnceWith(
      TelemetryEvents.RUN_BUTTON_CLICKED,
      {
        subscribe_to_run: true,
        workflow_type: 'custom',
        workflow_name: 'Desktop workflow',
        custom_node_count: 2,
        total_node_count: 4,
        subgraph_count: 1,
        has_api_nodes: true,
        api_node_names: ['LoadImage'],
        has_toolkit_nodes: false,
        toolkit_node_names: [],
        trigger_source: 'button',
        view_mode: 'graph',
        is_app_mode: false
      }
    )
  })

  it('keeps primitive arrays and drops nested payloads', () => {
    new DesktopTelemetryProvider().trackWorkflowImported({
      missing_node_count: 2,
      missing_node_types: ['MissingA', 'MissingB'],
      missing_node_packs: [
        {
          pack_id: 'pack',
          node_types: ['MissingA']
        }
      ],
      open_source: 'file_drop',
      share_id: 'share-id'
    })

    expect(state.capture).toHaveBeenCalledExactlyOnceWith(
      TelemetryEvents.WORKFLOW_IMPORTED,
      {
        missing_node_count: 2,
        missing_node_types: ['MissingA', 'MissingB'],
        open_source: 'file_drop',
        share_id: 'share-id'
      }
    )
  })

  it('forwards begin checkout using the existing GA4 event name', () => {
    new DesktopTelemetryProvider().trackBeginCheckout({
      user_id: 'user-id',
      tier: 'pro',
      cycle: 'monthly',
      checkout_type: 'new',
      ecommerce: {
        items: [
          {
            item_name: 'Pro',
            price: 100,
            quantity: 1
          }
        ]
      }
    })

    expect(state.capture).toHaveBeenCalledExactlyOnceWith('begin_checkout', {
      user_id: 'user-id',
      tier: 'pro',
      cycle: 'monthly',
      checkout_type: 'new'
    })
  })

  it('does nothing when the Desktop bridge is absent', () => {
    delete window.__comfyDesktop2

    expect(() =>
      new DesktopTelemetryProvider().trackNodeSearch({ query: 'k sampler' })
    ).not.toThrow()
    expect(state.capture).not.toHaveBeenCalled()
  })
})
