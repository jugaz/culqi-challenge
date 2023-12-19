import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', () => {
  const accessGranted = ref(false) 
  const balanceCommerce = ref(1450.25)

  function grantAccess() { 
    accessGranted.value = true
  }

  async function updateBalance(newBalance) {
    if (newBalance !== balanceCommerce.value) {
      balanceCommerce.value = newBalance
    }
    return balanceCommerce.value
  }

  return {accessGranted,balanceCommerce, grantAccess, updateBalance }
})