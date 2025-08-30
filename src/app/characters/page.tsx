import CharacterList from "@/components/character/CharacterList";
import {getCollections} from "@/server-action/getCollections-action";
import { charactersAPIResponseSchema } from "@/schemas/character"

export default async function page() {

  const charactersAPIResponse = await getCollections('characters')
  const characters = charactersAPIResponseSchema.parse(charactersAPIResponse)
  return (
    <>
      <CharacterList characters={characters}/>
    </>
  )
}
