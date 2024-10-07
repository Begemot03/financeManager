import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import type { TNotification } from "./type";

export const useNotificationStore = defineStore("notificationStore", () => {
    const isOpen = ref(false);
    const notification = reactive<TNotification>({
        title: "Ok",
        subtitle: "Okey",
        type: "success"
    });
    
    function open({ title, subtitle, type } : TNotification) {
        if(isOpen.value)
            return;
        
        notification.title = title || "Ok";
        notification.subtitle = subtitle || "Okey";
        notification.type = type || "success";

        isOpen.value = true;
        setTimeout(close, 1000);
    }

    function close() {
        if(!isOpen.value)
            return;

        isOpen.value = false;
    }

    return {
        open,
        isOpen,
    };
});