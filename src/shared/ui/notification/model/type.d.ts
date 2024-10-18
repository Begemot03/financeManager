export type NotificationType = "success" | "info" | "warning" | "error";

export type Notification = {
	title: string;
	subtitle: string;
	type: NotificationType;
	duration?: number;
};
