
import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"


export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        GitHub's “Hello World” tutorial teaches you essentials, where you create your own repository and learn GitHub's pull request workflow for creating and reviewing code.
      </Typography> */}

      {/* NothinSelected */}
      {/* <NothingSelectedView/> */}
    
      {/* NoteView */}
      <NoteView/>
    </JournalLayout>
  )
}
