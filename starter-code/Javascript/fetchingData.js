"use strict"

// fetch initialisation //

export const fetchDatasDestinations = async () => {
    const responseJSON = await fetch("./data.json")
    return responseJSON.json()
}