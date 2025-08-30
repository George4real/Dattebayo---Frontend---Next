"use client"

import { Characters } from "@/schemas/character"

export default function CharacterList({characters} : {characters : Characters}) {
    return (
        <div>
            {characters[5].name}
        </div>
    )
}
