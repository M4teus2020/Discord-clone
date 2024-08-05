<script setup lang="ts">
import { cn } from '@/lib/utils'
import type { ClassValue } from 'clsx'
import { computed } from 'vue'
import { CheckedIcon } from './icons'

const props = defineProps<{
  label?: string
  name?: string
  required?: boolean

  class?: ClassValue
  labelClass?: ClassValue
  inputClass?: ClassValue
}>()

const checked = defineModel<boolean>({
  default: false
})

const containerClass = computed(() => cn('w-full flex items-center uppercase gap-2', props.class))
const labelClass = computed(() => cn('text-[10px] font-semibold tracking-wider', props.labelClass))
const inputClass = computed(() =>
  cn(
    'size-6 border-[1px] border-white flex justify-center items-center rounded-md flex-shrink-0',
    { 'bg-[#5865f2]': checked.value },
    props.inputClass
  )
)

const inputId = computed(() => props.name || 'checkbox')
</script>

<template>
  <label :class="containerClass">
    <input
      type="checkbox"
      :name="name"
      :id="inputId"
      class="hidden"
      :required="required"
      v-bind="$attrs"
      v-model="checked"
    />

    <div :class="inputClass">
      <CheckedIcon v-if="checked" />
    </div>

    <span :class="labelClass"> {{ label }} <span v-if="required" class="text-red">*</span> </span>
  </label>
</template>
