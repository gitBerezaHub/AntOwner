import { defineStore } from 'pinia'

export const useAppState = defineStore('appStateId', {
  state: () => {
    return {
      openedSection: 'news-feed'
    }
  }
})
