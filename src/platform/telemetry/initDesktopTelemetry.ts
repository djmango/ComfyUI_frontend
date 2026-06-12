import { setTelemetryRegistry } from './index'
import { TelemetryRegistry } from './TelemetryRegistry'
import { DesktopTelemetryProvider } from './providers/desktop/DesktopTelemetryProvider'

const IS_CLOUD_BUILD = __DISTRIBUTION__ === 'cloud'

/**
 * Registers the Desktop telemetry sink when the hosting Comfy Desktop app
 * advertises the capability (`window.__comfyDesktop2.Telemetry`); without
 * the bridge the registry is left untouched and tracking stays a no-op.
 * Skipped in cloud builds: Desktop can host cloud pages in its view, and
 * cloud's own providers must keep the registry.
 */
export function initDesktopTelemetry(): void {
  if (IS_CLOUD_BUILD) return
  if (!window.__comfyDesktop2?.Telemetry) return

  const registry = new TelemetryRegistry()
  registry.registerProvider(new DesktopTelemetryProvider())
  setTelemetryRegistry(registry)
}
