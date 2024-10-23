<script setup lang="ts">
import { themeModel } from '@/entities/theme';
import { reactive } from 'vue';

const themeStore = themeModel();

const routes = reactive([
	{
		name: 'Главная',
		to: '/',
	},
	{
		name: 'Финансы',
		to: '/finance',
	},
	{
		name: 'Счета',
		to: '/deposite',
	},
]);
</script>

<template>
	<Menubar :model="routes">
		<template #item="{ item, props }">
			<RouterLink
				:to="item.to"
				v-slot="{ href, navigate }"
				custom
			>
				<a
					v-ripple
					:href="href"
					v-bind="props.action"
					@click="navigate"
				>
					<span>{{ item.name }}</span>
				</a>
			</RouterLink>
		</template>
	</Menubar>
</template>
