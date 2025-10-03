<script setup lang="ts">
import { toRefs } from 'vue'

const props = defineProps(['cardIndex'])

const { cardIndex } = toRefs(props)

const emit = defineEmits(['clickHandler'])

const handleClick = (id) => {
  emit('clickHandler', id)
}
</script>

<template>
  <div
    class="bg-amber-200 w-full h-26 border-1 border-black rounded-sm drop-shadow-lg cursor-pointer"
    @click="handleClick(cardIndex)"
  />
</template>

<style lang="css" scoped></style>
