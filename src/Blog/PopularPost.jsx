function PopularPost(props) {
    return (<div className="flex">
        <img src={props.image} className="w-[5.4rem] h-16 rounded-md"/>
        <div className="ml-2">
        <h2 className="font-semibold text-lg">{props.title}</h2>
        <p className="text-sm">Post By {props.name}</p>
<div className="flex">
<p className="text-sm">{props.date}</p>
        <p className="text-sm ml-3">{props.commentsno}</p>
</div>
        </div>
    </div>);
}

export default PopularPost;