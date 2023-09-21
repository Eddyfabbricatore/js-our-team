const team = [
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',	
    foto: 'wayne-barnett-founder-ceo.jpg'
  },

  {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',	
    foto: 'angela-caroll-chief-editor.jpg'
  },

  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',	
    foto: 'walter-gordon-office-manager.jpg'
  },

  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',	
    foto: 'angela-lopez-social-media-manager.jpg'
  },

  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',	
    foto: 'scott-estrada-developer.jpg'
  },

  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',	
    foto: 'barbara-ramos-graphic-designer.jpg'
  }
];

const ul = document.querySelector('ul');

for(let membro of team){

  let nome = '';
  
  for(let membroNome of membro.nome){
      nome += `<li>${membroNome}: ${membro.nome[membroNome]}</li>`;
      console.log(membro.nome);
  }

  let ruolo = '';
  
  for(let membroRuolo of membro.ruolo){
    ruolo += `<li>${membroRuolo}: ${membro.ruolo[membroRuolo]}</li>`;
    console.log(membro.ruolo);
  }

  let foto = '';
  
  for(let membroFoto of membro.foto){
    foto += `<li>${membroFoto}: ${membro.foto[membroFoto]}</li>`;
    console.log(membro.foto);
  }

  ul.innerHTML += `<li>
    Nome: ${membro.nome} <br>
    Ruolo: ${membro.ruolo} <br>
    Foto: <img src="img/${membro.foto}" alt="Ciao"> <br>
  </li>`;

  console.log('-----------');
}