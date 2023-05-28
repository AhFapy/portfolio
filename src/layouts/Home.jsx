import Navbar from "../components/Navbar";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <>
        <Navbar />
        <main id="main-home" className="text-white text-[3.7vw] flex flex-col justify-center items-center h-screen">
            <div className="px-[9vw] text-center flex justify-center items-center flex-col mt-[6vh] w-[85vw] h-[70vh]">
                <h1 className="text-[5.4vw]">
                        <Typewriter
                            words={['Welcome', 'Bienvenido', 'Welkommen', 'Svaagat']}
                            loop={0}
                            cursor
                            cursorStyle='▎'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                        <span> </span>
                        <br />
                </h1>
                <h1 className="mt-[2vh]">Here you'll get to know me as a person and as a <i class='bx bx-code text-[3.4vw]'></i><span> </span>Developer<span> </span><i class='bx bx-code-alt text-[3.4vw]'></i></h1>
            </div>
        </main>
    </>
  )
}
