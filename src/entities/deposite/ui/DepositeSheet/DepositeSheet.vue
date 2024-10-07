<script setup lang="ts">
import { computed } from 'vue';
import { useDepositeStore } from '../../model';
import { CurrencyIcon } from '@/shared/lib/currency';

const depositeStore = useDepositeStore();
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
                    <v-icon :icon="CurrencyIcon[currency]" end />
                </template>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<style scoped>
    
</style>