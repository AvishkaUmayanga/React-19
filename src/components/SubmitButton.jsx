import {useFormStatus} from 'react-dom'

const SubmitButton = () => {
  const {pending} = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Logging in...' : 'Login'}
    </button>
  )
}

export default SubmitButton
