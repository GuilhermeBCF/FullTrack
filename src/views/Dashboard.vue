<template>
	<main id="dashboard-page">
		<header>
                <h5>Olá <b>Usuário</b>, Bem vindo de volta!</h5>
            </header>

            <div class="separator">
                <div class="info1">
                    <h3>Dashboard</h3>
                </div>
                <div class="search">
                    <input type="text" placeholder="Pesquisar...">
                    <i class='bx bx-search'></i>
                </div>
            </div>

            <div class="analytics">
                <div class="item">
                    <div class="progress">
                        <div class="info">
							<h1 class="text-edit">Localização</h1>
							<img src="" alt="">
                        </div>
                        <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                            aria-valuemax="100"></div>
                    </div>
                    <i class='bx bx-map-pin'></i>
                </div>
                <div class="item">
                    <div class="progress">
                        <div class="info">
							<h1 class="text-edite">Acesso</h1>
                        </div>
                        <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                            aria-valuemax="100"></div>
                    </div>
                    <i class='bx bx-user-voice'></i>
                </div>
                <div class="item">
                    <div class="progress">
                        <div class="info">
							<h1 class="text-editi">Notificações</h1>
                        </div>
                        <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                            aria-valuemax="100"></div>
                    </div>
                    <i class='bx bx-bell'></i>
                </div>
                <div class="item">
                    <div class="progress">
                        <div class="info">
							<h1 class="text-edita">Reuniões</h1>
                        </div>
                        <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                            aria-valuemax="100"></div>
                    </div>
                    <i class='bx bx-support'></i>
                </div>
            </div>

            <div class="separator">
                <div class="info">
                    <h3>Rascunhos</h3>
                </div>
                <input class="data" type="date" value="2023-10-15">
            </div>

            <div class="planning">
                <div class="item">
                    <div class="left">
                        <div class="icon">
                            <i class='bx bx-book-alt'></i>
                        </div>
                        <div class="details">
                            <h5>Reunião - Supervisores</h5>
                            <p>8:00 - 10:00</p>
                        </div>
                    </div>
                    <i class='bx bx-dots-vertical-rounded'></i>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="icon">
                            <i class='bx bx-edit-alt'></i>
                        </div>
                        <div class="details">
                            <h5>Revisão</h5>
                            <p>13:00 - 14:00</p>
                        </div>
                    </div>
                    <i class='bx bx-dots-vertical-rounded'></i>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="icon">
                            <i class='bx bx-headphone'></i>
                        </div>
                        <div class="details">
                            <h5>Call</h5>
                            <p>15:00 - 16:00</p>
                        </div>
                    </div>
                    <i class='bx bx-dots-vertical-rounded'></i>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="icon">
                            <i class='bx bx-volume-low'></i>
                        </div>
                        <div class="details">
                            <h5>Relatório</h5>
                            <p>19:00 - 20:00</p>
                        </div>
                    </div>
                    <i class='bx bx-dots-vertical-rounded'></i>
                </div>
            </div>
	</main>
</template>
<style>
main header{
    display: flex;
    align-items: center;
    gap: 15px;
}

main header h5{
    margin-top: 3rem;
    font-size: 18px;
    color: #f8221b;
    font-weight: 400;
}

main .separator{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
}

main .separator .info{
    margin-top: 3rem;
    display: flex;
    align-items: center;
    gap: 30px;
}

main .separator .info h3{
    font-size: 30px;
}

main .separator .info a{
    margin-top: 6px;
    font-size: 14px;
}

main .separator .search{
    display: flex;
    align-items: center;
    gap: 14px;
}

main .separator .search i{
    font-size: 20px;
    color: #555555;
}

main .separator .search input{
    border: none;
	border-radius: 4px;
    font-size: 14px;
    width: 80px;
    outline: none;
}

main .separator .search input::placeholder{
    color: #BDBDBD;
}

main .analytics{
    display: grid;
	grid-template-columns: 0.5fr 0.5fr;
    gap: 20px;
    margin-top: 20px;
}

main .analytics .item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 140px;
    min-width: 214px;
    padding: 20px;
    border-radius: 20px;
}


main .analytics .item i{
    font-size: 80px;
    color: #525252;
}

main .analytics .item:nth-child(1){
    background: #d30000;
}

main .analytics .item:nth-child(2){
    background: #0f0f0f;
}

main .analytics .item:nth-child(3){
    background: #363636;
}

main .analytics .item:nth-child(4){
    background: #f31818;
}

main .separator input{
    border: none;
    color: #f80000;
    font-weight: bold;
    outline: none;
    width: 106px;
}

input[type="date"]::-webkit-calendar-picker-indicator{
    opacity: 0.5;
    font-size: 16px;
    cursor: pointer;
}

main .planning{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 20px;
}

main .planning .item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #F7F7F7;
    border-radius: 20px;
}

main .planning .item .left{
    display: flex;
    align-items: center;
    gap: 10px;
}

main .planning .item .left .icon{
    width: 50px;
    height: 50px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}

main .planning .item:nth-child(1) .left .icon{
    background: #ff5353;
}

main .planning .item:nth-child(1) .left .icon i{
    color: #ff0000;
}

main .planning .item:nth-child(2) .left .icon{
    background: #494949;
}

main .planning .item:nth-child(2) .left .icon i{
    color: #000000;
}

main .planning .item:nth-child(3) .left .icon{
    background: #b1b1b1;
}

main .planning .item:nth-child(3) .left .icon i{
    color: #222222;
}

main .planning .item:nth-child(4) .left .icon{
    background: #fd3939;
}

main .planning .item:nth-child(4) .left .icon i{
    color: #e60808;
}

main .planning .item .left .details h5{
    font-size: 12px;
    font-weight: 600;
}

main .planning .item .left .details p{
    font-size: 12px;
    color: #BDBDBD;
}

main .planning .item > i{
    cursor: pointer;
}


.text-edit {
    color: #ffffff; 
    font-size: 15px;  
    text-align: center;
	background-color: transparent;
	background-color: #d30000;
    border: none;
    margin: 0;
    padding: 0;
}

.text-edite {
    color: #ffffff; 
    font-size: 15px;  
    text-align: center;
	background-color: transparent;
	background-color: #0f0f0f;
    border: none;
    margin: 0;
    padding: 0;
}

.text-editi {
    color: #ffffff; 
    font-size: 15px;  
    text-align: center;
	background-color: transparent;
	background-color: #363636;
    border: none;
    margin: 0;
    padding: 0;
}

.text-edita {
    color: #ffffff; 
    font-size: 15px;  
    text-align: center;
	background-color: transparent;
	background-color: #f31818;
    border: none;
    margin: 0;
    padding: 0;
}



</style>