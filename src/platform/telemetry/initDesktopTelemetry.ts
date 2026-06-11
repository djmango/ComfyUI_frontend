import { setTelemetryRegistry } from './index'
import { TelemetryRegistry } from './TelemetryRegistry'
import { DesktopTelemetryProvider } from './providers/desktop/DesktopTelemetryProvider'

const IS_DESKTOP_BUILD = __DISTRIBUTION__ === 'desktop'

let initialized = false

export function initDesktopTelemetry(): void {
  if (!IS_DESKTOP_BUILD || initialized) return

  const registry = new TelemetryRegistry()
  registry.registerProvider(new DesktopTelemetryProvider())
  setTelemetryRegistry(registry)
  initialized = true
}
