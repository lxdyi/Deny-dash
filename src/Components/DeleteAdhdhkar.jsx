import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const DeleteAdhdhkar = ({ id, onDeleteSuccess }) => {
  const handleDelete = async (e) => {
    e.stopPropagation();
    try {
      const response = await fetch(
        `http://quranapp.somee.com/api/Dashboard/DeleteAthkar?AthkarId=${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Athkar deleted successfully");
        if (onDeleteSuccess) onDeleteSuccess(id); // Call onDeleteSuccess prop function if provided
      } else {
        alert("Failed to delete Athkar");
      }
    } catch (error) {
      console.error("Error deleting Athkar:", error);
      alert("Error deleting Athkar");
    }
  };

  return (
    <IconButton onClick={handleDelete}>
      <DeleteIcon style={{ color: "#F44242" }} />
    </IconButton>
  );
};

export default DeleteAdhdhkar;
