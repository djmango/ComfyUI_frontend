import type {
  DeviceStats,
  EmbeddingsResponse,
  ExtensionsResponse,
  LogEntry,
  LogsRawResponse,
  NodeError,
  PromptResponse,
  Settings,
  SystemStats,
  TerminalSize,
  User,
  UserData,
  UserDataFullInfo
} from '@/schemas/apiSchema'
import type { ComfyApp } from '@/scripts/app'

import type {
  BottomPanelExtension,
  CommandManager,
  ExtensionManager,
  SidebarTabExtension,
  ToastManager,
  ToastMessageOptions
} from './extensionTypes'

export type { ComfyExtension } from './comfy'
export type { ComfyApi } from '@/scripts/api'
export type { ComfyApp } from '@/scripts/app'
export type { ComfyNodeDef } from '@/schemas/nodeDefSchema'
export type { InputSpec } from '@/schemas/nodeDefSchema'
export type {
  NodeLocatorId,
  NodeExecutionId,
  isNodeLocatorId,
  isNodeExecutionId,
  parseNodeLocatorId,
  createNodeLocatorId,
  parseNodeExecutionId,
  createNodeExecutionId
} from './nodeIdentification'
export type { DOMWidget, DOMWidgetOptions } from '@/scripts/domWidget'
export type {
  EmbeddingsResponse,
  ExtensionsResponse,
  PromptResponse,
  NodeError,
  Settings,
  DeviceStats,
  SystemStats,
  User,
  UserData,
  UserDataFullInfo,
  TerminalSize,
  LogEntry,
  LogsRawResponse
}
export type {
  SidebarTabExtension,
  BottomPanelExtension,
  ToastManager,
  ExtensionManager,
  CommandManager,
  ToastMessageOptions
}

interface CapturedMessages {
  clientFeatureFlags: { type: string; data: Record<string, unknown> } | null
  serverFeatureFlags: Record<string, unknown> | null
}

interface AppReadiness {
  featureFlagsReceived: boolean
  apiInitialized: boolean
  appInitialized: boolean
}

type ComfyDesktop2TelemetryValue = string | number | boolean | null

/**
 * Capability bridge exposed by Comfy Desktop 2's preload script
 * (Comfy-Desktop `src/preload/comfyPreload.ts`) via
 * `contextBridge.exposeInMainWorld`. Absent in browser/cloud builds and
 * in Desktop v1; the preload file is the source of truth for this shape.
 *
 * Contract:
 * - Every key is optional. Callers must feature-detect
 *   (`window.__comfyDesktop2?.X?.y`) and no-op when absent — key
 *   presence is the capability flag.
 * - Desktop only makes additive changes. Once a key ships, its
 *   signature is frozen: released frontends in the wild call it.
 * - Payloads must be structured-clone-safe (telemetry: primitives and
 *   primitive arrays only); Desktop drops anything else.
 */
export interface ComfyDesktop2Bridge {
  downloadModel?: (
    url: string,
    filename: string,
    directory: string
  ) => Promise<boolean>
  Telemetry?: {
    capture: (
      event: string,
      properties?: Record<
        string,
        ComfyDesktop2TelemetryValue | ComfyDesktop2TelemetryValue[]
      >
    ) => void
  }
}

declare global {
  interface Window {
    /** For use by extensions and in the browser console. Where possible, import `app` from '@/scripts/app' instead. */
    app?: ComfyApp

    /** For use by extensions and in the browser console. Where possible, import `app` and access via `app.graph` instead. */
    graph?: unknown

    /** For use in tests to capture WebSocket messages */
    __capturedMessages?: CapturedMessages

    /** For use in tests to track app initialization state */
    __appReadiness?: AppReadiness

    __comfyDesktop2?: ComfyDesktop2Bridge
    /** Set by Desktop 2 when the hosted server is remote, so download routing through the local download manager is skipped. */
    __comfyDesktop2Remote?: boolean
  }
}
