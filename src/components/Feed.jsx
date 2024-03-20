import {
  Box,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Checkbox,
} from "@mui/material"
import React from "react"
import { Favorite, Share, MoreVert, FavoriteBorder } from "@mui/icons-material"
import { Post } from "./index"
export default function Feed() {
  const feedData = [
    {
      id: 1,
      name: "Christian Hamilton",
      date: "September 13, 2014",
      img: "https://images.pexels.com/photos/267355/pexels-photo-267355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "fight strength breath heart such whale parent machinery section step column question whenever tomorrow main street captured drive zero city who deep pull general",
    },
    {
      id: 2,
      name: "Katie Owens",
      date: "August 7, 2014",
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "potatoes nearly cool up president willing disease out kind gate sent trouble support handsome rocky made section tropical center zoo supply teacher without frozen",
    },
    {
      id: 3,
      name: "John Smith",
      date: "May 1, 2015",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "house tree cat dog run fast quick brown fox jumps lazy over sleeping dog",
    },
    {
      id: 4,
      name: "Jane Doe",
      date: "December 25, 2016",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "hello world lorem ipsum color blue red green yellow orange purple pink black white",
    },
    {
      id: 5,
      name: "Bob Johnson",
      date: "March 2, 2018",
      img: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor",
    },
    {
      id: 6,
      name: "Alice Cooper",
      date: "January 1, 2020",
      img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    },
  ]
  return (
    <Box flex={4} p={2}>
      {feedData.map((item) => (
        <Post
          key={item.id}
          name={item.name}
          date={item.date}
          img={item.img}
          text={item.text}
        />
      ))}
    </Box>
  )
}
