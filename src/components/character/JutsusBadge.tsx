
import { Badge } from "@/components/ui/badge"

export function JutsusBadge({ jutsus }: { jutsus: string[] }) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex w-full flex-wrap gap-2">
                {jutsus.map((jutsu, index) => (
                    <Badge variant="outline" key={index}>{jutsu}</Badge>
                ))}
            </div>
        </div>
    )
}
