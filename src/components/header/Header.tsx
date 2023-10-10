import { useEffect } from 'react'
import { Avatar } from '@mui/material'
import { AccessTime, HelpOutline, Search } from '@mui/icons-material'

import { useUserStore } from '@/stores'

interface Props {
  className: string
}

export const Header: React.FC<Props> = ({ className }) => {
  const [authUser, getAuthUser] = useUserStore((state) => [state.authUser, state.getAuthUser])

  useEffect(() => {
    getAuthUser()
  }, [getAuthUser])

  return (
    <header className={className}>
      <div className=" flex justify-end w-full gap-10 flex-[0.8]">
        <AccessTime />
        <form
          role="search"
          className=" bg-[#421f44] flex justify-center px-20 text-gray-500 border-2 border-gray-500 border-solid rounded-md"
        >
          <Search />
          <input
            className="min-w-[35vw] text-center text-white bg-transparent text-xs focus:outline-none"
            placeholder="Search a user or a message"
          />
        </form>
        <HelpOutline />
      </div>
      <div className="flex justify-end flex-[0.2] w-full">
        <Avatar
          className="w-[30px] h-[30px] cursor-pointer rounded-2xl"
          src={authUser?.avatar}
          alt={authUser?.name}
        />
      </div>
    </header>
  )
}
