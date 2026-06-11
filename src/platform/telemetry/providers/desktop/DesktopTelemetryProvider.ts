import { useAppMode } from '@/composables/useAppMode'
import {
  checkForCompletedTopup as checkTopupUtil,
  clearTopupTracking as clearTopupUtil,
  startTopupTracking as startTopupUtil
} from '@/platform/telemetry/topupTracker'
import { getExecutionContext } from '@/platform/telemetry/utils/getExecutionContext'
import type { AuditLog } from '@/services/customerEventsService'

import type {
  AuthMetadata,
  BeginCheckoutMetadata,
  DefaultViewSetMetadata,
  EnterLinearMetadata,
  ExecutionErrorMetadata,
  ExecutionSuccessMetadata,
  ExecutionTriggerSource,
  HelpCenterClosedMetadata,
  HelpCenterOpenedMetadata,
  HelpResourceClickedMetadata,
  NodeAddedMetadata,
  NodeSearchMetadata,
  NodeSearchResultMetadata,
  PageViewMetadata,
  PageVisibilityMetadata,
  RunButtonProperties,
  SearchQueryMetadata,
  SettingChangedMetadata,
  ShareFlowMetadata,
  ShareLinkOpenedMetadata,
  SharedWorkflowRunMetadata,
  SubscriptionMetadata,
  SubscriptionSuccessMetadata,
  SurveyResponses,
  TabCountMetadata,
  TelemetryEventName,
  TelemetryProvider,
  TemplateFilterMetadata,
  TemplateLibraryClosedMetadata,
  TemplateLibraryMetadata,
  TemplateMetadata,
  UiButtonClickMetadata,
  WorkflowCreatedMetadata,
  WorkflowImportMetadata,
  WorkflowSavedMetadata
} from '../../types'
import { TelemetryEvents } from '../../types'
import { normalizeSurveyResponses } from '../../utils/surveyNormalization'

type HostTelemetryPrimitive = string | number | boolean | null | undefined
type HostTelemetryProperties = Record<
  string,
  HostTelemetryPrimitive | HostTelemetryPrimitive[]
>

function isHostTelemetryPrimitive(
  value: unknown
): value is HostTelemetryPrimitive {
  return (
    value === null ||
    value === undefined ||
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  )
}

function toHostTelemetryProperties(
  properties?: object
): HostTelemetryProperties | undefined {
  if (!properties) return undefined

  const out: HostTelemetryProperties = {}
  for (const [key, value] of Object.entries(properties)) {
    if (isHostTelemetryPrimitive(value)) {
      out[key] = value
    } else if (Array.isArray(value) && value.every(isHostTelemetryPrimitive)) {
      out[key] = value
    }
  }

  return out
}

export class DesktopTelemetryProvider implements TelemetryProvider {
  private capture(
    event: TelemetryEventName | 'begin_checkout',
    properties?: object
  ): void {
    window.__comfyDesktop2?.Telemetry?.capture(
      event,
      toHostTelemetryProperties(properties)
    )
  }

  trackSignupOpened(): void {
    this.capture(TelemetryEvents.USER_SIGN_UP_OPENED)
  }

  trackAuth(metadata: AuthMetadata): void {
    this.capture(TelemetryEvents.USER_AUTH_COMPLETED, metadata)
  }

  trackUserLoggedIn(): void {
    this.capture(TelemetryEvents.USER_LOGGED_IN)
  }

  trackSubscription(
    event: 'modal_opened' | 'subscribe_clicked',
    metadata?: SubscriptionMetadata
  ): void {
    this.capture(
      event === 'modal_opened'
        ? TelemetryEvents.SUBSCRIPTION_REQUIRED_MODAL_OPENED
        : TelemetryEvents.SUBSCRIBE_NOW_BUTTON_CLICKED,
      metadata
    )
  }

  trackBeginCheckout(metadata: BeginCheckoutMetadata): void {
    this.capture('begin_checkout', metadata)
  }

