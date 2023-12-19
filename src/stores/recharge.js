import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useRechargeStore = defineStore('recharge', () => {
    const companies = ref(null)
  
    return { companies }
  })
  