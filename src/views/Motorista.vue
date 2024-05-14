<template>
	<main id="Motorista-page">
		<h1>Motorista</h1>
		<div class="new-users">
			<h2 class="subtitulo">Gerenciar</h2>
			<div class="user-list">
				<div class="user">
					<img src="https://static.vecteezy.com/ti/fotos-gratis/t2/7074324-sorriso-confianca-jovem-profissional-motorista-em-negocio-longo-transporte-foto.jpg" alt="Foto de Joaquim">
					<h2>Joaquim</h2>
					<h5>Scania</h5>
                    <p>"Aqui, a estrada é meu lar."</p>
				</div>
				<div class="user">
					<img src="https://conteudo.imguol.com.br/c/noticias/0b/2022/06/23/o-motorista-amauri-oliveira-acredita-que-o-auxilio-de-r-400-sera-pouco-pelos-gastos-que-tem-1655995514896_v2_3x4.jpg" alt="Foto de Carlos">
					<h2>Carlos</h2>
					<h5>Volvo</h5>
                    <p>"A estrada é longa, mas a vontade é maior."</p>
				</div>
				<div class="user">
					<img src="https://blogdocaminhoneiro.com/wp-content/uploads/2021/06/rodrigo-carvalho-estados-unidos-1.jpg" alt="Foto de Eduardo">
					<h2>Eduardo</h2>
					<h5>Volkswagen</h5>
                    <p>"Carga pesada, alma leve."</p>
				</div>
                <div class="user">
					<img src="https://fotos-estradao-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2021/08/16193908/Mulheres-Na-Direcao-4.jpg" alt="Foto de Eduardo">
					<h2>Daniela</h2>
					<h5>DAF</h5>
                    <p>"Rodando o Brasil, vivendo mil histórias."</p>
				</div>
                
				<div class="user">
					<div class="icone">
			            <img :src="iconeURL" alt="Vue"/> 
		            </div> 
					<h2>Adicionar</h2>
					<h5>Novo Motorista</h5>
				</div>
			</div>
		</div>

		<div class="recent-orders">
			<h2 class="subtitulo">Rotas Recentes</h2>
			<div class="extra-space"></div>
			<table>
				<thead>
					<tr class="espacar">
						<th>Nome</th>
						<th>Caminhão</th>
						<th>Data</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Carlos</td>
						<td>Volvo FH16</td>
						<td>2024-05-10</td>
						<td class="dada">Concluído</td>
					</tr>
					<tr>
						<td>Joaquim</td>
						<td>Scania</td>
						<td>2024-10-05</td>
						<td class="dada">Concluído</td>
					</tr>
					<tr>
						<td>Eduardo</td>
						<td>Volkswagen</td>
						<td>2024-06-11</td>
						<td class="dada">Concluído</td>
					</tr>
                    <tr>
						<td>Daniela</td>
						<td>DAF</td>
						<td>2024-06-14</td>
						<td class="pend">Pendente</td>
					</tr>
				</tbody>
			</table>
		</div>
	</main>
</template>

<script setup>
import iconeURL from '../assets/iconeadd.png'
</script>

<style>
:root {
    --color-primary: #6C9BCF;
    --color-danger: #8e0101;
    --color-success: #1B9C85;
    --color-warning: #F7D060;
    --color-white: #fff;
    --color-info-dark: #7d8da1;
    --color-dark: black;
    --color-light: rgba(132, 139, 200, 0.18);
    --color-dark-variant: #677483;
    --color-background: #f6f6f9;

    --card-border-radius: 2rem;
    --border-radius-1: 0.4rem;
    --border-radius-2: 1.2rem;

    --card-padding: 1.8rem;
    --padding-1: 1.2rem;

    --box-shadow: 0 1.8rem 3rem var(--color-light);
}

main .new-users {
    margin-top: 3rem;
}

main .new-users p {
    margin-top: 2rem;
}


main .new-users .user-list {
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);
    margin-top: 1rem;
    box-shadow: var(--box-shadow);
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 1.4rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

main .new-users .user-list:hover {
    box-shadow: none;
}

main .new-users .user-list .user {
    color: white;
    background-color: var(--color-danger);
    padding: 1rem;
    border-radius: var(--border-radius-2);
    border: 5px solid black;
    box-shadow: var(--box-shadow);
    transition: all 0.3s ease;
    text-align: center;
    width: 15rem;
    height: 20rem;
}

main .new-users .user-list .user:hover {
    box-shadow: none;
}

main .new-users .user-list .user img {
    width: 5rem;
    height: 5rem;
    margin-top: 1rem;
    margin-bottom: 0.4rem;
    border-radius: 50%;
}

main .recent-orders {
    margin-top: 2rem;
}

main .recent-orders h2 {
    margin-bottom: 0.8rem;
}

main .recent-orders table {
    background-color: var(--color-white);
    width: 100%;
    padding: var(--card-padding);
    text-align: center;
    box-shadow: var(--box-shadow);
    border-radius: var(--card-border-radius);
    transition: all 0.3s ease;
}

main .recent-orders table:hover {
    box-shadow: none;
}

main table tbody td {
    height: 4rem;
    border-bottom: 1px solid var(--color-light);
    color: var(--color-dark-variant);
}

main table tbody tr:last-child td {
    border: none;
}

main .recent-orders a {
    text-align: center;
    display: block;
    margin: 1rem auto;
    color: var(--color-primary);
}


.icone {
    margin-top: 3rem;
}

.dada {
    color: chartreuse;
}

.pend {
    color: red;
}



.subtitulo {
    margin-bottom: 10px;
    font-size: 1.2em;
}

.extra-space {
    height: 20px;
}
</style>
