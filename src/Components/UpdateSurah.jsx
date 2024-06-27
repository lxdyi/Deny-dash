import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import UpdateSurahForm from "./UpdateSurahForm"; // Ensure correct path
import EditIcon from "@mui/icons-material/Edit";
const UpdateSurah = ({ id }) => {
  const [showForm, setShowForm] = useState(false); // State to control form visibility
  const toggleForm = (e) => {
    e.stopPropagation();
    setShowForm(!showForm);
  };

  return (
    <div>
      <IconButton onClick={toggleForm}>
        <EditIcon style={{ color: "#03AA77" }} />
      </IconButton>

      {showForm && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-gray-800 bg-opacity-50 overflow-auto">
          <div className="flex h-fit justify-center w-full ">
            <UpdateSurahForm
              id={id}
              onClose={(e) => {
                setShowForm(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateSurah;
