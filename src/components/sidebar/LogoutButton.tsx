import { Button } from '@mui/material'

interface Props {
  onClick: () => void
}

export const LogoutButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Button
      className="bg-slackDark w-full cursor-pointer rounded-none text-white outline-none"
      onClick={onClick}
    >
      Logout
    </Button>
  )
}
