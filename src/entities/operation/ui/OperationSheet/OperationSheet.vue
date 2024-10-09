<script setup lang="ts">
import { computed } from 'vue';
import { OperationType, operationModel } from '../../model';
import { currencyIcon } from '@/shared/lib/currency';

const operationStore = operationModel();
const operations = computed(() => operationStore.operations);

</script>

<template>
    <v-card
        max-width="600"
    >
        <v-list>
            <v-list-item
                v-for="{ id, type, sum, currency, category, comment } in operations"
                :key="id"
                :title="category"
                :subtitle="comment"
                density="compact"
                :class="type == OperationType.Income ? 'bg-teal' : 'bg-red'"
            >
                <template #append>
                    <div>{{ sum }}</div>
                    <v-icon :icon="currencyIcon[currency]" />
                </template>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<style scoped>
    
</style>