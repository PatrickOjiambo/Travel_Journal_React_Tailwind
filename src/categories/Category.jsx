
import Top from './Top'
import TopData from "./TopData"
import BottomCard from "./BottomCard"
import travelData from './BottomData'
import Pagination from './Pagination'
import { useState } from 'react';


function Category() {
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 6;
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = travelData.slice(firstPostIndex, lastPostIndex);

    let top_data = TopData.map(data => {
        return (<Top
            link={data.link}
            heading={data.heading}
        />)
    })

    return (
        <div className=' pt-16'>
            <h3 className='font-semibold text-3xl mb-24 mx-[35%]'>Choose A Category</h3>
            <div
                className="flex flex-row h-52 items-center justify-between">

                {top_data}
            </div>

            <h3 className='font-semibold text-4xl my-8 text-center'>Featured Explore</h3>
            
            <BottomCard 
            data={currentPosts}
            />
            <Pagination
            totalPosts={travelData.length}
            postsPerPage={postPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            />
            

        </div>

    )
}
export default Category