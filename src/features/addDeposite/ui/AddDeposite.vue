<script setup lang="ts">
import { addDepositeModel } from '../model';

const addDepositeStore = addDepositeModel();

</script>

<template>
    <v-btn
        :loading="addDepositeStore.loading"
    >
        <slot></slot>
    </v-btn>
</template>