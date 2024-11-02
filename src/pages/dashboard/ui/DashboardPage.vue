<script setup>
import { OperationSheet } from '@/widgets/operationSheet';
import { DepositeSheet } from '@/widgets/depositeSheet';
import NewDepositeModal from '@/widgets/newDepositeModal/ui/NewDepositeModal.vue';
import { NewOperationModal } from '@/widgets/newOperationModal';
</script>

<template>
	<DepositeSheet />
	<OperationSheet />
	<NewDepositeModal />
	<NewOperationModal />
</template>
