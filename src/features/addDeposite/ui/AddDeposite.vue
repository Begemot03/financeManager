<script setup lang="ts">
import { notify } from '@/shared/ui/notification';


function btnHandler() {
    notify({
        title: 'Успешная операция',
        subtitle: 'Депозит добавлен',
        type: 'info'
    })
}

</script>

<template>
    <v-btn
        @click="btnHandler"
    >
        Добавить
    </v-btn>
</template>

<style scoped>
    
</style>