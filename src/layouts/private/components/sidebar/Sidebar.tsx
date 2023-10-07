import { Link } from 'react-router-dom'
import { FiberManualRecord, Create } from '@mui/icons-material'
import { Typography } from '@mui/material'

import { MenuDivider } from './MenuDivider'
import { MenuChannels } from './MenuChannels'
import { MenuDirectMessages } from './MenuDirectMessages'
import { LogoutButton } from './LogoutButton'
import { MenuOptions } from './MenuOptions'
import { useUserStore } from '../../../../stores'

export const Sidebar = () => {
  const [authUser, logout] = useUserStore((state) => [state.authUser, state.logout])

  return (
    <nav className="border-t-slackLight grid h-full max-h-screen w-full max-w-[300px] grid-rows-[100px_1fr_50px] border-t-2 border-solid bg-slack text-white">
      <section className="border-b-slackLight flex w-full items-center justify-between border-b-2 border-solid px-2">
        <div className="aling-start flex w-full flex-col gap-1">
          <Typography component="h2" className="text-xl font-bold">
            <Link to="/">MY Chat</Link>
          </Typography>
          <div className="flex items-center justify-start gap-1">
            <FiberManualRecord className=" text-[14px] text-green-500" />
            <Typography component="h3" className="text-sm font-light">
              {authUser?.name}
            </Typography>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <Link
            to="/"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xs text-slack"
          >
            <Create />
          </Link>
        </div>
      </section>
      <section className="scrollbar-gutter-stable max-h-[550px] overflow-y-auto w-full">
        <MenuOptions />
        <MenuDivider />
        <MenuChannels />
        <MenuDivider />
        <MenuDirectMessages />
      </section>
      <LogoutButton onClick={logout} />
    </nav>
  )
}
