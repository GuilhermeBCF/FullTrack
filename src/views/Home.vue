<template>
	<main id="Home-page">
		<div class="slide">
			<img :src="slideURL" alt="Vue" /> 
		</div>
		<div class="texto">
			<h4>A mais completa plataforma de rastreamento do mercado brasileiro, Fulltrack protege e monitora frotas e veículos de passeio em tempo real, com base em uma solida cadeia ecossistemica composta por módulos que apresentam funcionalidades dedicadas às demandas do setor.</h4>
		</div>
	</main>
</template>

<style>

.slide img{
	width: 100%;

}

.texto {
	max-width: 90%;
	
	
}

h4{
	padding-top: 3vh;
	padding-left: 10%;
	text-align: center;
	color: #494949;
}
</style>

<script setup>

import slideURL from '../assets/slide.png'

</script>