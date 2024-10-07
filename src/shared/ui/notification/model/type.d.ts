export type TNotificationType = "success" | "info" | "warning" | "error";

export type TNotification = {
    title: string,
    subtitle: string,
    type: TNotificationType,
}