  trackMonthlySubscriptionSucceeded(
    metadata?: SubscriptionSuccessMetadata
  ): void {
    this.capture(TelemetryEvents.MONTHLY_SUBSCRIPTION_SUCCEEDED, metadata)
  }

  trackMonthlySubscriptionCancelled(): void {
    this.capture(TelemetryEvents.MONTHLY_SUBSCRIPTION_CANCELLED)
  }

  trackAddApiCreditButtonClicked(): void {
    this.capture(TelemetryEvents.ADD_API_CREDIT_BUTTON_CLICKED)
  }

  trackApiCreditTopupButtonPurchaseClicked(amount: number): void {
    this.capture(TelemetryEvents.API_CREDIT_TOPUP_BUTTON_PURCHASE_CLICKED, {
      credit_amount: amount
    })
  }

  trackApiCreditTopupSucceeded(): void {
    this.capture(TelemetryEvents.API_CREDIT_TOPUP_SUCCEEDED)
  }

  trackRunButton(options?: {
    subscribe_to_run?: boolean
    trigger_source?: ExecutionTriggerSource
  }): void {
    const executionContext = getExecutionContext()
    const { mode, isAppMode } = useAppMode()
    const properties: RunButtonProperties = {
      subscribe_to_run: options?.subscribe_to_run ?? false,
      workflow_type: executionContext.is_template ? 'template' : 'custom',
      workflow_name: executionContext.workflow_name ?? 'untitled',
      custom_node_count: executionContext.custom_node_count,
      total_node_count: executionContext.total_node_count,
      subgraph_count: executionContext.subgraph_count,
      has_api_nodes: executionContext.has_api_nodes,
      api_node_names: executionContext.api_node_names,
      has_toolkit_nodes: executionContext.has_toolkit_nodes,
      toolkit_node_names: executionContext.toolkit_node_names,
      trigger_source: options?.trigger_source,
      view_mode: mode.value,
      is_app_mode: isAppMode.value
    }

    this.capture(TelemetryEvents.RUN_BUTTON_CLICKED, properties)
  }

  startTopupTracking(): void {
    startTopupUtil()
  }

  checkForCompletedTopup(events: AuditLog[] | undefined | null): boolean {
    return checkTopupUtil(events)
  }

  clearTopupTracking(): void {
    clearTopupUtil()
  }

  trackSurvey(
    stage: 'opened' | 'submitted',
    responses?: SurveyResponses
  ): void {
    this.capture(
      stage === 'opened'
        ? TelemetryEvents.USER_SURVEY_OPENED
        : TelemetryEvents.USER_SURVEY_SUBMITTED,
      responses ? normalizeSurveyResponses(responses) : undefined
    )
  }

  trackEmailVerification(stage: 'opened' | 'requested' | 'completed'): void {
    const event =
      stage === 'opened'
        ? TelemetryEvents.USER_EMAIL_VERIFY_OPENED
        : stage === 'requested'
          ? TelemetryEvents.USER_EMAIL_VERIFY_REQUESTED
          : TelemetryEvents.USER_EMAIL_VERIFY_COMPLETED
    this.capture(event)
  }

  trackTemplate(metadata: TemplateMetadata): void {
    this.capture(TelemetryEvents.TEMPLATE_WORKFLOW_OPENED, metadata)
  }

  trackTemplateLibraryOpened(metadata: TemplateLibraryMetadata): void {
    this.capture(TelemetryEvents.TEMPLATE_LIBRARY_OPENED, metadata)
  }

  trackTemplateLibraryClosed(metadata: TemplateLibraryClosedMetadata): void {
    this.capture(TelemetryEvents.TEMPLATE_LIBRARY_CLOSED, metadata)
  }

  trackWorkflowImported(metadata: WorkflowImportMetadata): void {
    this.capture(TelemetryEvents.WORKFLOW_IMPORTED, metadata)
  }

  trackWorkflowOpened(metadata: WorkflowImportMetadata): void {
    this.capture(TelemetryEvents.WORKFLOW_OPENED, metadata)
  }

