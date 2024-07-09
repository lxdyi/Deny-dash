import { useState, useEffect } from "react";
import axios from "axios";
import Tables from "../Components/Table";
import UploadSurah from "../Components/UploadSurah";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
const headCells = [
  {
    id: "Actoin",
    label: "",
  },
  {
    id: "date",
    label: "تاريخ الرفع",
  },
  {
    id: "name",
    label: "الاسم",
  },
  {
    id: "ayat",
    label: "عدد الايات",
  },
  {
    id: "type",
    label: "النوع",
  },
  {
    id: "Video",
    label: "الفديو",
  },
  {
    id: "id",
    label: "ID",
  },
];

function createData(id, name, ayat, type, File, date) {
  return { id, name, ayat, type, File, date };
}

const Quran = () => {
  const [rows, setRows] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);

  const openOverlay = () => {
    setShowOverlay(true);
  };

  // Function to close the overlay
  const closeOverlay = () => {
    setShowOverlay(false);
  };
  useEffect(() => {
    const fetchQuranData = async () => {
      try {
        const response = await axios.get(
          "http://quranapp.somee.com/api/Dashboard/GetAllQuran"
        );
        const quranData = response.data.map((item) =>
          createData(
            item.id.toString(),
            item.name,
            item.ayatNum.toString(),
            item.type,
            item.file,
            item.date
          )
        );
        setRows(quranData);
      } catch (error) {
        console.error("Error fetching Quran data:", error);
      }
    };

    fetchQuranData();
  }, []);

  return (
    <>
      <div className="flex items-center justify-between px-10 py-4">
        <Button
          startIcon={<CloudUploadIcon />}
          variant="contained"
          onClick={() => openOverlay()}
          sx={{
            backgroundColor: "#03AA77",
            "&:hover": {
              backgroundColor: "#028a63",
            },
          }}
        >
          اضفات سورة
        </Button>
        <h2 className="text-bold text-[30px]"> الورد اليومي</h2>
      </div>

      <div className="px-10 py-4">
        <Tables
          rows={rows}
          headCells={headCells}
          video={true}
          baseUrl="https://deen.somee.com/files/"
        />
      </div>
      {showOverlay && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-gray-800 bg-opacity-50 overflow-auto">
          <div className="flex items-center justify-center w-full h-full">
            <UploadSurah onClose={closeOverlay} />
          </div>
        </div>
      )}
    </>
  );
};

export default Quran;
