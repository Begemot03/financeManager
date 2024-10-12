<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { depositeModel } from '../../model';
import { currencyIcon } from '@/shared/lib/currency';
import { SpinLoader } from '@/shared/ui/spinLoader';

const depositeStore = depositeModel();

const isDepositesEmpty = computed(() => depositeStore.deposites.length == 0);
const showEmptyListElement = computed(() => isDepositesEmpty && !depositeStore.loading);

onMounted(() => {
    depositeStore.getDepositeList();
});

</script>

<template>
    <v-card
        max-width="400"
    >
        <v-toolbar
            title="Депозиты"
        />
        <v-list 
        >
            <template
                v-if="!isDepositesEmpty"
            >
                <v-list-item
                    v-for="{ name, comment, startBalance, currency } in depositeStore.deposites"
                    :title="name"
                    :subtitle="comment"
                    density="compact"
                >
                    <template #append>
                        <div>{{ startBalance }}</div>
                        <v-icon :icon="currencyIcon[currency]" end />
                    </template>
                </v-list-item>
            </template>
            <template
                v-else-if="showEmptyListElement"
            >
                <v-list-item
                    title="Тут пока пусто"
                ></v-list-item>
            </template>
           
            <SpinLoader 
                :loading="depositeStore.loading"
            />
        </v-list>
    </v-card>
</template>