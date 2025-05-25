import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components";



const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>
        {/* navbar drawerWidth*/}
        <NavBar drawerWidth ={drawerWidth}/>

        {/* sidebar drawerWidth*/}
        <SideBar drawerWidth={drawerWidth}/>

        <Box 
        component='main'
        sx={{flexGrow:1, p: 3 }}
        >
          <Toolbar/>
            {/* toolbar */}

            {children}

        </Box>

    </Box>
  )
}
