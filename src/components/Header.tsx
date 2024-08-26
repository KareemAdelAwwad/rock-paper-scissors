import Logo from "../../public/assets/logo.svg"
import WonVideo from "../../public/assets/won.mp4"
import LostGif from "../../public/assets/lost.gif"

const Header = ({ score }: { score: number }) => {
  return (
    <header className="relative md:h-[10rem] h-[5rem] w-[80%] border border-header rounded-2xl flex items-center justify-between md:px-4 px-1  py-6 overflow-hidden">
      <img src={Logo} alt="rock paper scissors" className="md:w-[180px] w-[70px]" />
      <p className="md:text-1xl text-sm text-gray-200">
        {score === 5 ? (
          <video autoPlay loop muted className="md:h-[160px] h-[100px]">
            <source src={WonVideo} type="video/mp4" />
          </video>
        ) : score === -5 ? (
          <img src={LostGif} alt="lost" className="md:h-[160px] h-[100px]" />
        ) : "Try to reach 5 Points"}
      </p>
      <div className="flex flex-col items-center justify-center bg-white md:w-[180px] md:h-[130px] h-[70px] w-[80px] rounded-xl">
        <h5 className="md:text-xl text-score">
          Score
        </h5>
        <p className="md:text-7xl text-3xl text-header">
          {score}
        </p>
      </div>
    </header>
  )
}

export default Header
