import '../css/slidebar.css'
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import { IconButton,Avatar } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

const Slidebar = () => {
  return (
    <div className='slidebar'>
        <div className='slidebar__header'>
          <Avatar src = 'https://heroichollywood.com/wp-content/uploads/2018/12/Into_The_Spider_Verse_Peter_Parker_Spider_Man.jpg'/>
          <div className="slidebar__headerRight">
          <IconButton>
           <DataSaverOffIcon />
          </IconButton>
          <IconButton>
           <ChatBubbleOutlineIcon />
          </IconButton>
          <IconButton>
           <MoreVertIcon />
          </IconButton>
          </div>
        </div>

        <div className="sliderbar__search">
          <div className="sliderbar__searchContainer">
          <input type="text" placeholder='Search or start a new chat' />
          <SearchIcon />
          </div>
        </div>
    </div>
  )
}

export default Slidebar