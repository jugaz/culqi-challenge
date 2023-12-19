<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { getGetProviders, setupInterceptors } from '@/composables/useApi'
import { useRechargeStore } from '@/stores/recharge' 

import Header from '@/components/headerCulqi.vue'
import List from '@/components/listCulqi.vue'
import Filtro from '@/components/filtroCulqi.vue'
import Buscar from '@/components/buscarCulqi.vue'



const selectedFilter = ref(null)

const router = useRouter()
setupInterceptors(router)
const storeRecharge = useRechargeStore()
const searchInput = ref('')
const searchResults = ref([])

const autocomplete = (value) => {
    const searchTerm = value.trim().toLowerCase();
    if (searchTerm.length < 3) {
      searchResults.value = storeRecharge.companies;
      console.log('El término de búsqueda debe tener al menos 3 caracteres.');
      return;
    }


    const regex = /^[a-z0-9\s]+$/;
    if (!regex.test(searchTerm)) {
        console.log('El término de búsqueda contiene caracteres no permitidos.');
        return;
    }

    const matchedCompanies = storeRecharge.companies.filter(company => 
        company.company.toLowerCase().includes(searchTerm)
    );
    
    searchResults.value = matchedCompanies;
    console.log("suggestions", matchedCompanies);
};

const filtroList = [
    {
      'classFiltro': 'px-[18px] py-[2px] mr-[5px] cursor-pointer',
      'iconFiltro': 'heart.svg',
      'textFiltro': 'Todos'
    },
    {
      'classFiltro': 'px-[20px] py-[2px] mr-[5px] cursor-pointer',
      'iconFiltro': 'estrella.svg',
      'textFiltro': 'Favoritos'
    },
    {
      'classFiltro': 'px-[20px] py-[2px] mr-[5px] cursor-pointer',
      'iconFiltro': 'heart.svg',
      'textFiltro': 'Telefónica'
    }
]

const goBack = () => {
  router.push({ name: 'home' })
}

watch(searchInput, (newVal) => {
    if(newVal){
      autocomplete(newVal);
    } else {
      searchResults.value = storeRecharge.companies.map(company => company.company);
    }
});

onMounted(async () => {
  const { data } = await getGetProviders()
  storeRecharge.companies = data.companies
  searchResults.value = data.companies
})


</script>

<template>
  <Header :configHeader="{
    'name':'Recargas'
  }">

    <template #iconoHeader>
      <img src="@/assets/icons/flecha.svg" class="absolute left-[5%] cursor-pointer" width="25" height="25" alt="Icono flecha" @click="goBack()"/>
    </template>
  
  </Header>

  <Buscar 
    :searchModel="searchInput"
    @search:filter ="autocomplete"
  />

  <section class="max-w-[90%] m-auto py-[20px] h-[45px]">
    <div class="flex flex-nowrap whitespace-nowrap overflow-x-auto">
      <Filtro 
        v-for="(filtro, index) in filtroList" 
        :key="index"
        :settingFiltro="filtro"
        :class="{ 'border-orange-500': selectedFilter === index }"
        @click="selectedFilter = index">
      </Filtro>
    </div>

  </section>

  <List :listCompanies="searchResults"/>
</template>
