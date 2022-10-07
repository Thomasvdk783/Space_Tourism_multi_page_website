'use strict';

import { fetchDatas } from './fetchingData.js'

const initDatasDestinations = async () => {
    const response = await fetchDatas()
    const destinations = response.destinations

    const containerInfoDestination = document.getElementById('section-info-destination')
    const containerFigureDestination = document.getElementById('container-figure')

    const illustrationDestination = `
            <figure id="img-destination" class="figure-img-destination">
            <img 
                class="img-destination" src="${destinations[0]['images']['webp']}"
                alt="the ${destinations[0]['name']} destination"/>
            </figure>
    `
    containerFigureDestination.innerHTML = illustrationDestination
    
    const infoDestination = `
            <section class="section-right-destinations">
            <h1 class="title-destinations">${destinations[0]['name']}</h1>
            <p class="text-description-destination">
            ${destinations[0]['description']}
            </p>
            <div class="trait-destinations">
            <!-- trait -->
            </div>
            <section class="container-bottom-infos-destinations">
            <div class="container-info-destinations">
            <h5 class="title-info-destination">AVG. DISTANCE</h5>
            <h2 class="data-destination">${destinations[0]['distance']}</h2>
            </div>
            <div class="container-info-destinations">
            <h5 class="title-info-destination">EST. TRAVEL TIME</h5>
            <h2 class="data-destination">${destinations[0]['travel']}</h2>
            </div>
            </section>
            </section>
        `
    containerInfoDestination.innerHTML = infoDestination

    const btnMoon = document.getElementById('moon')
    const btnMars = document.getElementById('mars')
    const btnEuropa = document.getElementById('europa')
    const btnTitan = document.getElementById('titan')

    btnMoon.addEventListener('click', () =>{
        btnMoon.classList.add('active-destination')
        btnMars.classList.remove('active-destination')
        btnEuropa.classList.remove('active-destination')
        btnTitan.classList.remove('active-destination')

        const illustrationDestination = `
        <figure id="img-destination" class="figure-img-destination">
        <img 
            class="img-destination" src="${destinations[0]['images']['webp']}"
            alt="the ${destinations[0]['name']} destination"/>
        </figure>
        `
        containerFigureDestination.innerHTML = illustrationDestination

        const infoDestination = `
        <section class="section-right-destinations">
        <h1 class="title-destinations">${destinations[0]['name']}</h1>
        <p class="text-description-destination">
        ${destinations[0]['description']}
        </p>
        <div class="trait-destinations">
        <!-- trait -->
        </div>
        <section class="container-bottom-infos-destinations">
        <div class="container-info-destinations">
        <h5 class="title-info-destination">AVG. DISTANCE</h5>
        <h2 class="data-destination">${destinations[0]['distance']}</h2>
        </div>
        <div class="container-info-destinations">
        <h5 class="title-info-destination">EST. TRAVEL TIME</h5>
        <h2 class="data-destination">${destinations[0]['travel']}</h2>
        </div>
        </section>
        </section>
        `
        containerInfoDestination.innerHTML = infoDestination
    })

    // Mars
    btnMars.addEventListener('click', () => {
        btnMoon.classList.remove('active-destination')
        btnMars.classList.add('active-destination')
        btnEuropa.classList.remove('active-destination')
        btnTitan.classList.remove('active-destination')

        const illustrationDestination = `
        <figure id="img-destination" class="figure-img-destination">
        <img 
            class="img-destination" src="${destinations[1]['images']['webp']}"
            alt="the ${destinations[1]['name']} destination"/>
        </figure>
        `
        containerFigureDestination.innerHTML = illustrationDestination

        const infoDestination = `
        <section class="section-right-destinations">
        <h1 class="title-destinations">${destinations[1]['name']}</h1>
        <p class="text-description-destination">
        ${destinations[1]['description']}
        </p>
        <div class="trait-destinations">
        <!-- trait -->
        </div>
        <section class="container-bottom-infos-destinations">
        <div class="container-info-destinations">
        <h5 class="title-info-destination">AVG. DISTANCE</h5>
        <h2 class="data-destination">${destinations[1]['distance']}</h2>
        </div>
        <div class="container-info-destinations">
        <h5 class="title-info-destination">EST. TRAVEL TIME</h5>
        <h2 class="data-destination">${destinations[1]['travel']}</h2>
        </div>
        </section>
        </section>
        `
        containerInfoDestination.innerHTML = infoDestination
    })

    // Europa
    btnEuropa.addEventListener('click', () => {
        btnMoon.classList.remove('active-destination')
        btnMars.classList.remove('active-destination')
        btnEuropa.classList.add('active-destination')
        btnTitan.classList.remove('active-destination')

        const illustrationDestination = `
        <figure id="img-destination" class="figure-img-destination">
        <img 
            class="img-destination" src="${destinations[2]['images']['webp']}"
            alt="the ${destinations[2]['name']} destination"/>
        </figure>
        `
        containerFigureDestination.innerHTML = illustrationDestination

        const infoDestination = `
        <section class="section-right-destinations">
        <h1 class="title-destinations">${destinations[2]['name']}</h1>
        <p class="text-description-destination">
        ${destinations[2]['description']}
        </p>
        <div class="trait-destinations">
        <!-- trait -->
        </div>
        <section class="container-bottom-infos-destinations">
        <div class="container-info-destinations">
        <h5 class="title-info-destination">AVG. DISTANCE</h5>
        <h2 class="data-destination">${destinations[2]['distance']}</h2>
        </div>
        <div class="container-info-destinations">
        <h5 class="title-info-destination">EST. TRAVEL TIME</h5>
        <h2 class="data-destination">${destinations[2]['travel']}</h2>
        </div>
        </section>
        </section>
        `
        containerInfoDestination.innerHTML = infoDestination
    })

    // Titan
    btnTitan.addEventListener('click', () => {
        btnMoon.classList.remove('active-destination')
        btnMars.classList.remove('active-destination')
        btnEuropa.classList.remove('active-destination')
        btnTitan.classList.add('active-destination')

        const illustrationDestination = `
        <figure id="img-destination" class="figure-img-destination">
        <img 
            class="img-destination" src="${destinations[3]['images']['webp']}"
            alt="the ${destinations[3]['name']} destination"/>
        </figure>
        `
        containerFigureDestination.innerHTML = illustrationDestination

        const infoDestination = `
        <section class="section-right-destinations">
        <h1 class="title-destinations">${destinations[3]['name']}</h1>
        <p class="text-description-destination">
        ${destinations[3]['description']}
        </p>
        <div class="trait-destinations">
        <!-- trait -->
        </div>
        <section class="container-bottom-infos-destinations">
        <div class="container-info-destinations">
        <h5 class="title-info-destination">AVG. DISTANCE</h5>
        <h2 class="data-destination">${destinations[3]['distance']}</h2>
        </div>
        <div class="container-info-destinations">
        <h5 class="title-info-destination">EST. TRAVEL TIME</h5>
        <h2 class="data-destination">${destinations[3]['travel']}</h2>
        </div>
        </section>
        </section>
        `
        containerInfoDestination.innerHTML = infoDestination
    })

}
initDatasDestinations()




