import { defineStore } from 'pinia'

import { generateCards } from '@/lib/utils'

export const useGameStore = defineStore('game', {
  state: () => ({
    cards: [],
    matches: 0,
    moves: 0,
    selection: null,
  }),
  getters: {},
  actions: {
    startGame() {
      this.cards = generateCards()
      this.matches = 0
      this.moves = 0
      this.selection = null
    },
  },
})
