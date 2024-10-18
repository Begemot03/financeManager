import type { Notification } from '../model';
import { useNotificationStore } from '../model/notification';

const notificationModel = useNotificationStore();

const notify = (notification: Notification) =>
	notificationModel.notify(notification);

export { notify };
