'use strict';

import { fetchDatas } from './fetchingData.js'

const initDatasTechnology = async () => {
    const response = await fetchDatas()
    const technology = response.technology

    console.log(technology)

    const btnOneTechnology = document.getElementById('launch')
    const btnTwoTechnology = document.getElementById('spaceport')
    const btnThreeTechnology = document.getElementById('capsule')
    const mainInfosTechnology = document.querySelector('.container-info-page')
    console.log(mainInfosTechnology)

    const technologyContent = `
    <section>
        <h6 class="title-h6">THE TERMINOLOGY...</h6>
        <h1 class="title-lauch-vehicle">LAUNCH VEHICLE</h1>
        <P class="text-infos">
        ${technology[0]['description']}
        </P>
    </section>

    <figure class="figure-technology">
        <img class="img-technology" src="${technology[0]['images']['portrait']}" alt="space ship illustration">
    </figure>
    `
    mainInfosTechnology.innerHTML = technologyContent

    btnOneTechnology.addEventListener('click', () =>{
        const technologyContent = `
        <section>
            <h6 class="title-h6">THE TERMINOLOGY...</h6>
            <h1 class="title-lauch-vehicle">${technology[0]['name']}</h1>
            <P class="text-infos">
            ${technology[0]['description']}
            </P>
        </section>

        <figure class="figure-technology">
            <img class="img-technology" src="${technology[0]['images']['portrait']}" alt="space ship illustration">
        </figure>
        `
        mainInfosTechnology.innerHTML = technologyContent
    })


    // secont Btn technology
    btnTwoTechnology.addEventListener('click', () =>{
        const technologyContent = `
        <section>
            <h6 class="title-h6">THE TERMINOLOGY...</h6>
            <h1 class="title-lauch-vehicle">${technology[1]['name']}</h1>
            <P class="text-infos">
            ${technology[1]['description']}
            </P>
        </section>

        <figure class="figure-technology">
            <img class="img-technology" src="${technology[1]['images']['portrait']}" alt="space ship illustration">
        </figure>
        `
        mainInfosTechnology.innerHTML = technologyContent
    })

    btnThreeTechnology.addEventListener('click', () =>{
        const technologyContent = `
        <section>
            <h6 class="title-h6">THE TERMINOLOGY...</h6>
            <h1 class="title-lauch-vehicle">${technology[2]['name']}</h1>
            <P class="text-infos">
            ${technology[2]['description']}
            </P>
        </section>

        <figure class="figure-technology">
            <img class="img-technology" src="${technology[2]['images']['portrait']}" alt="space ship illustration">
        </figure>
        `
        mainInfosTechnology.innerHTML = technologyContent
    })
    

  

    
    // for (let i = 0; i < tabSwitchTechnology.length; i++) {
    //     tabSwitchTechnology[i].addEventListener('click', () =>{
    //         console.log('cliqué')
    //     })
    // }


    // btnOneTechnology.addEventListener('click', () =>{
    //     console.log('cliqué')
    //     console.log(technology)
    // })




}
initDatasTechnology()


