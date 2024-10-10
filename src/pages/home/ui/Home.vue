<script setup>
import { DepositeSheet } from '@/entities/deposite';
import { OperationSheet } from '@/entities/operation';
import { AddDeposite } from '@/features/addDeposite';
import { AddOperation } from "@/features/addOperation";
import { NewOperationModal } from '@/widgets/newOperationModal';

</script>

<template>
    <DepositeSheet />
    <OperationSheet />
    <AddDeposite />
    <NewOperationModal />
</template>

<style scoped>

</style>