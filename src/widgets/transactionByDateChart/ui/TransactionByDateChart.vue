<script setup lang="ts">
import { computed } from 'vue';
import type { OperationType } from '@/entities/operation';
import type { ApexOptions } from 'apexcharts';

const props = defineProps<{
	transactions: OperationType[];
	textColor: string;
	barColor: string;
	seriesName: string;
}>();

const dates = computed(() => [
	...new Set(props.transactions.map((op) => op.creationDate)),
]);

const transactions = computed(() =>
	dates.value.map((date) => ({
		x: date?.toLocaleDateString('ru-RU'),
		y: props.transactions.reduce(
			(sum, cur) => sum + (cur.creationDate === date ? cur.sum : 0),
			0
		),
	}))
);

const chartOptions = computed<ApexOptions>(() => ({
	chart: {
		id: 'transactionByCategory',
		toolbar: {
			show: false,
		},
	},
	xaxis: {
		type: 'datetime',
		labels: {
			style: {
				colors: props.textColor,
			},
		},
	},
	title: {
		text: props.seriesName,
		style: {
			color: props.textColor,
		},
	},
	tooltip: {
		enabled: false,
	},
	yaxis: {
		labels: {
			style: {
				colors: props.textColor,
			},
		},
	},
}));

const chartSeries = computed(() => [
	{
		color: props.barColor,
		data: transactions.value,
	},
]);
</script>

<template>
	<apexchart
		type="bar"
		height="350"
		:options="chartOptions"
		:series="chartSeries"
	></apexchart>
</template>
