<script setup>
import { DepositeSheet } from '@/entities/deposite';
import { OperationSheet } from '@/entities/operation';
import { AddDeposite } from '@/features/addDeposite';
import { AddOperation } from "@/features/addOperation";

</script>

<template>
    <DepositeSheet />
    <OperationSheet />
    <AddOperation />
</template>

<style scoped>

</style>