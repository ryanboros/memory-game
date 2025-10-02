<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import { MAX_MATCHING_VALUES } from '@/lib/constants'
import { useGameStore } from '@/stores/game'

const store = useGameStore()

onMounted(() => store.startGame())

const { cards, matches, moves } = storeToRefs(store)

const showFinished = computed(() => matches.value === MAX_MATCHING_VALUES)

const handleCardClick = (id) => {
  if (!store.selection) {
    store.firstSelect(id)
  } else if (!store.selection2) {
    store.secondSelect(id)
    store.checkMatch()
  }
}

const handleNewGameClick = () => {
  store.startGame()
}
</script>

<template>
  <div class="container mx-auto h-screen">
    <h1 class="text-2xl text-center my-6">Memory Game</h1>

    <div class="mx-auto my-4 w-4/5 bg-sky-300 p-8 rounded-lg relative">
      <div class="grid grid-cols-6 gap-4 content-center">
        <card-item
          v-for="item in cards"
          :key="item.id"
          :cardIndex="item.id"
          :cardValue="item.value"
          :cardStatus="item.status"
          @clickHandler="handleCardClick"
        />
      </div>
      <div class="absolute inset-0 flex items-center justify-center" v-if="showFinished">
        <button
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          @click="handleNewGameClick"
        >
          Play Again
        </button>
      </div>
    </div>
    <div class="mx-auto mx-auto w-4/5 flex justify-center">
      <div>Moves: {{ moves }}</div>
    </div>
  </div>
</template>
