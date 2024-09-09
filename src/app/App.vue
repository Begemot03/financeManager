<script setup lang="ts">
import { useOperationStore } from '@/entities/operation';
import { BaseModal } from '@/shared/ui';
import { Navigation } from '@/widgets/navigation';
import { OperationList } from '@/widgets/operationList';
import { reactive } from 'vue';
import { mdiAbacus } from "@mdi/js";

const operationStore = useOperationStore();

</script>

<template>
	<Navigation />
	<RouterView />
	<OperationList />
	<BaseModal
		:close-icon="mdiAbacus"
		title="Добавить операцию"
	>
		<template v-slot:body>
			<v-row dense>
				<v-col
					cols="12"
					md="4"
					sm="6"
				>
					<v-text-field></v-text-field>
				</v-col>
			</v-row>
		</template>
	</BaseModal>
</template>

<style scoped>

</style>
