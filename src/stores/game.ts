import { defineStore } from 'pinia'
import { ref } from 'vue'

import { generateCards } from '@/lib/utils'

export const useGameStore = defineStore('game', () => {
  const cards = ref([])
  const matches = ref(0)
  const moves = ref(0)
  const selection = ref(null)
  const selection2 = ref(null)

  const startGame = () => {
    cards.value = generateCards()
    matches.value = 0
    moves.value = 0
    selection.value = null
    selection2.value = null
  }

  const firstSelect = (id) => {
    // get the index of the selected card
    const idx = cards.value.findIndex((item) => item.id === id)
    // show selected card
    cards.value[idx] = { ...cards.value[idx], status: 'show' }
    // save the id of first selection
    selection.value = id
  }

  const secondSelect = (id) => {
    // get the index of the selected card
    const idx = cards.value.findIndex((item) => item.id === id)
    // show selected card
    cards.value[idx] = { ...cards.value[idx], status: 'show' }
    // save the id of first selection
    selection2.value = id
    // increment moves
    moves.value++
  }

  const checkMatch = () => {
    const idx1 = cards.value.findIndex((item) => item.id === selection.value)
    const idx2 = cards.value.findIndex((item) => item.id === selection2.value)

    if (cards.value[idx1].value === cards.value[idx2].value) {
      // set cards to "match"
      cards.value[idx1] = { ...cards.value[idx1], status: 'match' }
      cards.value[idx2] = { ...cards.value[idx2], status: 'match' }
      // increment matches
      matches.value++

      // reset selections
      selection.value = null
      selection2.value = null
    } else {
      setTimeout(() => noMatchTimeout(idx1, idx2), 1000)
    }
  }

  const noMatchTimeout = (idx1, idx2) => {
    // hide choices
    cards.value[idx1] = { ...cards.value[idx1], status: 'hidden' }
    cards.value[idx2] = { ...cards.value[idx2], status: 'hidden' }

    // reset selections
    selection.value = null
    selection2.value = null
  }

  return {
    cards,
    matches,
    moves,
    selection,
    selection2,
    startGame,
    firstSelect,
    secondSelect,
    checkMatch,
  }
})
