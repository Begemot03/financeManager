<script setup lang="ts">
const props = defineProps<{
	loading: boolean;
}>();
</script>
<template>
	<v-container
		v-if="props.loading"
		class="fill-height d-flex align-center justify-center"
	>
		<v-progress-circular
			indeterminate
			color="primary"
		/>
	</v-container>
</template>
