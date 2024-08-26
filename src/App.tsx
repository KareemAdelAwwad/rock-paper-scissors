import Footer from "./components/Footer"
import Header from "./components/Header"
import PlayGround from "./components/PlayGround"
import Triangle from "./components/Triangle"
import { useState } from "react"

function App() {
  let [score, setScore] = useState<number>(0)
  let [userChoice, setUserChoice] = useState<number | null>(null)
  return (
    <section className="uppercase w-[100vw] h-[100vh] flex flex-col items-center justify-center overflow-clip">
      <div className="h-full md:w-[60vw] w-[100vw] flex flex-col items-center justify-evenly">
        <Header score={score} />
        {
          userChoice === null ? (
            <Triangle userChoice={setUserChoice} />
          ) : (
            <PlayGround userChoice={userChoice} setUserChoice={setUserChoice} score={score} setScore={setScore}   />
          )
        }
      </div>
      <Footer />
    </section>
  )
}

export default App
