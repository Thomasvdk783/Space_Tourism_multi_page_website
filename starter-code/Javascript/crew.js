'use strict';

import { fetchDatas } from './fetchingData.js'

const initDatasCrew = async () => {
    const response = await fetchDatas()
    const crew = response.crew

    console.log(crew)

    const sectionInfoMember = document.getElementById('section-info-member')
    const figureMember = document.getElementById('section-figure-member')

    let infosMember = `
        <h2 class="title-job-crew">${crew[0]['role']}</h2>
        <h1 class="title-name-member-crew">${crew[0]['name']}</h1>
        <p class="text-intro-member-crew">
        ${crew[0]['bio']}
        </p>
      `
    sectionInfoMember.innerHTML = infosMember

    let imgProfilMember = `
          <figure class="figure-crew-img">
            <img class="img-crew" src="${crew[0]['images']['png']}" alt="Crew member ${crew[0]['images']['png']}">
          </figure>
      `
    figureMember.innerHTML = imgProfilMember
    
    // Declaration btn switch crew members
    const btnCrewOne = document.getElementById('btn-crew-1')
    const btnCrewTwo = document.getElementById('btn-crew-2')
    const btnCrewThree = document.getElementById('btn-crew-3')
    const btnCrewFour = document.getElementById('btn-crew-4')

    //Member One 
    btnCrewOne.addEventListener('click', () =>{
      btnCrewOne.classList.add('active-btn-crew')
      btnCrewTwo.classList.remove('active-btn-crew')
      btnCrewThree.classList.remove('active-btn-crew')
      btnCrewFour.classList.remove('active-btn-crew')

      let infosMember = `
        <h2 class="title-job-crew">${crew[0]['role']}</h2>
        <h1 class="title-name-member-crew">${crew[0]['name']}</h1>
        <p class="text-intro-member-crew">
        ${crew[0]['bio']}
        </p>
      `
      sectionInfoMember.innerHTML = infosMember

      let imgProfilMember = `
          <figure class="figure-crew-img">
            <img class="img-crew" src="${crew[0]['images']['png']}" alt="Crew member ${crew[0]['images']['png']}">
          </figure>
        `
      figureMember.innerHTML = imgProfilMember
    })

    //Member Two 
    btnCrewTwo.addEventListener('click', () =>{
      btnCrewOne.classList.remove('active-btn-crew')
      btnCrewTwo.classList.add('active-btn-crew')
      btnCrewThree.classList.remove('active-btn-crew')
      btnCrewFour.classList.remove('active-btn-crew')

      let infosMember = `
        <h2 class="title-job-crew">${crew[1]['role']}</h2>
        <h1 class="title-name-member-crew">${crew[1]['name']}</h1>
        <p class="text-intro-member-crew">
        ${crew[1]['bio']}
        </p>
      `
      sectionInfoMember.innerHTML = infosMember

      let imgProfilMember = `
          <figure class="figure-crew-img">
            <img class="img-crew" src="${crew[1]['images']['png']}" alt="Crew member ${crew[1]['images']['png']}">
          </figure>
        `
      figureMember.innerHTML = imgProfilMember
    })

    //Member Three 
    btnCrewThree.addEventListener('click', () =>{
      btnCrewOne.classList.remove('active-btn-crew')
      btnCrewTwo.classList.remove('active-btn-crew')
      btnCrewThree.classList.add('active-btn-crew')
      btnCrewFour.classList.remove('active-btn-crew')

      let infosMember = `
        <h2 class="title-job-crew">${crew[2]['role']}</h2>
        <h1 class="title-name-member-crew">${crew[2]['name']}</h1>
        <p class="text-intro-member-crew">
        ${crew[2]['bio']}
        </p>
      `
      sectionInfoMember.innerHTML = infosMember

      let imgProfilMember = `
          <figure class="figure-crew-img">
            <img class="img-crew" src="${crew[2]['images']['png']}" alt="Crew member ${crew[2]['images']['png']}">
          </figure>
        `
      figureMember.innerHTML = imgProfilMember
    })

    //Member Four 
    btnCrewFour.addEventListener('click', () =>{
      btnCrewOne.classList.remove('active-btn-crew')
      btnCrewTwo.classList.remove('active-btn-crew')
      btnCrewThree.classList.remove('active-btn-crew')
      btnCrewFour.classList.add('active-btn-crew')

      let infosMember = `
        <h2 class="title-job-crew">${crew[3]['role']}</h2>
        <h1 class="title-name-member-crew">${crew[3]['name']}</h1>
        <p class="text-intro-member-crew">
        ${crew[3]['bio']}
        </p>
      `
      sectionInfoMember.innerHTML = infosMember

      let imgProfilMember = `
          <figure class="figure-crew-img">
            <img class="img-crew" src="${crew[3]['images']['png']}" alt="Crew member ${crew[3]['images']['png']}">
          </figure>
        `
      figureMember.innerHTML = imgProfilMember
    })

}
initDatasCrew()