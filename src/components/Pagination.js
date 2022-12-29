import React from 'react'
import { Pagination, PageItem } from "react-bootstrap"


const Page = (props) => {

    const { currentPage, setCurrentPage, totalPage} = props

    const pages = [] 
    for (let i = 1; i <= currentPage; i++) {
        pages.push(i);
    }
    
    return (
    <>
        <Pagination>
            {currentPage > 1 &&(
                <PageItem onClick={() => setCurrentPage(currentPage - 1)}>
                    Previous
                </PageItem>
            )}
            {pages.map(page => (
                <PageItem 
                    key={page} 
                    onClick={() => setCurrentPage(page)}
                    active={page === currentPage}
                >
                    {page}
                </PageItem>
            ))}
            {currentPage < totalPage && (
                <PageItem onClick={() => setCurrentPage(currentPage + 1)}>
                    Next
                </PageItem>
            )}
        </Pagination>
    </>
  )
}

export default Page