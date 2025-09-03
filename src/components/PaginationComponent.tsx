"use client"

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

import { useState } from 'react'

export default function PaginationComponent({page} : {page: string}) {

    const [pageState, setPageState] = useState(+page)

    const handleNextPagination = () => {
        setPageState(pageState+1)
    }

    const handlePrevPagination = () => {
        setPageState(pageState-1)
    }
    return (
        <div>
            <Pagination className="my-3">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href={`characters?page=${pageState - 1 }`} onClick={handlePrevPagination} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href={`characters?page=${pageState}`}>{page}</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href={`characters?page=${pageState + 1}`} onClick={handleNextPagination}/>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}
