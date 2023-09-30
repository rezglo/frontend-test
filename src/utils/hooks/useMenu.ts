import { useState, useEffect, useRef } from 'react'

export const useMenu = () => {
  const [open, setOpen] = useState(false)
  const anchorRef = useRef<HTMLButtonElement>(null)
  const prevOpen = useRef(open)

  useEffect(() => {
    if (prevOpen.current && !open) {
      if (anchorRef.current != null) {
        anchorRef.current.focus()
      }
    }

    prevOpen.current = open
  }, [open])

  return { open, setOpen, anchorRef, prevOpen }
}
