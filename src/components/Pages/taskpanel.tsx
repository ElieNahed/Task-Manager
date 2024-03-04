import React, { useState } from "react";
import { Box, CircularProgress, TextField, Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Alert from "../Molecules/Alert";

interface TaskPanelProps {
  loading: boolean;
  tasks: Task[];
  handleDeleteTask: (taskId: string) => void;
  handleToggleCompletion: (taskId: string, completed: boolean) => void; // Updated handleToggleCompletion function
  value: number; // Adding the value prop
}

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

const TaskPanel: React.FC<TaskPanelProps> = ({
  loading,
  tasks,
  handleDeleteTask,
  handleToggleCompletion,
  value, // Value prop passed down
}) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmInput, setConfirmInput] = useState("");
  const [completedTasks, setCompletedTasks] = useState<string[]>([]); // Store completed task ids

  const handleDeleteConfirmation = () => {
    setShowConfirmation(true);
  };

  const handleConfirmSubmit = () => {
    if (confirmInput.trim() === "confirm") {
      handleDeleteTask(tasks[0].id);
    }
    setShowConfirmation(false);
    setConfirmInput("");
  };

  // Function to toggle completion status and manage completed tasks array
  const handleToggleCompletionStatus = (taskId: string, completed: boolean) => {
    handleToggleCompletion(taskId, completed);
    if (completed) {
      setCompletedTasks((prevCompletedTasks) => [
        ...prevCompletedTasks,
        taskId,
      ]);
    } else {
      setCompletedTasks((prevCompletedTasks) =>
        prevCompletedTasks.filter((id) => id !== taskId)
      );
    }
  };

  return (
    <Box
      sx={{
        "& > div": {
          marginTop: "10px",
          padding: "10px",
          width: "300px",
          height: "200px",
          backgroundColor: "#DCF2F1", // Light teal background color
        },
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
        "@media (max-width: 1244px)": {
          "& > div": {
            width: "250px",
            height: "150px",
          },
        },
        "@media (max-width: 749px)": {
          "& > div": {
            width: "200px",
            height: "150px",
          },
        },
      }}
    >
      {loading ? (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-25%, -25%)",
          }}
        >
          <CircularProgress
            style={{
              color: "#0F1035", // Teal color for progress spinner
            }}
          />
        </Box>
      ) : (
        <>
          {tasks.length === 0 ? (
            <Box sx={{ textAlign: "center" }}>
              <Alert text="No Tasks!" />
            </Box>
          ) : (
            <>
              {tasks.map((task: Task) => (
                <div
                  key={task.id}
                  className="border-2 border-[#7FC7D9] bg-[#AFEEEE] hover:shadow-[3px_5px_10px_5px_rgba(0,0,0,0.3)] flex flex-col"
                >
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: "#365486" }}
                  >
                    {task.title}
                  </h3>
                  <p
                    className="text-base font-extralight max-h-[100px] overflow-x-auto"
                    style={{ color: "#0F1035" }}
                  >
                    {task.description}
                  </p>
                  <div className="mt-auto flex justify-around">
                    {/* Render the "Completed" button only if the task is in the Active tab */}
                    {value === 0 && (
                      <label className="checkbox-container">
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={
                            () =>
                              handleToggleCompletionStatus(
                                task.id,
                                !task.completed
                              ) // Toggle completion status
                          }
                          className="checkbox-input"
                        />
                        <span className="checkmark"></span>
                        <span
                          className="checkbox-label"
                          style={{ color: "#365486" }}
                        >
                          Completed
                        </span>
                      </label>
                    )}
                    {/* Render the "Completed" button also if task is in Completed tab */}
                    {value === 1 && (
                      <label className="checkbox-container">
                        <input
                          type="checkbox"
                          checked={completedTasks.includes(task.id)}
                          onChange={
                            () =>
                              handleToggleCompletionStatus(
                                task.id,
                                !task.completed
                              ) // Toggle completion status
                          }
                          className="checkbox-input"
                        />
                        <span className="checkmark"></span>
                        <span
                          className="checkbox-label"
                          style={{ color: "#365486" }}
                        >
                          Completed
                        </span>
                      </label>
                    )}
                    <button
                      type="button"
                      onClick={handleDeleteConfirmation}
                      className="delete-button"
                    >
                      <DeleteForeverIcon style={{ color: "red" }} />
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </>
      )}
      {/* Confirmation popup */}
      {showConfirmation && (
        <div className="confirmation-popup">
          <TextField
            label="Type 'confirm' to delete"
            variant="outlined"
            value={confirmInput}
            onChange={(e) => setConfirmInput(e.target.value)}
            sx={{ marginBottom: "1rem" }}
          />
          <Button
            variant="contained"
            color="error"
            onClick={handleConfirmSubmit}
          >
            Confirm
          </Button>
        </div>
      )}
    </Box>
  );
};

export default TaskPanel;
