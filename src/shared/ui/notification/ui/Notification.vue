<script setup lang="ts">
import { notificationModel } from '../model';

const notificationStore = notificationModel();
</script>

<template>
	<teleport to="body">
		<v-alert
			v-model="notificationStore.isOpen"
			closable
			:type="notificationStore.notification.type"
			:title="notificationStore.notification.title"
			:text="notificationStore.notification.subtitle"
			max-width="400"
			class="alert-position"
		/>
	</teleport>
</template>

<style scoped>
.alert-position {
	position: fixed;
	bottom: 1rem;
	right: 1rem;
}
</style>
