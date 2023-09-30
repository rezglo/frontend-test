import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useAppSelector } from '_redux/hooks'

export default function Dashboard() {
  const user = useAppSelector((state) => state.signIn.result)

  return (
    <>
      <Box sx={{ my: 2 }}>
        <Typography variant="h4" gutterBottom>
          Welcome, {user.name}
        </Typography>
      </Box>
    </>
  )
}
