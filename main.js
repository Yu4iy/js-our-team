// Ricreiamo le card del nostro team aggiungendo al layout di base fornito (allegato sotto) il nostro JavaScript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
// Inserire a inizio del file JavaScript una sezione di commento dove scrivere gli step richiesti di logica in italiano, per aiutarvi a ragionare prima della stesura del codice.
// Consigli del giorno:
// console.log() è nostro amico.
// Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in una funzione.
// Buon lavoro!


// 1.Creare la struttura di dati per TeamCard
const teamCard = [
	{
		img:"wayne-barnett-founder-ceo.jpg",
		name:'Wayne Barnett',
		role:'Founder & CEO',
	},
	{
		img:"angela-caroll-chief-editor.jpg",
		name:'Angela Caroll',
		role:'Chief Editor',
	},
	{
		img:'barbara-ramos-graphic-designer.jpg',
		name:'barbara-ramos',
		role:'graphic-designer',
	},
	{
		img:'scott-estrada-developer.jpg',
		name:'scott-estrada',
		role:'developer',
	},
	{
		img:'angela-lopez-social-media-manager.jpg',
		name:'angela-lopez',
		role:'social-media-manager',
	},
	{
		img:'walter-gordon-office-manager.jpg',
		name:'walter-gordon',
		role:'office-manager',
	},


]
console.log(teamCard)

// 2.Individuare container nel quale inserire card generati
const container = document.querySelector('.team-container')
container.innerHTML=''

// 3.  generare markup
genMarkup(teamCard, container)

// 4.Individuare input 
const nameIput = document.querySelector('#name').value
const roleIput = document.querySelector('#role').value
const imgIput = document.querySelector('#image').value

console.log(nameIput)
console.log(roleIput)
console.log(imgIput)

// 5.Individuare button  

const addBtn = document.querySelector('#addMemberButton')


// 6. Creare un evento
addBtn.addEventListener('click', function() {
	const newMember = {
		img:imgIput,
		name:nameIput,
		role:roleIput,
}

teamCard.push(newMember)
console.log(teamCard);
console.log(teamCard[6]);

for(let i = teamCard.length - 1; i < teamCard.length; i++){
	const card = teamCard[i]
	container.innerHTML += 
	`
	<div class="team-card">
				<div class="card-image">
				  <img
					 src="img/${card.img}"
					 alt="${card.name}"
				  />
				</div>
				<div class="card-text">
				  <h3>${card.name}</h3>
				  <p>${card.role}</p>
				</div>
			 </div>
	`

}

})













// FUUNCTIONS

function genMarkup(teamCardF, containerF){
	for(let i = 0; i < teamCardF.length; i++){
		const card = teamCardF[i]
		container.innerHTML += 
		`
		<div class="team-card">
					<div class="card-image">
					  <img
						 src="img/${card.img}"
						 alt="${card.name}"
					  />
					</div>
					<div class="card-text">
					  <h3>${card.name}</h3>
					  <p>${card.role}</p>
					</div>
				 </div>
		`
	
	}
}