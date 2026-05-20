<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import Button from '@/components/ui/button/Button.vue'
import { useViewErrorsInGraph } from '@/components/error/useViewErrorsInGraph'

const { t } = useI18n()
const { viewErrorsInGraph } = useViewErrorsInGraph()
</script>

<template>
  <div
    role="alert"
    data-testid="linear-error-warning"
    class="mb-3 flex items-start gap-2.5 rounded-lg border border-destructive-background/40 bg-destructive-background/10 p-3"
  >
    <i
      aria-hidden="true"
      class="mt-0.5 icon-[lucide--triangle-alert] size-4 shrink-0 text-destructive-background"
    />
    <div class="flex min-w-0 flex-1 flex-col gap-1.5">
      <div
        class="text-sm font-medium text-base-foreground"
        v-text="t('linearMode.error.workflowWarningTitle')"
      />
      <div
        class="text-sm/relaxed text-muted-foreground"
        v-text="t('linearMode.error.workflowWarningDescription')"
      />
      <Button
        variant="textonly"
        size="sm"
        class="mt-2 w-fit shrink-0 self-end"
        data-testid="linear-view-errors"
        @click="viewErrorsInGraph"
      >
        {{ t('linearMode.error.workflowWarningAction') }}
        <i aria-hidden="true" class="icon-[lucide--arrow-right] size-3.5" />
      </Button>
    </div>
  </div>
</template>
