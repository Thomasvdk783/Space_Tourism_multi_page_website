'use strict';

import { fetchDatasDestinations } from './fetchingData.js'

const initDatas = async () => {
    const response = await fetchDatasDestinations()
    const destinations = response.destinations
    console.log(destinations)
}

initDatas()