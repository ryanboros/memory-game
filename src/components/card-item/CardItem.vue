<script setup lang="ts">
import { ref, toRefs } from 'vue'

import CardBack from '@/components/card-back/CardBack.vue'
import CardFront from '@/components/card-front/CardFront.vue'

const props = defineProps(['cardStatus', 'cardValue'])

const { cardStatus, cardValue } = toRefs(props)

const val = ref(cardValue.value)
const activeComponent = cardStatus.value === 'hidden' ? CardBack : CardFront
</script>

<template>
  <component :is="activeComponent" :cardValue="val"></component>
</template>
