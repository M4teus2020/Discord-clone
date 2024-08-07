<script setup lang="ts">
import { cn } from '@/lib/utils'
import type { ClassValue } from 'clsx'
import { computed, type InputTypeHTMLAttribute } from 'vue'

const props = defineProps<{
  label?: string
  type?: InputTypeHTMLAttribute
  name?: string
  required?: boolean

  error?: string | string[]

  class?: ClassValue
  labelClass?: ClassValue
  inputClass?: ClassValue
}>()

const containerClass = computed(() => cn('w-full flex flex-col uppercase', props.class))
const labelClass = computed(() =>
  cn('mb-2 text-xs font-semibold tracking-wider', { 'text-red': props.error }, props.labelClass)
)
const inputClass = computed(() => cn('bg-[#1e1f22] h-10 p-2.5 rounded-md focus:outline-none', props.inputClass))

const inputId = computed(() => props.name || 'input')

const model = defineModel<string | number | null | undefined>()
</script>

<template>
  <div :class="containerClass">
    <label v-if="label" :for="inputId" :class="labelClass">
      {{ label }}
      <span v-if="error" class="mt-1 text-xs capitalize">
        - {{ Array.isArray(error) ? error.join(', ') : error }}
      </span>
      <span v-else-if="required" class="text-red">*</span>
    </label>

    <input
      :type="type"
      :name="name"
      :id="inputId"
      :class="inputClass"
      :required="required"
      autocomplete="off"
      v-bind="$attrs"
      v-model="model"
    />
  </div>
</template>
