"use server"

import { cache } from "react"

export const getCollectionById = cache(async (collection: string, id: string) => {

    //Get
    const url = `${process.env.DATTEBAYO_URL}/${collection}/${id}`
    const req = await fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const json = await req.json()
    if (!req.ok) {
        throw new Error('Error al solicitar los datos')
    }
    return json

})