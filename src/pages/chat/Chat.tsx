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

interface Props {
  typeChat: 'channel' | 'user'
}

const Chat: React.FC<Props> = ({ typeChat }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [elemSel, setElemSel] = useState<Channel>()
  const [comment, setComment] = useState('')
  const { id } = useParams()

  const channels = useAppSelector((state) => state.channels)
  const users = useAppSelector((state) => state.users)

  const chat = useAppSelector((state) => state.chat)
  const user = useAppSelector((state) => state.signIn.result)

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
    const sel =
      typeChat === 'channel'
        ? channels.result.find((item) => item.id === id)
        : users.result.find((item) => item.id === id)
    if (id !== '' && sel != null) {
      setElemSel(sel)
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
      elemSel?.id !== undefined &&
        dispatch(
          chatFetch({
            text: comment,
            user: user?.name ?? 'test',
            type: typeChat,
            typeId: elemSel.id
          })
        )
    }
  }

  if (elemSel === undefined) {
    return <>Error access</>
  }

  const chatFilter = chat.result?.filter(
    (item) => item.type === typeChat && item.typeId === elemSel.id
  )
  return (
    <>
      <Box>
        <Typography variant="h4" mb={1} component="h2">
          {typeChat === 'channel' ? 'Channel' : 'User'}:{' '}
          {typeChat === 'channel' ? '#' : ''}
          {elemSel.name}
        </Typography>
        <Box>
          {(chatFilter.length === 0 || chatFilter === null) && (
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              sx={{
                backgroundColor: 'grey.100',
                borderRadius: 3,
                py: 4,
                mb: 2
              }}
            >
              <Typography
                variant="body1"
                display="block"
                sx={{ color: 'grey.400' }}
              >
                Not exist comments
              </Typography>
            </Box>
          )}
          {chatFilter.map((item, index) => (
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
export default Chat
