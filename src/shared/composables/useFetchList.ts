import { computed, onMounted, ref, type Ref } from "vue";

//TODO: МБ буду юзать для вынесения логики в списках
export function useFetchList<T>(fetchFunction: () => Promise<T[]>) {
	const items = ref<T[]>([]) as Ref<T[]>;
	const loading = ref(false);
	const isEmpty = computed(() => items.value.length == 0);

	async function fetchItems() {
		try {
			loading.value = true;
			items.value = await fetchFunction();
		} catch (e) {
			console.error(`Error fetching items: ${e}`);
		} finally {
			loading.value = false;
		}
	}

	onMounted(() => {
		fetchItems();
	});

	return {
		items,
		loading,
		isEmpty,
		fetchItems,
	};
}
