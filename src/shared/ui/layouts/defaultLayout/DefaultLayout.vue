<template>
    <v-app>
        <v-container class="rounded rounded-md">
            <slot name="header"></slot>
            <slot name="navigation"></slot>

            <v-main app>
                <slot></slot>
            </v-main>

            <slot name="footer"></slot>
        </v-container>
    </v-app>
</template>
