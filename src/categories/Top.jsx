function Top(props) {

    return (
        <div className="relative ">
            <img src={props.link} alt="category images" className="h-[221px] w-[177px] rounded-[10px] brightness-75" /> 
            <p className="absolute top-[50%] left-[25%] text-white font-bold text-sm ">{props.heading}</p>

        </div>
    )
}
export default Top
