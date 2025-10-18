import { Skeleton } from "../ui/skeleton";

export default function LoadingSkeleton() {
    return (
        <div className="grid grid-cols-5 gap-5 px-10 pt-2">
            {Array.from({ length: 10 }).map((_, index) =>
                <div className="flex flex-col space-y-3" key={index}>
                    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                    </div>
                </div>
            )}
        </div>
    )
}
