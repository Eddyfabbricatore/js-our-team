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

const row = document.querySelector('.row');

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

  row.innerHTML += `
  <div class="col my-3 p-3" style="flex: auto;">
    <div class="card w-100" style="border: none;">
      <div class="card-top w-100">
        <img src="img/${membro.foto}" alt="Ciao"> <br>
      </div>

      <div class="card bottom" style="border: none;">
        <h6 class="mt-3">${membro.nome}</h6> <br>
        <h6 class="mb-3">${membro.ruolo}</h6> <br>
      </div>
    </div>
  </div>
  `;

  console.log('-----------');
}