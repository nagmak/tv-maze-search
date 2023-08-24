import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const DropdownMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [filterBy, setFilterBy] = useState('TV Shows');
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
      setAnchorEl(null);
      console.log(event.target.innerText) // => This logs menu item text.
      if (event.target.innerText) setFilterBy(event.target.innerText);
    };
  
    return (
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{ marginTop: '24px', height: '56px', backgroundColor: 'darkslategray', color: 'darksalmon'}}
          startIcon={<KeyboardArrowDownIcon />}
        >
          {filterBy}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>TV Shows</MenuItem>
          <MenuItem onClick={handleClose}>People</MenuItem>
        </Menu>
      </div>
    );
  }