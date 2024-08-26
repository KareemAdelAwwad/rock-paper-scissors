import { useState } from "react";
import POPup from "./POPup";
import Button from "./Button";

const Footer = () => {
  const [isHidden, setHidden] = useState(true);
  const StatusHandler = () => {
    setHidden(!isHidden);
  }
  const newDate = new Date();
  return (
    <>
    <POPup hidden={isHidden} clickHandler={StatusHandler}/>
      <footer className="w-full h-20 text-gray-300 flex md:flex-row flex-col-reverse justify-between items-center px-10 py-4">
        <p className="md:text-base text-xs">
          All rights reserved © {newDate.getFullYear()}
        </p>

        <Button title="Rules" outline={true} className="my-4" clickEvent={StatusHandler} />
      </footer>
    </>
  )
}

export default Footer
