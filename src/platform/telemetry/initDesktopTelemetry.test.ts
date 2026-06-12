import { afterEach, describe, expect, it, vi } from 'vitest'

import { setTelemetryRegistry, useTelemetry } from '@/platform/telemetry'
import { initDesktopTelemetry } from '@/platform/telemetry/initDesktopTelemetry'
import { TelemetryEvents } from '@/platform/telemetry/types'

describe('initDesktopTelemetry', () => {
  afterEach(() => {
    setTelemetryRegistry(null)
    delete window.__comfyDesktop2
    vi.unstubAllGlobals()
  })

  it('leaves the registry untouched when the Desktop bridge is absent', () => {
    initDesktopTelemetry()

    expect(useTelemetry()).toBeNull()
  })

  it('registers the Desktop sink when the bridge advertises Telemetry', () => {
    const capture = vi.fn()
    window.__comfyDesktop2 = { Telemetry: { capture } }

    initDesktopTelemetry()
    useTelemetry()?.trackSignupOpened()

    expect(capture).toHaveBeenCalledWith(
      TelemetryEvents.USER_SIGN_UP_OPENED,
      undefined
    )
  })

  it('does not clobber an existing registry in cloud builds', async () => {
    vi.stubGlobal('__DISTRIBUTION__', 'cloud')
    vi.resetModules()
    const telemetry = await import('@/platform/telemetry')
    const { TelemetryRegistry } =
      await import('@/platform/telemetry/TelemetryRegistry')
    const { initDesktopTelemetry: initCloudBuild } =
      await import('@/platform/telemetry/initDesktopTelemetry')
    const cloudRegistry = new TelemetryRegistry()
    telemetry.setTelemetryRegistry(cloudRegistry)
    window.__comfyDesktop2 = { Telemetry: { capture: vi.fn() } }

    initCloudBuild()

    expect(telemetry.useTelemetry()).toBe(cloudRegistry)
    vi.resetModules()
  })
})
