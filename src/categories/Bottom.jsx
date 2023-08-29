function Bottom(props){

    return(
        <div className="w-80 rounded-3xl ">
            <img src={props.imagelink} alt="Card images" className="h-72 w-full"/>
            <h4 className="font-semibold text-lg text-black">{props.title}</h4>
            <p className="font-normal text-gray-500 text-sm">{props.experience}</p>
            <div className="shadow-lg">
                <span className="text-sm font-normal text-funnyOrange">{props.traveltype}</span>
                <span className="text-gray-500 text-sm"> By </span>
                <span className="font-normal text-black">{props.name}</span>
            
            </div>
        </div>
    )
}
export default Bottom