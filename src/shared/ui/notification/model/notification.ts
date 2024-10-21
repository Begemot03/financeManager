import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';
import type { Notification } from './type';

export const useNotificationStore = defineStore('notification', () => {
	const isOpen = ref(false);

	const notification = reactive<Notification>({
		title: 'Ok',
		subtitle: 'Okey',
		type: 'success',
	});

	let timeoutId: ReturnType<typeof setTimeout>;

	function notify({
		title = 'Ok',
		subtitle = 'All Good!',
		type = 'success',
		duration = 1500,
	}: Notification): void {
		if (isOpen.value) {
			clearTimeout(timeoutId);
		}

		notification.title = title;
		notification.subtitle = subtitle;
		notification.type = type;
		notification.duration = duration;

		isOpen.value = true;
		timeoutId = setTimeout(close, notification.duration);
	}

	function close(): void {
		if (!isOpen.value) return;

		isOpen.value = false;
	}

	return {
		notify,
		isOpen,
		notification,
	};
});
