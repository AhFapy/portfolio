import Navbar from "../components/Navbar";

export default function AboutMe() {
  return (
    <>
        <Navbar />
        <main id="main-about" className="text-white text-[3vw] flex flex-col justify-center items-center h-screen">
            <div className="flex justify-center text-center items-center px-[4vw] mt-[6vh] w-[85vw] h-[70vh]">
                <h1>
                  I am Ahmed Mirza, aka AhFa, and I am a self-taught Software Developer learning every single 
                  day since December 2022. My core values are: integrity, commitment, discipline and team work.
                </h1>
            </div>
        </main>
    </>
  )
}
