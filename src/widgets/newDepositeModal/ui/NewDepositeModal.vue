<script setup lang="ts">
import { BaseModal } from '@/shared/ui/baseModal';
import { newDepositeModalModel } from '../model';
import { AddDeposite, addDepositeModel } from '@/features/addDeposite';

const addDepositeStore = addDepositeModel();
const newDepositeModalStore = newDepositeModalModel();

const requiredInputRule: Array<(v: any) => boolean | string> = [
    v => (!!v && v.length > 0) || "Обязательное поле",
];

const startBalanceValidateRule: Array<(v: any) => boolean | string> = [
    ...requiredInputRule,
    v => (v >= 0) || "Начальный баланс не может быть отрицательным числом",
];

</script>

<template>
    <BaseModal
        v-model:visible="newDepositeModalStore.visible"
        title="Новый счет"
        :persistent="true"
    >
        <template #activator>
            <v-btn
                @click="newDepositeModalStore.open"
                text="Создание счета"
            ></v-btn>
        </template>
        <v-form
            ref="form"
            @submit.prevent
        >
            <v-card
                title="Новый счет"
                rounded
            >
                <v-card-text>
                    <v-row dense>
                        <v-col
                            cols="12"
                        >
                            <v-text-field
                                label="Название счета"
                                v-model="newDepositeModalStore.newDeposite.name"
                                variant="outlined"
                                :rules="requiredInputRule"
                                ></v-text-field>
                        </v-col>
                        <v-col
                            cols="8"
                        >
                            <v-text-field
                                label="Начальный баланс"
                                v-model="newDepositeModalStore.newDeposite.startBalance"
                                variant="outlined"
                                :rules="startBalanceValidateRule"
                                ></v-text-field>
                        </v-col>
                        <v-col
                            cols="4"
                        >
                            <v-select
                                label="Валюта"
                                variant="outlined"
                                :items="['RUB', 'USD']"
                                v-model="newDepositeModalStore.newDeposite.currency"
                                :rules="requiredInputRule"
                                ></v-select>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            <v-textarea
                                label="Комментарий"
                                variant="outlined"
                                v-model="newDepositeModalStore.newDeposite.comment"
                            ></v-textarea>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <AddDeposite
                        variant="tonal"
                        color="blue"
                        type="submit"
                        @click="addDepositeStore.addDeposite(newDepositeModalStore.newDeposite)"
                    >Добавить</AddDeposite>
                    <v-btn
                        text="Отмена"
                        variant="tonal"
                        @click="newDepositeModalStore.close"
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </BaseModal>
</template>
