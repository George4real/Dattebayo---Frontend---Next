"use client"

import { Character } from "@/schemas/CharacterSchema";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

export default function CharacterImageCarousel({ character }: { character: Character }) {
    return (
        <div className="flex justify-center mx-10">
            <Carousel className="w-full">
                <CarouselContent>
                    {character.images.map((img, index) => (
                        <CarouselItem key={index}>
                            <Image src={img} alt={character.name} width={1000} height={0}/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    )
}
