import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';

export default function Users({listUsers}) {
		const listItems = [];

		listUsers.forEach((user) => {
				listItems.push(
					<ListItem key={user} disablePadding>
           <ListItemButton>
             <ListItemIcon>
               <PersonIcon />
             </ListItemIcon>
             <ListItemText primary={user} />
           </ListItemButton>
         </ListItem>
				)
      });

    return(
          <List>
          {listItems}
         </List>
    );
}
