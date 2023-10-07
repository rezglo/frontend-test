import { Button, Divider, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import googleIcon from '@/assets/icons8-google.svg'
import appleIcon from '@/assets/icons8-apple-logo.svg'

interface Props {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <section className="gap-4 flex justify-center items-center flex-col rounded-lg p-10 text-left">
      <img className="mb-6" src={'/slack-logo.svg'} width={120} height="auto" alt="Slack Logo" />

      <Typography variant="h4" component="h4" className="font-extrabold">
        Sign in to Slack-Clone
      </Typography>
      <Typography className="text-gray-500">slack.com</Typography>
      <div className="flex justify-center items-center gap-2 mt-2 flex-col w-full">
        <Button className=" border-[#4285f4] text-[#4285f4] border-2 border-solid rounded-md w-full font-semibold">
          <img
            className="mr-4"
            src={googleIcon}
            width={30}
            height="auto"
            loading="lazy"
            alt="Google Logo Icon"
          />
          Continue with Google
        </Button>
        <Button className=" border-[#1d1c1d] border-2 border-solid rounded-md w-full">
          <img
            className="mr-4"
            src={appleIcon}
            width={30}
            height="auto"
            loading="lazy"
            alt="Apple Logo Icon"
          />
          Continue with Apple
        </Button>
      </div>
      <Divider className="w-full text-gray-700">OR</Divider>
      {children}
      <Typography className="w-full text-gray-400" variant="caption">
        {`Forgot your Password?  `}
        <Link to="/auth/reset-password" className="text-blue-500 font-semibold">
          Get help signing in
        </Link>
      </Typography>
    </section>
  )
}
