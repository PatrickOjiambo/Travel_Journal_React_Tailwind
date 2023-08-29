function MyBlog(props) {
    return (
    <div className="flex w-2/3 justify-between">
        
        <img src={props.image} className="w-[23rem] h-56 rounded-lg mr-2"/>
        <div>
            <h3 className="capitalize font-semibold text-lg">{props.title}</h3>
            <div className="flex">
            <p className="mr-2 text-specialgrey">{props.date}</p>
            <p className="text-funnyOrange font-normal text-sm ">{props.commentsno} comments</p>
            </div>
            <p className="text-specialgrey text-left">{props.experience}</p>
        </div>
    </div>)
}

export default MyBlog;