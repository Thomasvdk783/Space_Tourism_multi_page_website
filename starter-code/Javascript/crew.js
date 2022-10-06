'use strict';

import { fetchDatas } from './fetchingData.js'

const initDatasCrew = async () => {
    const response = await fetchDatas()
    const crew = response.crew

    console.log(crew)

    const containerCrew = document.getElementById('container-crew')
    
    const infosCrewMember = `
    <section  class="container-crew">
    <h5 class="title-top-crew">
    <span class="number-title-top">02</span>  MEET YOUR CREW
    </h5>
    <section class="section-left-crew">
      <h2 class="title-job-crew">${crew[0]['role']}</h2>
      <h1 class="title-name-member-crew">${crew[0]['name']}</h1>
      <p class="text-intro-member-crew">
      ${crew[0]['bio']}
      </p>
    </section>
    <div class="container-btn-slide-crew">
      <button id="btn-crew-1" class="btn-slide-crew"></button>
      <button id="btn-crew-2" class="btn-slide-crew"></button>
      <button id="btn-crew-3" class="btn-slide-crew"></button>
      <button id="btn-crew-4" class="btn-slide-crew"></button>
    </div>
  </section>
    
  <section class="section-right-crew">
    <figure class="figure-crew-img">
      <img class="img-crew" src="${crew[0]['images']['png']}" alt="Crew member Douglas Hurley">
    </figure>
    </section>
    `
    containerCrew.innerHTML = infosCrewMember

}
initDatasCrew()