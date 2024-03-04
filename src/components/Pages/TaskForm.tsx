import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { TaskItem } from "../Molecules/TaskItem";

interface TaskFormProps {
  addTask: (newTask: TaskItem) => void;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Function to check if all input fields are filled
  const checkInputs = () => {
    if (title.trim() && description.trim() && dueDate.trim()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim() || !dueDate.trim()) {
      return;
    }
    const newTask: TaskItem = {
      id: Math.random().toString(),
      title: title,
      description: description,
      completed: false,
    };
    addTask(newTask);
    setTitle("");
    setDescription("");
    setDueDate("");
    setIsButtonDisabled(true); // Disable the button after adding the task
  };

  // Call checkInputs whenever input values change
  React.useEffect(() => {
    checkInputs();
  }, [title, description, dueDate]);

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <TextField
        label="Task title"
        variant="filled"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        sx={{ marginBottom: "1rem" }}
        required
      />
      <TextField
        label="Task description"
        variant="filled"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        multiline
        rows={4}
        fullWidth
        sx={{ marginBottom: "1rem" }}
        required
      />
      <TextField
        label="Due Date"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        fullWidth
        sx={{ marginBottom: "1rem" }}
        required
      />
      <Button
        type="submit"
        variant="contained"
        style={{
          backgroundColor: "#365486",
          color: "#fff",
          borderRadius: "5px",
          textTransform: "none",
        }}
        disabled={isButtonDisabled} // Set disabled based on state
      >
        Add Task
      </Button>
    </form>
  );
};

export default TaskForm;
