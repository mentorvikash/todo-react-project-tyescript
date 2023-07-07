import React, { useState } from "react";
import "./App.css";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Cards from "./components/cards";
import { TextareaAutosize } from "@mui/material";

interface Itodo {
  title: string;
  description: string;
}

function App() {
  const [description, setDescription] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const [todos, setTodos] = useState<Itodo[]>([
    { title: "name", description: "tasktodo" },
  ]);

  const handleSubmit = () => {
    const newTodo = {
      title: title,
      description: description,
    };
    setTodos([...todos, newTodo]);
    setDescription("");
    setTitle("");
  };

  const handleclose = (index1: number) => {
    setTodos(todos.filter((todo, index) => index !== index1));
  };

  return (
    <div className="App">
      <Stack spacing={4}>
        <Stack spacing={2} width={500}>
          <Typography variant="h1" fontSize={"24px"}>
            <b>Todo List</b>
          </Typography>

          <TextField
            aria-label="title field"
            label="todo Title"
            value={title}
            name="title"
            onChange={(event) => setTitle(event.target.value)}
          />

          <TextareaAutosize
            aria-label="description box"
            minRows={5}
            placeholder="Enter description"
            value={description}
            name="description"
            style={{ border: "1px solid gray", borderRadius: "5px", padding: "5px" }}
            onChange={(event) => setDescription(event.target.value)}
          />

          <Button
            variant="contained"
            sx={{ width: "200px" }}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </Stack>
        <Stack
          direction={"row"}
          gap={2}
          justifyContent={"start"}
          flexWrap="wrap"
        >
          {todos.map((todo, index) => (
            <Box key={index}>
              <Cards todo={todo} handleclose={handleclose} index={index} />
            </Box>
          ))}
        </Stack>
      </Stack>
    </div>
  );
}

export default App;
