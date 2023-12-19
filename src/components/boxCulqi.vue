
<script setup>
import { useRouter } from 'vue-router' 
import { useImages } from '@/composables/useShared'

const props = defineProps({
   
   settingBox: {
    type: Object,
   },
})


const router = useRouter()

const { getImagePath } = useImages();

const goToRecharge = (isValid) => {
    if(isValid == true){
        router.push({ name: 'recharge' })
    }
}

</script>

<template>

    <div class="flex items-center bg-[#f4f5f6] rounded-[5px] py-[15px] cursor-pointer mt-[20px] pr-[20px]" @click="goToRecharge(props.settingBox.isValid)">
        <div class="flex items-center justify-center bg-[#eb6f25] rounded-[3px] w-[25px] h-[27px] ml-[15px]">
            <img :src="getImagePath('icons/'+ props.settingBox.iconBox)" class="w-[15px] h-[15px] " width="25" height="25" :alt="'Icono ' + props.settingBox.titleBox"/>
        </div>
        <span class="ml-[10px]"><b>{{ props.settingBox.titleBox }}</b></span>
    </div>
</template>