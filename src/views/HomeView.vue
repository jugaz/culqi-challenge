<script setup>
import { ref, computed } from 'vue'
import { getActualBalance } from '@/composables/useApi'
import { useHomeStore } from '@/stores/home' 

import Header from '@/components/headerCulqi.vue'
import Loading from '@/components/loadingCulqi.vue'
import Filtro from '@/components/filtroCulqi.vue'
import BoxCulqi from '@/components/boxCulqi.vue'

const storeHome = useHomeStore()
const loading = ref(false)

const balanceDisplay = computed(() => !loading.value ? `S/ ${storeHome.balanceCommerce}` : '')

const loadPrice = async () => {
  loading.value = true
  const { data } = await getActualBalance()
  await storeHome.updateBalance(data.balanceCommerce)
  loading.value = false
}
</script>

<template>
  <Header :configHeader="{'name':'Recargas y pagos'}"/>

  <section class="mt-[1rem] flex flex-col">
    <span class="text-[#6a7789] text-[13px]"><b>Saldo Virtual</b></span>
    <div class="flex items-center" :class="{'mb-[5px]': loading}">
      <span :class="{'mr-[15px]': loading}" class="text-[30px] text-[#151929]"><b>{{ balanceDisplay }}</b></span>
      <Loading v-if="loading"/>

      <img @click="loadPrice" src="@/assets/icons/load.svg" class="w-[20px] h-[20px] ml-[15px] cursor-pointer" width="25" height="25" alt="Icono Cargando"/>
    </div>
  </section>

  <section>
    <Filtro
        :settingFiltro="{
          'classFiltro': 'w-[73%] py-[2px]',
          'iconFiltro': 'heart.svg',
          'textFiltro': '¿Cómo cargar mi saldo virtual?'
        }">
    </Filtro>
  </section>


  <section class="flex items-center mt-[20px]">
    <span class="text-[#6a7789] text-[14px]">Código para cargar tu saldo: </span>
    <span class="text-[#57c1bd] text-[14px] ml-[5px]">{1245678901}</span>
  </section>

  <div class="border-t p-[0_2rem] mt-[20px]">
    <BoxCulqi :settingBox="{
      'isValid': true,
      'iconBox': 'recargas.svg',
      'titleBox': 'Recargas',
    }"/>

    <BoxCulqi :settingBox="{
      'isValid': false,
      'iconBox': 'foco.svg',
      'titleBox': 'Pago de servicios',
    }"/>

    <BoxCulqi :settingBox="{
      'isValid': false,
      'iconBox': 'calendario.svg',
      'titleBox': 'Historial de ganancias y operaciones',
    }"/>
  </div>
  
</template>

<style scoped>
  section {
    @apply p-[0_2rem]
  }
</style>
