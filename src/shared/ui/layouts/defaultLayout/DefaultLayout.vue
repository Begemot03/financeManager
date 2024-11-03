<template>
	<div class="layout__container flex gap-4 p-6 pb-0">
		<div class="layout__sidebar w-80">
			<slot name="sidebar" />
		</div>
		<div class="layout__wrapper w-full">
			<div class="layout__topbar pb-4">
				<slot name="topbar" />
			</div>
			<main class="layout_content">
				<slot />
			</main>
		</div>
	</div>
</template>
