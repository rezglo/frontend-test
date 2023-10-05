import { useState } from 'react'

export const useFloatMenu = () => {
  const [floatMenuRef, setMenu] = useState<HTMLButtonElement | null>(null)
  const [isEditMode, setEditMode] = useState(false)

  const activeEditMode = () => {
    setEditMode(true)
    onCloseMenu()
  }

  const disableEditMode = () => {
    setEditMode(false)
  }

  const onCloseMenu = () => {
    setMenu(null)
  }

  const onOpenMenu = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setMenu(event.target as HTMLButtonElement)
  }

  return { floatMenuRef, onOpenMenu, onCloseMenu, isEditMode, disableEditMode, activeEditMode }
}
