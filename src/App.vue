<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'
import { useGameStore } from '@/stores/game'

const store = useGameStore()

onBeforeMount(() => store.startGame())

const memoryCards = computed(() => store.cards)
</script>

<template>
  <div class="container mx-auto h-screen">
    <h1 className="text-2xl text-center my-8">Memory Game</h1>
    <div class="mx-32 my-16 w-4/5 bg-white p-8 rounded-xl">
      <div class="grid grid-cols-6 gap-4 content-center">
        <card-item
          v-for="item in memoryCards"
          :key="item.id"
          :cardValue="item.value"
          :cardStatus="item.status"
        />
      </div>
    </div>
  </div>
</template>
