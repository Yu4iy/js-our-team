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

// 2.Individuare container nel quale inserire card generati
const container = document.querySelector('.team-container')
container.innerHTML=''

// 3.  generare markup
genMarkup(0, teamCard, container)




// 5.Individuare button  

const addBtn = document.querySelector('#addMemberButton')


// 6. Creare un evento
addBtn.addEventListener('click', function() {
	// 4.Individuare input 
	const namein = document.querySelector('#name')	
	const rolein = document.querySelector('#role')
	const imgin =document.querySelector('#image')
	
	const newMember = {
		img:imgin.value,
		name:namein.value,
		role:rolein.value,
}

teamCard.push(newMember)

genMarkup(teamCard.length - 1, teamCard, container)


})


// FUUNCTIONS

function genMarkup( base, teamCardF, cont){
	for(let i = base ; i < teamCardF.length; i++){
		const card = teamCardF[i]
		cont.innerHTML += 
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