import { useRef } from "react"
import CustomInput from "./CustomInput";

const Container = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  }

  const handleClear = () => {
    inputRef.current.clear();
  }
  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={handleFocus}>Focus</button>    
      <button onClick={handleClear}>Clear</button>
    </div>
  )
}

export default Container