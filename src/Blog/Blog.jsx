import MyBlog from "./MyBlog"
import PopularPost from "./PopularPost"
import Tags from "./Tags"
import MyData from './MyData'
import Popular from './Popular'
import Pagination from '@mui/material/Pagination';
function Blog() {
    let myblogs = MyData.map((blog, index) => {
        return (
            <MyBlog
                key={index}
                image={blog.image}
                title={blog.title}
                commentsno={blog.comments}
                experience={blog.experience}
                date={blog.date}
            />
        )
    })

    let populars = Popular.map((pop, index) => {
        return (
            <PopularPost

                key={index}
                title={pop.title}
                name={pop.name}
                date={pop.date}
                commentsno={pop.numberOfComments}
                image={pop.image}

            />
        )
    })

    return (
        <div className="font-[Poppins]">
            <h1 className=" text-4xl font-semibold text-center my-8">My latest blog</h1>
            <div className="flex ">
                <div className=" w-full">
                {myblogs}
                <Pagination
                
                />
                </div>
                <div className="shadow-slate-400 w-1/3">
                    {populars}
                    <Tags />
                </div>
            </div>
        </div>);
}
export default Blog;