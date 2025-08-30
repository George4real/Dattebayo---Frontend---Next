import CharacterDatails from "@/components/character/CharacterDatails"
import { characterAPIResponseSchema } from "@/schemas/character"
import { getCollectionById } from "@/server-action/getCollectionById"

export default async function page(props: PageProps<'/characters/[id]'>) {

    const {id} = await props.params
    const characterAPIResponse = await getCollectionById('characters', id)
    const character = characterAPIResponseSchema.parse(characterAPIResponse)
    return (
        <>
            <CharacterDatails character={character}/>
        </>
    )
}
