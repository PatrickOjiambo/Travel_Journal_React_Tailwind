import Header from "./Header";
import Main from "./Main";

function HomePage() {
    return (
        <div className=" bg-cover h-[100%] font-[Poppins]  text-white min-h-screen
          bg-[url('/images/woman.png')] bg-no-repeat bg-blend-multiply
          bg-slate-500  px-20
        ">
            
           
            <Header/>
            <Main />
            
        </div>

    )
}
export default HomePage;