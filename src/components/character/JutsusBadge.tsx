
import { Badge } from "@/components/ui/badge"

export function JutsusBadge({ jutsus }: { jutsus: string[] }) {
    return (
        <div className="max-h-64 overflow-y-auto border rounded-lg p-3 bg-muted/40 custom-scrollbar">
            <div className="flex flex-wrap gap-2">
                {jutsus.map((jutsu, index) => (
                    <Badge variant="outline" key={index} className="mb-1 break-words max-w-full">{jutsu}</Badge>
                ))}
            </div>

        </div>
    )
}
