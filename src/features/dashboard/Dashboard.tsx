import { Button, Typography } from '@mui/material'

export const Dashboard = () => {
  return (
    <div className="grid place-items-center w-full h-full">
      <div className="px-10 text-center w-full h-full">
        <img className="w-40 h-40 mb-24" src="/slack-logo.svg" alt="Slack Logo" />
        <Typography variant="h4" component="h1" className="font-extrabold mb-8">
          Welcome to Slack
        </Typography>
        <Typography variant="h6" component="h2" className=" font-lighttext-base text-gray-500">
          Slack brings all your team communication into one place, makes it all instantly searchable
          and available wherever you go.
        </Typography>

        <Typography variant="h6" component="h2" className="text-sm text-gray-400">
          Our aim is to make your working life simpler, more pleasant and more productive.
        </Typography>

        <Button className="mt-[30px] bg-green-600 text-white rounded-sm p-3" onClick={() => {}}>
          Create Channel
        </Button>
      </div>
    </div>
  )
}
