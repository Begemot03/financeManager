<template>
	<v-app>
		<v-container class="rounded rounded-md">
			<slot name="header" />
			<slot name="navigation" />

			<v-main app>
				<slot />
			</v-main>
		</v-container>
	</v-app>
</template>
