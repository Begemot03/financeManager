<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { operationModel } from '../../model';
import { currencyIcon } from '@/shared/lib/currency';

const operationStore = operationModel();

onMounted(() => {
    operationStore.getOperationList();
});

</script>

<template>
    <v-card
        max-width="400"
    >
        <v-toolbar
            title="Операции"
        />
        <v-list>
            <v-list-item
                v-for="{ id, type, sum, currency, category, comment } in operationStore.operations"
                :key="id"
                :title="category"
                :subtitle="comment"
                density="compact"
                :class="type == 'Доход' ? 'bg-teal' : 'bg-red'"
            >
                <template #append>
                    <div>{{ sum }}</div>
                    <v-icon :icon="currencyIcon[currency]" />
                </template>
            </v-list-item>
            <v-container 
                v-if="operationStore.loading" 
                class="fill-height d-flex align-center justify-center"
            >
                <v-progress-circular
                    indeterminate
                    color="primary"
                />
            </v-container>
        </v-list>
    </v-card>
</template>