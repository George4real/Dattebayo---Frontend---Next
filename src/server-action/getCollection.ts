"use server"

import { cache } from "react"

export const getCollections = cache(async (collection: string) => {

    //Get
    const url = `${process.env.DATTEBAYO_URL}/${collection}`
    const req = await fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        next: {
            tags: [`${collection}`]
        }
    })
    const json = await req.json()
    if (!req.ok) {
        throw new Error('Error al solicitar los datos')
    }

    switch (collection) {
        case 'characters':
            const { characters } = json
            return characters
        default:
            break;
    }

})