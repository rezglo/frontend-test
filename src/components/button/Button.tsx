import { Button as ButtonMaterial, CircularProgress } from '@mui/material'

interface Props {
  isLoading?: boolean
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
}

export const Button: React.FC<Props> = ({
  isLoading,
  children,
  className,
  type = 'button',
  onClick,
}) => {
  return (
    <ButtonMaterial
      disabled={isLoading}
      type={type}
      variant="contained"
      className={className}
      onClick={onClick}
    >
      {isLoading && <CircularProgress size={24} className="text-green-500" />}
      {!isLoading && <span className="mx-2">{children}</span>}
    </ButtonMaterial>
  )
}
