import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import SendIcon from '@mui/icons-material/Send'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'

import { useAppDispatch, useAppSelector } from '_redux/hooks'
import { fetch as chatFetch } from '_redux/slices/chatSlice'

import Box from '@mui/material/Box'
import { Channel } from 'types/Channel'
import ChatElement from 'components/chatElement'

export default function Chanel() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [channelSel, setChannelSel] = useState<Channel>()
  const [comment, setComment] = useState('')
  const { id } = useParams()

  const channels = useAppSelector((state) => state.channels)

  const chat = useAppSelector((state) => state.chat)

  const [submit, setSubmit] = useState(false)
  const [errors, setErrors] = useState({})
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    setComment('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate])

  useEffect(() => {
    validateForm()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comment])

  const validateForm = () => {
    const errorsForm: { [key: string]: string } = {}
    if (comment === '') {
      errorsForm.comment = 'Comment is required.'
    }
    setErrors(errorsForm)
    setIsFormValid(Object.keys(errorsForm).length === 0)
  }

  const validFieldForm = (nameField: string) => {
    if (
      !isFormValid &&
      submit &&
      errors[nameField] !== undefined &&
      errors[nameField] !== ''
    ) {
      return errors[nameField]
    } else {
      return ''
    }
  }

  useEffect(() => {
    const sel = channels.result.find((item) => item.id === id)
    if (id !== '' && sel != null) {
      setChannelSel(sel)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  useEffect(() => {
    if (!chat.loading) {
      setSubmit(false)
      setComment('')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chat])

  const send = () => {
    setSubmit(true)
    if (isFormValid) {
      channelSel?.id !== undefined &&
        dispatch(
          chatFetch({
            text: comment,
            user: 'Administrator',
            type: 'channel',
            typeId: channelSel.id
          })
        )
    }
  }

  if (channelSel === undefined) {
    return <>Error access</>
  }

  return (
    <>
      <Box>
        <Typography variant="h4" mb={1} component="h2">
          Channel: #{channelSel.name}
        </Typography>
        <Box>
          {chat.result?.map((item, index) => (
            <ChatElement key={index} item={item} />
          ))}
        </Box>
        <Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{
              p: 1,
              px: 2,
              border: 1,
              borderColor: 'grey.400',
              borderRadius: 3
            }}
          >
            <Box flex={1}>
              <TextField
                margin="dense"
                id="address"
                label="Comments"
                required
                type="text"
                fullWidth
                variant="outlined"
                onChange={(e) => {
                  setComment(e.target.value)
                }}
                value={comment}
                multiline={true}
                error={validFieldForm('comment') !== ''}
                helperText={validFieldForm('comment')}
              />
            </Box>
            <Box>
              <Button
                variant="contained"
                endIcon={!chat.loading ? <SendIcon /> : null}
                disabled={chat.loading}
                sx={{ ml: 2, mt: 2 }}
                onClick={send}
              >
                {chat.loading ? (
                  <>
                    <CircularProgress size={28} />
                  </>
                ) : (
                  'Send'
                )}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
