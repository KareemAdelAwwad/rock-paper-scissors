const Header = ({score}: {score:number}) => {
  return (
    <header className="md:h-[10rem] h-[5rem] w-[80%] border border-header rounded-2xl flex items-center justify-between md:px-8 px-4 py-6">
      <img src="../../public/assets/logo.svg" alt="rock paper scissors" className="md:w-[180px] w-[80px]" />
      <div className="flex flex-col items-center justify-center bg-white md:w-[180px] md:h-[130px] h-[70px] w-[100px] rounded-xl">
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
