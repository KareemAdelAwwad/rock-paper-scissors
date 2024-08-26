import Rock from '../../public/assets/icon-rock.svg';
import Paper from '../../public/assets/icon-paper.svg';
import Scissors from '../../public/assets/icon-scissors.svg';

enum Type {
  Rock = 0,
  Paper = 1,
  Scissors = 2,
}

const ChooseCircle = ({ CircleType, className, clickEvent }: { CircleType: any, className?: string, clickEvent?:any }) => {
  const parentClass = 'md:w-[11rem] md:h-[11rem] w-[8rem] h-[8rem] rounded-full flex items-center justify-center border-b-8 border-t-8 border-t-transparent border-opacity-30 border-dark';
  const defaultClass = 'group md:w-[9rem] md:h-[9rem] w-[6rem] h-[6rem] bg-white rounded-full border-t-8 border-opacity-25 border-dark flex items-center justify-center';
  const imgClass = 'group-hover:rotate-[25deg] absolute transition-transform duration-300 ease-in-out';
  

  return (
    <div className={`${className || ''} z-10 cursor-pointer`}>
      {
        CircleType === Type.Rock ? (
          <div className={`${parentClass} bg-red-500`} onClick={clickEvent}>
            <div className={defaultClass}>
              <img src={Rock} width={70} height={70} alt={Type[0]} className={imgClass} />
            </div>
          </div>
        ) : null
      }
      {
        CircleType === Type.Paper ? (
          <div className={`${parentClass} bg-blue-500 `} onClick={clickEvent}>
            <div className={defaultClass}>
              <img src={Paper} width={70} height={70} alt={Type[1]} className={imgClass} />
            </div>
          </div>
        ) : null
      }
      {
        CircleType === Type.Scissors ? (
          <div className={`${parentClass} bg-orange-400`} onClick={clickEvent}>
            <div className={defaultClass}>
              <img src={Scissors} width={70} height={70} alt={Type[2]} className={imgClass} />
            </div>
          </div>
        ) : null
      }

    </div>
  )
}
export default ChooseCircle
