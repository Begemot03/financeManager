<script setup>
import { DepositeSheet } from '@/entities/deposite';
import { OperationSheet } from '@/entities/operation';
import NewDepositeModal from '@/widgets/newDepositeModal/ui/NewDepositeModal.vue';
import { NewOperationModal } from '@/widgets/newOperationModal';

</script>

<template>
    <DepositeSheet />
    <OperationSheet />
    <NewDepositeModal />
    <NewOperationModal />
</template>