<template>
    <div class="w-full h-[100vh] flex flex-col items-center justify-center">
        <img src="@/assets/images/candado.webp" class="w-[250px]" alt="Error 401" />
	    <h1 class="text-[3em] text-white text">401 Unauthorized</h1>
    </div>
    
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
onMounted(() => {
      document.body.classList.add('error-body');
      document.documentElement.classList.add('error-html');
    });

    onBeforeUnmount(() => {
      document.body.classList.remove('error-body');
      document.documentElement.classList.remove('error-html');
    });
</script>

<style>
.error-body,
.error-html {
  @apply bg-[#233142]
}
</style>
