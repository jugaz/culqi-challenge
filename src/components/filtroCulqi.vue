<script setup>
import { useImages } from '@/composables/useShared'

 const props = defineProps({
  
  settingFiltro : {
    type:Object
  },
})

const { getImagePath } = useImages();

</script>
<template>
  <div class="flex items-center justify-center border rounded-full" :class="props.settingFiltro?.classFiltro">
    <slot name="icono" />
    <img :src="getImagePath('icons/'+ props.settingFiltro.iconFiltro)" class="cursor-pointer w-[15px] h-[15px] ml-[2px] " width="25" height="25" :alt="'Icono ' + props.settingBox?.textFiltro"/>
  
  <span class=" text-[#6a7789] text-[14px] ml-[5px]">{{ props.settingFiltro.textFiltro }}</span>
</div>
</template>