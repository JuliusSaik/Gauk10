import { DeleteRounded, DragHandleRounded } from "@mui/icons-material";
import { Box, Divider, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";

const AddFlashCard = () => {

  const [isVisible, setIsVisible] = useState(true);

  const handleDelete = () => {
    setIsVisible(false);
  };
  return (
    <>
      <div className="container mx-auto p-4">
        <Box className="border border-black border-6 bg-gray-800 rounded-lg">
          <div className="flex object-right h-auto flex-line justify-end p-2">
           
            <IconButton 
            aria-label="delete"
            onClick={handleDelete}>
              <DeleteRounded className="fill-current text-gray-200 hover:text-blue-500" />
            </IconButton>
          </div>

          <Divider sx={{ borderBottomWidth: 5 }} className="bg-gray-500" />

          <div className="flex items-center space-x-4 m-4 pt-4">
            <div className="flex-1">
              <TextField
                id="filled-basic"
                label="Enter question"
                variant="filled"
                className="w-full bg-gray-100 text-white p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="block text-sm text-gray-400 m-1">
                QUESTION
              </label>
            </div>

            <div className="flex-1">
              <TextField
                id="filled-basic"
                label="Enter answer"
                variant="filled"
                className="w-full bg-gray-100 text-white p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="block text-sm text-gray-400 m-1">ANSWER</label>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};

export default AddFlashCard;
