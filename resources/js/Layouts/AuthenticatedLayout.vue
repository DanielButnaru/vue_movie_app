<template>
    <div >
        <Navigation/>
    </div>

    <main>
        <slot/>
    </main>


</template>
<script setup>
import Navigation from "@/Components/app/Navigation.vue";
</script>
<style scoped>
</style>

