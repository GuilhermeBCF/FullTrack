<template>
	<div class="app">
		<!-- Sidebar -->
		<Sidebar />

		<!-- Content -->
		<router-view />
	</div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
:root {
	--primary: #f30000;
	--primary-alt: #ffffff;
	--grey: #ffffff;
	--dark: #000000;
	--dark-alt: #ffffff;
	--light: #ffffff;
	--sidebar-width: 300px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Poppins', sans-serif;
}

body {
	background-color: #e7e7e7;
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;

	main {
		flex: 1 1 0;
		padding: 2rem;

		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}
</style>