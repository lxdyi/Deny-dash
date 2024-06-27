import { useState } from "react";

import UpdateAdhdhkarForm from "./UpdateAdhdhkarForm";
import IconButton from "@mui/material/IconButton";

import EditIcon from "@mui/icons-material/Edit";
const UpdateAdhkar = ({ id }) => {
  const [showForm, setShowForm] = useState(false);

  // Toggle form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <IconButton onClick={toggleForm}>
        <EditIcon style={{ color: "#03AA77" }} />
      </IconButton>
      {showForm && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-gray-800 bg-opacity-50 overflow-auto">
          <div className="flex h-fit justify-center w-full">
            <UpdateAdhdhkarForm id={id} onClose={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateAdhkar;
