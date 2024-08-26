import ChooseCircle from "./ChooseCircle"
import triangle from '../../public/assets/bg-triangle.svg'

const Triangle = ({userChoice} : {userChoice:any}) => {
  return (
    <div className="relative sm:w-[30rem] md:h-[28rem]
      w-[90vw] h-[22rem] overflow-hidden flex justify-between">
      <ChooseCircle CircleType={0} className="absolute bottom-10 left-[50%] translate-x-[-50%]" clickEvent={() => userChoice(0)} />
      <ChooseCircle CircleType={1} clickEvent={() => (userChoice(1))} />
      <ChooseCircle CircleType={2} clickEvent={() => (userChoice(2))} />
      <img src={triangle} alt="triangle"
      className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
      max-sm:h-[65%]" />
    </div>
  )
}

export default Triangle
