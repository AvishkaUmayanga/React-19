import { useImperativeHandle, useRef } from "react"


const CustomInput = ({ref, ...props}) => {
    console.log(props)
  const inputRef = useRef();

  useImperativeHandle(ref, ()=> ({
    focus: () => {
        inputRef.current.focus();
    },
    clear: () => {
        inputRef.current.value = "";
    }
  }))
  return (
    <input ref={inputRef} />
  )
}

export default CustomInput