import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

interface Itodo {
  todo: { title: string; description: string };
  handleclose: (index: number) => void;
  index: number;
}

export default function Cards(props: Itodo) {
  const { handleclose, index, todo } = props;
  return (
    <Card sx={{ minWidth: 200, maxWidth: 345, bgcolor: "lightyellow", border: "1px solid" }}>
      <Box textAlign={"end"}>
        <IconButton color="inherit" onClick={() => handleclose(index)}>
          <Close />{" "}
        </IconButton>
      </Box>
      <CardActionArea>
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {todo.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {todo.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
