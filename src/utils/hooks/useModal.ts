import { useState } from 'react'

const useModal = () => {
  const [open, setOpen] = useState(false)

  return { open, setOpen }
}

export default useModal
