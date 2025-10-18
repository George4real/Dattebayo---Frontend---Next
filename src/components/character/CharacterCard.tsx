"use client";

import { Character } from "@/schemas/CharacterSchema";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { ImageSkeleton } from "./ImageSkeleton";

export default function CharacterCard({ character }: { character: Character }) {

    

  return (
    <>
      <Card className="pt-0">
        <div className="relative">
          <Suspense fallback={<ImageSkeleton />}>
            <Image
              src={character.images[1]}
              alt={character.name}
              width={975}
              height={730}
              priority
              className="rounded-xl object-cover"
            />
          </Suspense>
        </div>
        <CardHeader>
          <CardTitle className="text-center text-xl">
            {character.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <CardAction>
            <Link
              href={`/characters/${character.id}`}
              className="uppercase border-2 rounded-2xl p-1 py-1"
            >
              See more
            </Link>
          </CardAction>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
}
