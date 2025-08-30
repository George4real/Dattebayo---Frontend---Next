"use client"

import { Characters } from "@/schemas/character"
import CharacterCard from "./CharacterCard"

export default function CharacterList({ characters }: { characters: Characters }) {
    return (
        <div className="grid grid-cols-5 gap-5 px-10 pt-2">
            {characters.map(character =>
                <CharacterCard key={character.id} character={character} />
            )}
        </div>
    )
}
