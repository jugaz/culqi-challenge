<script setup>
import { useImages } from '@/composables/useShared'

const props = defineProps({
    listCompanies: {
        type:  Array, 
        default: () => []
    }
});

const { getImagePath } = useImages();
</script>

<template>
    <div class="flex flex-col p-[0_2rem] border-b py-[20px] last:border-b-[0]" v-for="(item, index) in props.listCompanies" :key="index"> 
        <div class="flex items-center justify-between">
            <div class="flex items-center" >
               
                <img :src="item.company == 'Soat la Positiva' ? getImagePath('images/soat-la-positiva.webp') : item.image" class="" width="30" height="30" :alt="'Icono '+ item.company "/>
                <p class="ml-[5px] text-[15px] text-[#151929]"><b>{{ item.company }}</b></p>
            </div> 
            <img src="@/assets/icons/estrella.svg" class="w-[20px] h-[20px] cursor-pointer " width="25" height="25" alt="Icono estrella"/>
        </div>
    </div>
</template>