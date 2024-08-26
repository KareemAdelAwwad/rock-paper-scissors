const Button = ({ title, outline = false, className, clickEvent }: { title: string, outline?: boolean, className?: string, clickEvent?:any }) => {
  return (
    <button
      onClick={clickEvent}
      className={`${className}
      transition-all duration-300 ease-in-out py-2 rounded-lg md:text-xl text-sm border border-white uppercase
      ${outline
          ? 'text-white bg-transparent hover:bg-white hover:text-dark px-10'
          : 'text-dark bg-white px-16 hover:text-red-400'}`}>
      {title}
    </button>
  )
}

export default Button
