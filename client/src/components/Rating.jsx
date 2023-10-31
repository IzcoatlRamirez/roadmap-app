
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box } from '@mui/material';
import { pink } from '@mui/material/colors';

function Rating() {
  return (
    <Box sx={{display:'flex',flexDirection:'row'}} >
        <FavoriteIcon sx={{color:pink['A200']}}></FavoriteIcon>
        <FavoriteIcon sx={{color:pink['A200']}}></FavoriteIcon>
        <FavoriteIcon sx={{color:pink['A200']}}></FavoriteIcon>
        <FavoriteIcon sx={{color:pink['A200']}}></FavoriteIcon>
        <FavoriteIcon sx={{color:pink['A200']}}></FavoriteIcon>
    </Box>
  )
}

export default Rating