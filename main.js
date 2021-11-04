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
const TeamCard = [
	{
		img:"img/wayne-barnett-founder-ceo.jpg",
		name:'Wayne Barnett',
		role:'Founder & CEO',
	},
	{
		img:"img/angela-caroll-chief-editor.jpg",
		name:'Angela Caroll',
		role:'Chief Editor',
	},
	{
		img:"img/angela-lopez-social-media-manager.jpg",
		name:'angela-lopez',
		role:'media-manager',
	},

]
console.log(TeamCard)
