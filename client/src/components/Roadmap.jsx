import React from 'react'
import Semestre from './Semestre';
import { Typography,Box } from '@mui/material';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { orange,purple,blue} from '@mui/material/colors';

function Roadmap({ roadmap }) {
    return (
      <div>
        {roadmap.map((semestre, index) => (
          <div key={index}>
            <Box sx={{display:'flex',flexDirection:'row'}}>
            <div style={{backgroundColor:orange['A400'], minWidth:175,maxWidth:175,marginTop:10}}></div>
            <Typography sx={{mt:2}}variant='h6' color={'white'}></Typography>
            </Box>
            <Box sx={{ml:7}}>
                <Semestre materias={semestre} />
            </Box>
          </div>
        ))}
      </div>
    );
  }

export default Roadmap