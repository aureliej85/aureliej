import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import scrollTo from 'gatsby-plugin-smoothscroll';
import "./myDrawer.scss";


export default function MyDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer("right", false)}
      onKeyDown={toggleDrawer("right", false)}
    >
      <List>
        <ListItem><a href="#aboutMe" className='drawerLink'>A Propos</a></ListItem>
        <ListItem><a href="#services" className='drawerLink'>Services</a></ListItem>
        <ListItem><a href="#aboutMe" className='drawerLink'>Formation</a></ListItem>
        <ListItem><a href="#portfolio" className='drawerLink'>Projets</a></ListItem>
        <ListItem><a href="#blog" className='drawerLink'>Blog</a></ListItem>
        <ListItem><a href="#contact" className='drawerLink'>Contact</a></ListItem>  
      </List>
    </Box>
  );

  return (
    <div>
   
        <React.Fragment key={"right"}>
          <Button onClick={toggleDrawer("right", true)}>{<MenuIcon />}</Button>
          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            variant="temporary"
            ModalProps={{
            keepMounted: true,
            }}
          >
            {list("right")}
          </Drawer>
        </React.Fragment>
      
    </div>
  );
}