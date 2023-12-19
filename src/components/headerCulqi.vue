<script setup>
 const props = defineProps({
   
   configHeader: {
    type:Object,
    required: true
   },
})
</script>
<template>
    <header class="relative bg-slate-900 w-full text-white text-[18px] rounded-b-lg flex items-center justify-center xs:h-[60px]">
      <slot name="iconoHeader"/>
      {{ props.configHeader.name }}
    </header>
</template>