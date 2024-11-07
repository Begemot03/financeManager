<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { OperationType } from '@/entities/operation';
import type { ApexOptions } from 'apexcharts';

const props = defineProps<{
	transactions: OperationType[];
	textColor: string;
	barColor: string;
	seriesName: string;
}>();

const categories = computed(() => [
	...new Set(props.transactions.map((op) => op.category)),
]);

const transactions = computed(() =>
	categories.value.map((category) =>
		props.transactions.reduce(
			(sum, cur) => sum + (cur.category === category ? cur.sum : 0),
			0
		)
	)
);

const chartOptions = computed(() => ({
	chart: {
		id: 'transactionByCategory',
		toolbar: {
			show: false,
		},
	},
	xaxis: {
		categories: categories.value,
		labels: {
			style: {
				colors: props.textColor,
			},
		},
	},
	title: {
		text: 'Операции по категориям',
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
		name: props.seriesName,
		color: props.barColor,
		data: transactions.value,
	},
]);
</script>

<template>
	<apexchart
		type="bar"
		height="500"
		:options="chartOptions"
		:series="chartSeries"
	></apexchart>
</template>
