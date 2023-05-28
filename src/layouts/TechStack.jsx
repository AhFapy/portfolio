import Navbar from "../components/Navbar";

export default function TechStack() {
  return (
    <>
        <Navbar />
        <main id="main-tech" className="text-white text-[5vw] flex flex-col justify-center items-center h-screen">
            <div className="pt-[6vh] flex flex-col items-center mt-[6vh] w-[90vw] h-[80vh]">
                <div>
                    <h1 className="flex items-center flex-col">
                        Most skilled in 🛠️
                        <span className="text-[6vw]">
                            <i class='bx bxl-html5 hover:text-white text-orange-600 ease-in-out duration-500'></i>
                            <i class='bx bxl-javascript hover:text-white text-yellow-500 ease-in-out duration-500'></i>
                            <i class='bx bxl-css3 hover:text-white text-blue-600 ease-in-out duration-500'></i>
                            <i class='bx bxl-react hover:text-white text-cyan-600 ease-in-out duration-500'></i>
                        </span>
                    </h1>
                </div>
                <div>
                    <h1 className="flex items-center flex-col">
                        Getting experience in 🧠
                        <span className="text-[6vw]">
                            <i class='bx bxl-django hover:text-white text-green-900 ease-in-out duration-500'></i>
                            <i class='bx bxl-tailwind-css hover:text-white text-cyan-400 ease-in-out duration-500'></i>
                        </span>
                    </h1>
                </div>
            </div>
        </main>
    </>
  )
}
