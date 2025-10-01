import { MAX_MATCHING_VALUES } from '@/lib/constants'

const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export const generateCards = () => {
  const cards = []

  for (let i = 1; i <= MAX_MATCHING_VALUES; i++) {
    for (let j = 0; j <= 1; j++) {
      cards.push({ id: j * MAX_MATCHING_VALUES + i, value: i, status: 'hidden' })
    }
  }

  return shuffle(cards)
}
