<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    searchModel: {
        type:  String, 
        default: ''
    }
});

const emit = defineEmits(['search:filter']);

let search = ref( props.searchModel );

const filterUsers = () => {
    console.log("search", search.value)
    emit('search:filter', search.value);
};

watch(() => props.searchModel, (newModelValue) => {
    search.value = newModelValue;
});
</script>

<template>
    <div class="flex flex-col px-[2rem] mt-[0.5rem]" role="search">
        <label class="text-[13px] text-[#151929] mb-[0.5rem]"><b>Buscar empresa</b></label>
        <div class="flex items-center justify-between bg-[#f4f5f6] w-full h-[50px] pr-[0.5rem] roudend-[3px]">
            <input type="search" id="search" class="bg-transparent border-none outline-none px-[0.5rem]"  placeholder ="ej. Culqi" v-model="search" @input="filterUsers"/>
            <img src="@/assets/icons/buscar.svg" class="w-[20px] h-[20px] cursor-pointer " width="25" height="25" alt="Icono estrella"/>
        </div>
        
    </div>
</template>
<style scoped>

/* Para WebKit (Chrome, Safari) */
input::placeholder {
  color: #c1c6ce;
  font-size: 1.5em;
}

/* Para Firefox */
input::-moz-placeholder {
    color: #c1c6ce;
  font-size: 1.5em;
}

/* Para Internet Explorer */
input:-ms-input-placeholder {
  color: #c1c6ce;
  font-size: 1.5em;
}
</style>