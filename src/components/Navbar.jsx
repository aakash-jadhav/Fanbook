import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material"
import { FacebookRounded, Mail, Notifications } from "@mui/icons-material"
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
})
import { useState } from "react"

const Search = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,

  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}))
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}))
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar color={"text.primary"}>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          Fanbook
        </Typography>
        <FacebookRounded sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search" fullWidth />
        </Search>

        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail color="white" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications color="white" />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
            onClick={() => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={() => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo"
        aria-labelledby="demo"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My Account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
