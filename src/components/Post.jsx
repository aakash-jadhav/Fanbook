import React, { useState, useRef } from "react"
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Checkbox,
  Box,
  Menu,
  MenuItem,
} from "@mui/material"
import { Favorite, Share, MoreVert, FavoriteBorder } from "@mui/icons-material"
export default function Post({ name, date, img, text }) {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const displayMenu = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const removeRef = useRef(null)
  const remove = () => {
    removeRef.current.remove()
    handleClose()
  }
  const report = () => {
    alert("Post Reported")
  }
  return (
    <Box flex={4} p={2} ref={removeRef}>
      <Card>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "royalblue" }}>{name[0]}</Avatar>}
          action={
            <IconButton
              id="menu-button"
              aria-label="settings"
              aria-haspopup="true"
              sx={{ color: "gray" }}
              onClick={handleClick}
            >
              <MoreVert />
            </IconButton>
          }
          title={name}
          subheader={date}
        />
        <Menu
          id="menu"
          anchorEl={anchorEl}
          aria-labelledby="post"
          open={displayMenu}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "menu-button",
          }}
        >
          <MenuItem>Unfollow</MenuItem>
          <MenuItem onClick={() => report()}>Report</MenuItem>
          <MenuItem onClick={remove}>Delete</MenuItem>
        </Menu>
        <CardMedia component="img" height="1%" image={img} alt="Paella dish" />
        <CardContent>
          <Typography>{text}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton>
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  )
}
