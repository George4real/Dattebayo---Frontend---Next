import CharacterList from "@/components/character/CharacterList";
import { getCollections } from "@/server-action/getCollections-action";
import { charactersAPIResponseSchema } from "@/schemas/CharacterSchema"
import PaginationComponent from "@/components/PaginationComponent";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>
}) {

  const page = (await searchParams).page
  const charactersAPIResponse = await getCollections('characters', page)
  const characters = charactersAPIResponseSchema.parse(charactersAPIResponse)
  return (
    <>
      <CharacterList characters={characters} />
      <PaginationComponent page={page}/>
    </>
  )
}
