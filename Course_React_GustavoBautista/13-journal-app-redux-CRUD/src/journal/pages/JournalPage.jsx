
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"


export const JournalPage = () => {

  const dispatch = useDispatch();

  const onClickNewNote = ( ) =>{
    dispatch(startNewNote());

  }

  return (
    <JournalLayout>
      {/* <Typography>
        GitHub's “Hello World” tutorial teaches you essentials, where you create your own repository and learn GitHub's pull request workflow for creating and reviewing code.
      </Typography> */}

      {/* NothinSelected */}
      {/* <NothingSelectedView/> */}
    
      {/* NoteView */}
      <NoteView/>

      <IconButton
        onClick={onClickNewNote}
        size="large"
        sx={{
          color:'white',
          backgroundColor:'error.main',
          ':hover':{backgroundColor:'error.main', opacity: 0.9},
          position:'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30}}/>

      </IconButton>
    </JournalLayout>
  )
}
