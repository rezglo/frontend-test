import { useCallback, useRef } from 'react'
import { useDisclosure } from '.'

export const useFloatMenu = () => {
  const { close: onCloseMenu, open: onOpenMenu, isOpen: isShowMenu } = useDisclosure()
  const { close: onCloseEditMode, open: onActiveEditMode, isOpen: isEditMode } = useDisclosure()
  const elementRef = useRef(null)

  const activeEditMode = useCallback(() => {
    onActiveEditMode()
    onCloseMenu()
  }, [onCloseMenu, onActiveEditMode])

  const disableEditMode = useCallback(() => {
    onCloseEditMode()
  }, [onCloseEditMode])

  return {
    isShowMenu,
    elementRef,
    onOpenMenu,
    onCloseMenu,
    isEditMode,
    disableEditMode,
    activeEditMode,
  }
}
