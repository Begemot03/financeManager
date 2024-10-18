<script setup lang="ts">
const props = defineProps<{
	visible: boolean;
	title: string;
	persistent: boolean;
}>();

const emit = defineEmits(["update:visible"]);
</script>

<template>
	<v-dialog
		v-model="props.visible"
		max-width="600"
		:persistent="props.persistent"
		@update:model-value="(val) => emit('update:visible', val)"
	>
		<template #activator>
			<slot name="activator" />
		</template>
		<slot />
	</v-dialog>
</template>
