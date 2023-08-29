import { useState, useId } from "react"
function Header() {

    const search = useId()
    const [searchItem, setSearchItem] = useState("")
    const handlesearchChange = (event) => {
        setSearchItem(event.target.value)
    }
    return (
        <header className=" ">
            <div className="flex flex-row justify-between mb-4 pt-4 items-center ">

                <h3 className="Poppins text-lg ml-100 font-semibold">Gallivant</h3>
                <label htmlFor={search}></label>

                <input
                    id={search}
                    placeholder="Search your option"
                    className="text-sm text-black  w-[554px] p-5 h-[53px] rounded-3xl border-transparent"
                    value={searchItem}
                    onChange={handlesearchChange}

                />
                <div className="flex flex-row items-center ">
                        <div>
                            <img src="../images/facebook.png" alt="facebook.png" className=""/>
                        </div>
                    <div className="">
                        <img src="../images/twitter.png" alt="twitter logo" className="" />
                    </div>
                    <div className="">
                        <img src="../images/instagram.png" alt="instagram logo" className="" />
                    </div>
                    <div className="">
                        <img src="../images/youtube.png" alt="youtube logo" className="" />
                    </div>

                </div>

            </div>
            <nav className="flex justify-evenly items-center text-xl border-t border-white">
                <h4>Home</h4>
                <h4>About Me</h4>
                <h4>Category</h4>
                <h4>Blog</h4>
                <h4>Contact Me</h4>
            </nav>
        </header>
    );


}
export default Header;