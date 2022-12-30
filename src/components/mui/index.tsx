import { useTheme } from '@emotion/react'
import { Typography } from '@mui/material'

const MUiMode = () => {
  const theme: any = useTheme()
  return (
    <Typography component={'h1'}>{`${theme.palette.mode} mode`}</Typography>
  )
}

export default MUiMode
