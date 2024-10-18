<script setup lang="ts">
import { DefaultLayout } from '@/shared/ui/layouts';
import Notification from '@/shared/ui/notification/ui/Notification.vue';
import { Navigation } from '@/widgets/navigation';
import { Header } from "@/widgets/header";
import { Footer } from '@/widgets/footer';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const layout = computed(() => route.meta.layout || DefaultLayout);

</script>

<template>
	<component :is="layout">
		<template v-slot:header>
			<Header />
		</template>
		<template v-slot:navigation>
			<Navigation />
		</template>
		<template v-slot:default>
			<RouterView />
		</template>
		<template v-slot:footer>
			<Footer />
		</template>
	</component>
	<Notification />
</template>