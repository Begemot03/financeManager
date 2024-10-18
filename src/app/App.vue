<script setup lang="ts">
import { DefaultLayout } from '@/shared/ui/layouts';
import Notification from '@/shared/ui/notification/ui/Notification.vue';
import { Navigation } from '@/widgets/navigation';
import { Header } from '@/widgets/header';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const layout = computed(() => route.meta.layout || DefaultLayout);
</script>

<template>
	<component :is="layout">
		<template #header>
			<Header />
		</template>
		<template #navigation>
			<Navigation />
		</template>
		<template #default>
			<RouterView />
		</template>
	</component>
	<Notification />
</template>
