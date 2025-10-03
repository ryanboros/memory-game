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
      // set cards to "right"
      cards.value[idx1] = { ...cards.value[idx1], status: 'right' }
      cards.value[idx2] = { ...cards.value[idx2], status: 'right' }
      // increment matches
      matches.value++

      // timeout to change to "match" after 1 sec
      setTimeout(() => matchTimeout(idx1, idx2), 1000)
    } else {
      // set cards to "wrong"
      cards.value[idx1] = { ...cards.value[idx1], status: 'wrong' }
      cards.value[idx2] = { ...cards.value[idx2], status: 'wrong' }

      // timeout to change to "hidden" after 1 sec
      setTimeout(() => noMatchTimeout(idx1, idx2), 1000)
    }
  }

  const matchTimeout = (idx1, idx2) => {
    // match choices
    cards.value[idx1] = { ...cards.value[idx1], status: 'match' }
    cards.value[idx2] = { ...cards.value[idx2], status: 'match' }

    // reset selections
    selection.value = null
    selection2.value = null
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
