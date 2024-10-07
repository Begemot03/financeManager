<script setup lang="ts">
import { computed } from 'vue';
import { depositeModel } from '../../model';
import { currencyIcon } from '@/shared/lib/currency';

const depositeStore = depositeModel();
const deposites = computed(() => depositeStore.deposites);

</script>

<template>
    <v-card
        max-width="400"
    >
        <v-toolbar
            title="Депозиты"
        />
        <v-list 
            lines="two"
            rounded
        >
            <v-list-item
                v-for="{ name, comment, startBalance, currency } in deposites"
                :title="name"
                :subtitle="comment"
                density="compact"
            >
                <template #append>
                    <div>{{ startBalance }}</div>
                    <v-icon :icon="currencyIcon[currency]" end />
                </template>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<style scoped>
    
</style>