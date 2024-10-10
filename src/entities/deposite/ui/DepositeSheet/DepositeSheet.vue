<script setup lang="ts">
import { onMounted } from 'vue';
import { depositeModel } from '../../model';
import { currencyIcon } from '@/shared/lib/currency';

const depositeStore = depositeModel();


onMounted(() => {
    depositeStore.getDepositeList();
})

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
            <v-container 
                v-if="depositeStore.loading" 
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