<script setup>
import { reactive } from 'vue';

const routes = reactive([
    {
        name: "Главная",
        path: "/",
    },
    {
        name: "Финансы",
        path: "/finance",
    },
    {
        name: "Счета",
        path: "/deposite",
    },
])

</script>

<template>
    <nav>
        <RouterLink
            v-for="({ path, name }, index) in routes"
            :key="index"
            :to="path"
        >{{ name  }}</RouterLink>
    </nav>
</template>

<style scoped>
    
</style>