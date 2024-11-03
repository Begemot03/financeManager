<script setup lang="ts">
import { routes } from '@/shared/config';
import { reactive } from 'vue';

const items = reactive([
	{
		name: 'Дашборд',
		to: routes.DASHBOARD_PAGE,
	},
	{
		separator: true,
	},
	{
		label: 'Действия',
		items: [
			{
				name: 'Создать операцию',
				to: '/',
			},
			{
				name: 'Добавить счет',
				to: '/',
			},
		],
	},
	{
		separator: true,
	},
	{
		label: 'Статистика',
		items: [
			{
				name: 'Все операции',
				to: routes.OPERATIONS_PAGE,
			},
			{
				name: 'Траты',
				to: routes.EXPENSES_PAGE,
			},
		],
	},
]);
</script>

<template>
	<Menu :model="items">
		<template #start>
			<span class="inline-flex items-center gap-2 px-4 py-2">
				<i class="pi pi-wallet"></i>
				<span class="text-2xl font-semibold">Финансы</span>
			</span>
		</template>
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
	</Menu>
</template>
