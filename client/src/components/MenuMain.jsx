import { Box, Button} from "@mui/material";

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import AddRoadRoundedIcon from '@mui/icons-material/AddRoadRounded';
import { pink } from '@mui/material/colors';


function MenuMain() {
  return (
    <div style={{ color: "white",marginLeft:350,marginTop:250 ,display:"flex", flexDirection:'row', gap: 5}}>
      <Box sx={{ backgroundColor: "white", maxWidth: 300,minWidth:300, borderRadius: 3, display:'flex',flexDirection:'column' }}>
        <Button sx={{color:pink[400]}}>
          <AddRoadRoundedIcon sx={{ fontSize: 120 }}></AddRoadRoundedIcon>
          Registrar materias
        </Button>
      </Box>
      <Box sx={{ backgroundColor: "white", maxWidth: 300, minWidth:300,borderRadius: 3 }}>
        <Button sx={{color:pink[400]}}>
          <AltRouteIcon sx={{ fontSize: 120 }}></AltRouteIcon>
          Visualizar Roadmap
        </Button>
      </Box>
      <Box sx={{ backgroundColor: "white", maxWidth: 300,minWidth:300, borderRadius: 3 }}>
        <Button sx={{color:pink[400]}}>
          <ExitToAppIcon sx={{fontSize:120}}></ExitToAppIcon>
          Cerrar sesion         
        </Button>
      </Box>
    </div>
  );
}

export default MenuMain;
