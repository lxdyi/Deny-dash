import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { CloudUpload as CloudUploadIcon } from "@mui/icons-material";
import UploadAdhkar from "../Components/UplaodAdhkar";
import AdhkarTable from "../Components/AdhkarTable";

const headCells = [
  { id: "Action", label: "" },
  { id: "number", label: "الرقم" },
  { id: "image", label: "الصورة" },
  { id: "id", label: "Id" },
];

const createData = (id, image, number) => ({ id, image, number });

const buttonStyles = {
  backgroundColor: "#03AA77",
  "&:hover": {
    backgroundColor: "#028a63",
  },
};

const EveningAdhkar = () => {
  const [rows, setRows] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const [loading, setLoading] = useState(true);

  const openOverlay = useCallback(() => setShowOverlay(true), []);
  const closeOverlay = useCallback(() => setShowOverlay(false), []);

  useEffect(() => {
    const fetchEveningAdhkarData = async () => {
      try {
        const response = await axios.get(
          "https://deen.somee.com/api/Dashboard/GetAllAthkarEvening"
        );
        const eveningAdhkarData = response.data.map((item) =>
          createData(item.id.toString(), item.file, item.num.toString())
        );
        setRows(eveningAdhkarData);
      } catch (error) {
        console.error("Error fetching Evening Adhkar data:", error);
        alert("Failed to fetch Evening Adhkar data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEveningAdhkarData();
  }, []);

  return (
    <>
      <div className="flex items-center justify-between px-10 py-4">
        <Button
          startIcon={<CloudUploadIcon />}
          variant="contained"
          onClick={openOverlay}
          sx={buttonStyles}
        >
          اضفات ذكر
        </Button>
        <h2 className="text-bold text-[30px]"> اذكار المساء</h2>
      </div>
      <div className="px-10 py-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <AdhkarTable rows={rows} headCells={headCells} type={"Evening"} />
        )}
      </div>
      {showOverlay && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-gray-800 bg-opacity-50 overflow-auto">
          <div className="flex items-center justify-center w-full h-full">
            <UploadAdhkar onClose={closeOverlay} type={"evening"} />
          </div>
        </div>
      )}
    </>
  );
};

export default EveningAdhkar;