import ChooseCircle from "./ChooseCircle"
import Button from "./Button";
import { useEffect, useState } from "react";

const PlayGround = ({ userChoice, setUserChoice, score, setScore }: { userChoice: number, setUserChoice: any, score: number, setScore: any }) => {
  const [cpuChoice] = useState<number>(Math.floor(Math.random() * 3));
  const [choiceHidden, setChoiceHidden] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (userChoice === cpuChoice) {
      } else if (
        (userChoice === 0 && cpuChoice === 2) ||
        (userChoice === 1 && cpuChoice === 0) ||
        (userChoice === 2 && cpuChoice === 1)
      ) {
        setScore(score + 1);
      } else {
        setScore(score - 1);
      }
    }, 1500);
    return () => clearTimeout(timeout);
  }, [cpuChoice]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setChoiceHidden(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="relative md:w-[45rem] md:h-[28rem]
      w-[80vw] h-[22rem] flex md:flex-row flex-col items-start justify-between ">
      <div className="flex justify-between w-full md:gap-[10rem]">

        <div className="text-center gap-5 flex md:flex-col flex-col-reverse">
          <h2 className="text-white md:text-3xl">You Picked</h2>
          <div className="bg-dark aspect-square md:w-[11.5rem] md:h-[11.5rem] w-[8rem] rounded-full">
            {
              <ChooseCircle CircleType={userChoice} />
            }
          </div>
        </div>




        <div className=" text-center gap-5 flex md:flex-col flex-col-reverse pointer-events-none">
          <h2 className="text-white md:text-3xl">CPU Picked</h2>
          <div className={`relative bg-dark aspect-square md:w-[11.5rem] md:h-[11.5rem] w-[8rem] rounded-full`}>
            {
              <ChooseCircle CircleType={cpuChoice} className={`${choiceHidden && 'hidden'}`} />
            }
          </div>
        </div>

      </div>
      <div className="w-full md:w-[15rem] absolute md:bottom-[40%] bottom-0 left-[50%] translate-x-[-50%] md:translate-y-[-50%] flex flex-col justify-center">
        <h1 className={`text-5xl text-center text-white font-bold ${choiceHidden && 'hidden'}`}>
          {
            (cpuChoice === userChoice) ? "Draw" : (userChoice === 0 && cpuChoice === 2) || (userChoice === 1 && cpuChoice === 0) || (userChoice === 2 && cpuChoice === 1) ? "You Win" : "You Lose"
          }
        </h1>
        <Button title="Play Again" className="mt-5" clickEvent={() => {
          (score >= 5 || score <= -5) && setScore(0)
          setUserChoice(null)

        }} />
      </div>
    </div>
  )
}

export default PlayGround
