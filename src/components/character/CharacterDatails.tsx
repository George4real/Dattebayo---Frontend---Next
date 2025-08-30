"use client"

import { Character } from "@/schemas/character"
import CharacterImageCarousel from "./CharacterImageCarousel"
import { JutsusBadge } from "./JutsusBadge"

export default function CharacterDatails({ character }: { character: Character }) {

    return (
        <div className="grid grid-cols-2 m-4 gap-6">
            <CharacterImageCarousel character={character} />
            <div>
                <p><span className="font-bold">Name:</span> {character.name}</p>
                <p><span className="font-bold">Birthday:</span> {character.personal.birthdate}</p>
                {character.personal.clan && <p><span className="font-bold">Clan:</span> {character.personal.clan}</p>}
                <p><span className="font-bold">Sex:</span> {character.personal.sex}</p>
                <p><span className="font-bold">First Apparition:</span> {character.debut.anime}</p>
                <div >

                <p><span className="font-bold">Jutsus:</span></p>
                    <JutsusBadge jutsus={character.jutsu}/>
                </div>
            </div>
        </div>
    )
}
