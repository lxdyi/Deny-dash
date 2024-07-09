import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const DeleteSurah = ({ id, onDeleteSuccess }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://quranapp.somee.com/api/Dashboard/DeleteQuran?QuranId=${id}`, // Changed AthkarId to QuranId
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Quran deleted successfully"); // Updated alert message
        if (onDeleteSuccess) onDeleteSuccess(id);
      } else {
        alert("Failed to delete Quran"); // Updated alert message
      }
    } catch (error) {
      console.error("Error deleting Quran:", error); // Updated error message
      alert("Error deleting Quran"); // Updated alert message
    }
  };

  return (
    <IconButton onClick={handleDelete}>
      <DeleteIcon style={{ color: "#F44242" }} />
    </IconButton>
  );
};

export default DeleteSurah;
