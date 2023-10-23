import { useState } from "react";

import {Typography, Box, Drawer, Divider, Toolbar, List, ListItem, ListItemText, ListItemIcon, ListItemButton} from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddCardIcon from '@mui/icons-material/AddCard';
import MyAccountView from "./MyAccountView";
import IsLogin from "./LoginCheckComponent";

const drawerWidth = 240;

export function UserPageView() {

  const drawerListItem = [
    {
      key : "myAccount",
      listText : "내 정보",
      icon : <AssignmentIndIcon/>,
      child : <MyAccountView/>
    },
    {
      key : "coin",
      listText : "내 코인",
      icon : <MonetizationOnIcon/>,
      child : <MyAccountView/>
    },
    {
      key : "shoppingList",
      listText : "구매 내역",
      icon : <AddShoppingCartIcon/>,
      child : <MyAccountView/>
    },
    {
      key : "payment",
      listText : "결제수단",
      icon : <AddCardIcon/>,
      child : <MyAccountView/>
    },
  ];

  const [drawerIndex, setDrawerIndex] = useState(0);

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List component="nav">
            {
              drawerListItem.map((item, idx)=>{

                return(
                  <ListItem key={item.key} disablePadding>
                    <ListItemButton 
                      selected={idx!==drawerIndex}
                      onClick={()=>{setDrawerIndex(idx); console.log(idx)}}
                      
                      sx={{
                        backgroundColor:"lightgrey",
                        opacity: [0.9, 0.8, 0.7],
                      }}
                    >
                      <ListItemIcon >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.listText} />
                    </ListItemButton>
                  </ListItem> 
                );
              })
            }
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <IsLogin>
          {drawerListItem[drawerIndex].child}
        </IsLogin>
      </Box>
    </Box>
  );
}