  trackWorkflowSaved(metadata: WorkflowSavedMetadata): void {
    this.capture(TelemetryEvents.WORKFLOW_SAVED, metadata)
  }

  trackDefaultViewSet(metadata: DefaultViewSetMetadata): void {
    this.capture(TelemetryEvents.DEFAULT_VIEW_SET, metadata)
  }

  trackEnterLinear(metadata: EnterLinearMetadata): void {
    this.capture(TelemetryEvents.ENTER_LINEAR_MODE, metadata)
  }

  trackShareFlow(metadata: ShareFlowMetadata): void {
    this.capture(TelemetryEvents.SHARE_FLOW, metadata)
  }

  trackShareLinkOpened(metadata: ShareLinkOpenedMetadata): void {
    this.capture(TelemetryEvents.SHARE_LINK_OPENED, metadata)
  }

  trackPageVisibilityChanged(metadata: PageVisibilityMetadata): void {
    this.capture(TelemetryEvents.PAGE_VISIBILITY_CHANGED, metadata)
  }

  trackTabCount(metadata: TabCountMetadata): void {
    this.capture(TelemetryEvents.TAB_COUNT_TRACKING, metadata)
  }

  trackNodeSearch(metadata: NodeSearchMetadata): void {
    this.capture(TelemetryEvents.NODE_SEARCH, metadata)
  }

  trackNodeSearchResultSelected(metadata: NodeSearchResultMetadata): void {
    this.capture(TelemetryEvents.NODE_SEARCH_RESULT_SELECTED, metadata)
  }

  trackSearchQuery(metadata: SearchQueryMetadata): void {
    this.capture(TelemetryEvents.SEARCH_QUERY, metadata)
  }

  trackNodeAdded(metadata: NodeAddedMetadata): void {
    this.capture(TelemetryEvents.NODE_ADDED, metadata)
  }

  trackTemplateFilterChanged(metadata: TemplateFilterMetadata): void {
    this.capture(TelemetryEvents.TEMPLATE_FILTER_CHANGED, metadata)
  }

  trackHelpCenterOpened(metadata: HelpCenterOpenedMetadata): void {
    this.capture(TelemetryEvents.HELP_CENTER_OPENED, metadata)
  }

  trackHelpResourceClicked(metadata: HelpResourceClickedMetadata): void {
    this.capture(TelemetryEvents.HELP_RESOURCE_CLICKED, metadata)
  }

  trackHelpCenterClosed(metadata: HelpCenterClosedMetadata): void {
    this.capture(TelemetryEvents.HELP_CENTER_CLOSED, metadata)
  }

  trackWorkflowCreated(metadata: WorkflowCreatedMetadata): void {
    this.capture(TelemetryEvents.WORKFLOW_CREATED, metadata)
  }

  trackWorkflowExecution(): void {
    this.capture(TelemetryEvents.EXECUTION_START)
  }

  trackExecutionError(metadata: ExecutionErrorMetadata): void {
    this.capture(TelemetryEvents.EXECUTION_ERROR, metadata)
  }

  trackExecutionSuccess(metadata: ExecutionSuccessMetadata): void {
    this.capture(TelemetryEvents.EXECUTION_SUCCESS, metadata)
  }

  trackSharedWorkflowRun(metadata: SharedWorkflowRunMetadata): void {
    this.capture(TelemetryEvents.SHARED_WORKFLOW_RUN, metadata)
  }

  trackSettingChanged(metadata: SettingChangedMetadata): void {
    this.capture(TelemetryEvents.SETTING_CHANGED, metadata)
  }

  trackUiButtonClicked(metadata: UiButtonClickMetadata): void {
    this.capture(TelemetryEvents.UI_BUTTON_CLICKED, metadata)
  }

  trackPageView(pageName: string, properties?: PageViewMetadata): void {
    this.capture(TelemetryEvents.PAGE_VIEW, {
      page_name: pageName,
      ...properties
    })
  }
}
