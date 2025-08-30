import { Character } from "@/schemas/character";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";

export default function CharacterCard({ character }: { character: Character }) {
    return (
        <>
            <Card className="pt-0 ">
                <Image 
                    src={character.images[0]} 
                    alt={character.name} width={1000} height={0} priority 
                    className="rounded-xl"></Image>
                <CardHeader>
                    <CardTitle className="text-center text-xl">{character.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                    <CardAction >
                        <Link href={`/characters/${character.id}`} className="uppercase border-2 rounded-2xl p-1 py-1" >See more</Link>
                    </CardAction>
                </CardContent>
                <CardFooter>
                </CardFooter>
            </Card>
        </>
    )
}
