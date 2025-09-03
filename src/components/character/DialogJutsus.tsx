"use client"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { JutsusBadge } from "./JutsusBadge"
import { Character } from "@/schemas/CharacterSchema"
import { Button } from "../ui/button"

export default function DialogJutsus({ character }: { character: Character }) {
    return (
        <>
            <Dialog>
                <DialogTrigger className="">View</DialogTrigger>
                <DialogContent className="mt-2">
                <DialogTitle className="text-center">Jutsus</DialogTitle>
                    <JutsusBadge jutsus={character.jutsu} />
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                </DialogContent>
            </Dialog>
        </>
    )
}
