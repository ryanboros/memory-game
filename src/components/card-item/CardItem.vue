<script setup lang="ts">
import { computed, toRefs } from 'vue'

import CardBack from '@/components/card-back/CardBack.vue'
import CardFront from '@/components/card-front/CardFront.vue'

const props = defineProps(['cardIndex', 'cardStatus', 'cardValue'])

const { cardIndex, cardStatus, cardValue } = toRefs(props)

const activeComponent = computed(() => (cardStatus.value === 'hidden' ? CardBack : CardFront))
</script>

<template>
  <component
    :is="activeComponent"
    :cardIndex="cardIndex"
    :cardValue="cardValue"
    :cardStatus="cardStatus"
  ></component>
</template>
