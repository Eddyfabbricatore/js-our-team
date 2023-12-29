const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',	
    img: 'wayne-barnett-founder-ceo.jpg'
  },

  {
    name: 'Angela Caroll',
    role: 'Chief Editor',	
    img: 'angela-caroll-chief-editor.jpg'
  },

  {
    name: 'Walter Gordon',
    role: 'Office Manager',	
    img: 'walter-gordon-office-manager.jpg'
  },

  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',	
    img: 'angela-lopez-social-media-manager.jpg'
  },

  {
    name: 'Scott Estrada',
    role: 'Developer',	
    img: 'scott-estrada-developer.jpg'
  },

  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',	
    img: 'barbara-ramos-graphic-designer.jpg'
  }
];

const row = document.querySelector('.row');

for(let member of team){
  row.innerHTML += `
  <div class="col">
    <div class="card">
      <div class="card-top">
        <img src="img/${member.img}" alt="${member.name}">
      </div>

      <div class="card-bottom d-flex flex-column justify-content-center align-items-center border-0 p-3">
        <h6>${member.name}</h6>
        <h6>${member.role}</h6>
      </div>
    </div>
  </div>
  `;
}