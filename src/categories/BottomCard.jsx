import Bottom from "./Bottom";
function BottomCard({data}){

    return (
        <div
                className='grid md:grid-cols-3 gap-4 gap-x-4 grid-cols-1 mx-5 place-items-center '>

                    {
                        data.map((user, index) => {
                            return (<Bottom
                                key={index}
                                imagelink={user.imagelink}
                                title={user.heading}
                                experience={user.experience}
                                traveltype={user.travelType}
                                name={user.name}
                            />)
                        })
                    }
                </div>
    );
}
export default BottomCard