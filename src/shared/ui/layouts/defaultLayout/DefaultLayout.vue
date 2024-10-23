<template>
	<div>
		<div>
			<slot name="header" />
			<slot name="navigation" />

			<main app>
				<slot />
			</main>
		</div>
	</div>
</template>
