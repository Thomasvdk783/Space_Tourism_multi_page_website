'use strict';

import { fetchDatas } from './fetchingData.js'

const initDatasTechnology = async () => {
    const response = await fetchDatas()
    const technology = response.technology

    console.log(technology)

    const btnOneTechnology = document.getElementById('btnOneTechnology')

    const tabSwitchTechnology = document.querySelectorAll('.btn-switch-numbers')

    
    for (let i = 0; i < tabSwitchTechnology.length; i++) {
        tabSwitchTechnology[i].addEventListener('click', () =>{
            console.log('cliqué')
        })
    }

    // btnOneTechnology.addEventListener('click', () =>{
    //     console.log('cliqué')
    //     console.log(technology)
    // })




}
initDatasTechnology()


