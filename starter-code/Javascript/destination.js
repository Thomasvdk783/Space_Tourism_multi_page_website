'use strict';



const initDatasDestinations = async () => {
    const response = await fetchDatas()
    const destinations = response.destinations

    const destinationInfos = document.getElementById('section-info-destination')
    console.log(destinationInfos)
    const imgDestination = document.getElementById('img-destination')
    console.log(imgDestination)
    const liNavDestinations = document.querySelectorAll('.li-nav-destinations')

    liNavDestinations.forEach((item) => {
        item.addEventListener('click', console.log("ok good !!"))
    })

    destinations.forEach((item) => {
        const nameDestination = item.name



        
        //<h1 class="title-destinations">MOON</h1>
        //   <p class="text-description-destination">
        //     See our planet as you’ve never seen it before. A perfect relaxing
        //     trip away to help regain perspective and come back refreshed. While
        //     you’re there, take in some history by visiting the Luna 2 and Apollo
        //     11 landing sites.
        //   </p>
        //   <div class="trait-destinations">
        //     <!-- trait -->
        //   </div>
        //   <section class="container-bottom-infos-destinations">
        //     <div class="container-info-destinations">
        //       <h5 class="title-info-destination">AVG. DISTANCE</h5>
        //       <h2 class="data-destination">384,400 KM</h2>
        //     </div>
        //     <div class="container-info-destinations">
        //       <h5 class="title-info-destination">EST. TRAVEL TIME</h5>
        //       <h2 class="data-destination">3 DAYS</h2>
        //     </div>















        // <section class="section-left-destinations">
        //   <figure class="figure-img-destination">
        //     <img
        //       class="img-destination"
        //       src="./assets/destination/image-moon.webp"
        //       alt="the moon destination"
        //     />
        //   </figure>
        // </section>

        // <section class="section-right-destinations">
        //   <ul class="ul-nav-destinations">
        //     <li class="li-nav-destinations">MOON</li>
        //     <li class="li-nav-destinations">MARS</li>
        //     <li class="li-nav-destinations">EUROPA</li>
        //     <li class="li-nav-destinations">TITAN</li>
        //   </ul>
        //   <h1 class="title-destinations">MOON</h1>
        //   <p class="text-description-destination">
        //     See our planet as you’ve never seen it before. A perfect relaxing
        //     trip away to help regain perspective and come back refreshed. While
        //     you’re there, take in some history by visiting the Luna 2 and Apollo
        //     11 landing sites.
        //   </p>
        //   <div class="trait-destinations">
        //     <!-- trait -->
        //   </div>
        //   <section class="container-bottom-infos-destinations">
        //     <div class="container-info-destinations">
        //       <h5 class="title-info-destination">AVG. DISTANCE</h5>
        //       <h2 class="data-destination">384,400 KM</h2>
        //     </div>
        //     <div class="container-info-destinations">
        //       <h5 class="title-info-destination">EST. TRAVEL TIME</h5>
        //       <h2 class="data-destination">3 DAYS</h2>
        //     </div>
        //   </section>
        // </section>
    })



}
initDatasDestinations()




