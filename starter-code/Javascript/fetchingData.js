"use strict"

// fetch initialisation //

export const fetchDatas = async () => {
    const responseJSON = await fetch("./data.json")
    return responseJSON.json()
}