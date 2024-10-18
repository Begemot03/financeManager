<script setup>
import { reactive } from 'vue';

const routes = reactive([
    {
        name: "Главная",
        to: "/",
    },
    {
        name: "Финансы",
        to: "/finance",
    },
    {
        name: "Счета",
        to: "/deposite",
    },
])

</script>

<template>
    <v-navigation-drawer app>
        <v-list>
            <v-list-item
                v-for="({name, to}, i) in routes"
                :key="i"
                :to="to"    
                :title="name"
                link
            ></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>