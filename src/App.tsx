import Footer from "./components/Footer"
import Header from "./components/Header"
import PlayGround from "./components/PlayGround"
import Triangle from "./components/Triangle"
import confetti from "canvas-confetti"


import { useState } from "react"

function App() {
  const handleClick = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  let [score, setScore] = useState<number>(0)
  if (score === 5) {
    handleClick()
  }


  let [userChoice, setUserChoice] = useState<number | null>(null)
  return (
    <section className="uppercase w-[100vw] h-[100vh] flex flex-col items-center justify-center overflow-clip">
      <div className="h-full md:w-[60vw] w-[100vw] flex flex-col items-center justify-evenly">
        <Header score={score} />
        {
          userChoice === null ? (
            <Triangle userChoice={setUserChoice} />
          ) : (
            <PlayGround userChoice={userChoice} setUserChoice={setUserChoice} score={score} setScore={setScore} />
          )
        }
      </div>
      <Footer />
    </section>
  )
}

export default App
