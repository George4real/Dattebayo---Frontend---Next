import { Character } from "@/schemas/CharacterSchema";
import {
    Card,
    CardAction,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";

export default function CharacterCard({ character }: { character: Character }) {
    return (
        <>
            <Card className="pt-0">
                <div className="w-full h-64 relative">
                    <Image
                        src={character.images[0] || "/public/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg"}
                        alt={character.name} height={0} priority
                        fill
                        className="rounded-xl object-cover">
                    </Image>
                </div>
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
