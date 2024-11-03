<script setup lang="ts">
import { CategoryList } from '@/entities/category';
import type { CategoryType } from '@/entities/category/model/categoryModel';
import { ref, watch } from 'vue';

const items = ref<CategoryType[]>([]);

watch(items, (v) => {
	console.log(v);
});
</script>

<template>
	<CategoryList v-model:selected="items"></CategoryList>
</template>
