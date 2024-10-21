import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeStore = defineStore('theme', () => {
	const navShow = ref(false);

	function toogleNavShow() {
		navShow.value = !navShow.value;
	}

	return {
		navShow,
		toogleNavShow,
	};
});
