import {
  projects
} from '../../projects.js'

// const newProject =
//   `
// <li class="challenges__item challenges__card">
// <figure class="challenges__figure">
//   <img src="${projects[0].projectName}/design/desktop-preview.jpg" alt="" class="challenges__image">
//   <a class="challenges__link" href="${projects[0].projectName}/" target="_blank">Visite</a>
// </figure>

// <div class="challenges__content">
//   <h2 class="challenges__title">${projects[0].projectName}</h2>
//   <div class="challenges__tags">
//     <a href="https://github.com/filiphis/portfolio/tree/main/${projects[0].projectName}" target="_blank" class="challenges__tagItem--github"><img src="assets/images/github.svg" alt="Repositorio github"></a>
//     <div>
//       <span class="challenges__tagItem challenges__tagItem--html">HTML</span>
//       <span class="challenges__tagItem challenges__tagItem--css">CSS</span>
//       <span class="challenges__tagItem challenges__tagItem--bem">BEM</span>
//     </div>
//   </div>
// </li>
// `;

const lista = document.querySelector('.challenges__list');
projects.forEach(project => {

  let tecs = '';

  if (project.Technologies && project.Technologies.length > 0) {
    project.Technologies.forEach(tec => {
      tecs += `<span class="challenges__tagItem challenges__tagItem--${tec}">${tec}</span>`
    });
  }

  const newProject =
    `
  <li class="challenges__item challenges__card">
  <figure class="challenges__figure">
    <img src="${project.projectName}/design/desktop-preview.jpg" alt="" class="challenges__image">
    <a class="challenges__link" href="${project.projectName}/" target="_blank">Visite</a>
  </figure>

  <div class="challenges__content">
    <h2 class="challenges__title">${project.projectName}</h2>
    <div class="challenges__tags">
      <a href="https://github.com/filiphis/portfolio/tree/main/${project.projectName}" target="_blank" class="challenges__tagItem--github"><img src="assets/images/github.svg" alt="Repositorio github"></a>
      <div>
        ${tecs}
      </div>
    </div>
  </li>
  `;

  lista.innerHTML += newProject;
});



// Redirecionando usuario
const url = window.location.href;

if (url.includes('filiphis.github.io/portfolio') || url.includes('portfolio-six-flax')) {
  alert('Olá, este endereço mudou! Estou te redirecionando para o novo endereço :)');
  window.location.href = 'https://portfolio-filiphis.vercel.app/';
}
