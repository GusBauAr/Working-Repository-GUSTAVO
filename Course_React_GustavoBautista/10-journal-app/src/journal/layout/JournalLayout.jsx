import { Box } from "@mui/material"
import { NavBar } from "../components";



const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>
        {/* navbar drawerWidth*/}
        <NavBar drawerWidth ={drawerWidth}/>

        {/* sidebar drawerWidth*/}

        <Box 
        component='main'
        sx={{flexGrow:1, p: 3 }}
        >
            {/* toolbar */}

            {children}

        </Box>

    </Box>
  )
}
