import CloseIcon from '../../public/assets/icon-close.svg'
import rulesImg from '../../public/assets/image-rules.svg'

const POPup = ({ hidden, clickHandler }: { hidden: boolean, clickHandler: any }) => {

  return (
    <div className={`absolute z-20 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center ${hidden && 'hidden'}`}>
      <div className="md:h-[38rem] md:w-[36rem] md:rounded-xl h-full w-full flex flex-col items-center justify-around px-10 bg-white ">
        <div className="flex flex-row items-center justify-between w-full">
          <h3 className="text-4xl font-bold max-sm:text-center w-full">
            Rules
          </h3>
          <button className="hidden sm:block" onClick={clickHandler}>
            <img src={CloseIcon} alt="close" width={28} />
          </button>
        </div>
        <div className="">
          <img src={rulesImg} alt="rules" width={420} />
        </div>
        <button className="max-sm:block sm:hidden" onClick={clickHandler}>
          <img src={CloseIcon} alt="close" width={28} />
        </button>
      </div>
    </div>
  )
}

export default POPup
