import { useState, useCallback, useEffect } from "react";
import { Divider } from "@mui/material";
import { IoCloudUploadOutline } from "react-icons/io5";

const baseUrl = "http://quranapp.somee.com/files/";

const UpdateAdhdhkarForm = ({ id, onClose }) => {
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [num, setNum] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://quranapp.somee.com/api/Dashboard/GetAthkarById?AthkarId=${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setNum(data.num);
          setFileURL(`${baseUrl}${data.file}`);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleFileChange = useCallback((e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileURL(URL.createObjectURL(selectedFile));
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      setFileURL(URL.createObjectURL(droppedFile));
    }
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fileURL || !num) {
      alert("Please provide both a file and a number.");
      return;
    }

    const formData = new FormData();
    if (file) {
      formData.append("File", file);
    } else {
      // If the file is not changed, use the existing file URL
      formData.append("FileURL", fileURL);
    }
    formData.append("Num", num);

    try {
      const response = await fetch(
        `http://quranapp.somee.com/api/Dashboard/UpdateAthkar?AthkarId=${id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (response.ok) {
        alert("File updated successfully");
        onClose();
      } else {
        const errorData = await response.json();
        alert(
          `File update failed: ${errorData.message || response.statusText}`
        );
      }
    } catch (error) {
      console.error("Error updating file:", error);
      alert("Error updating file");
    }
  };

  return (
    <div className="py-5 bg-white rounded-lg w-[500px]">
      <h3 className="px-7 pb-5 font-bold text-[22px] text-right">
        تحديث الأذكار
      </h3>
      <Divider />
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="px-5 py-7 flex flex-col gap-4">
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => document.getElementById("fileInput").click()}
            className="rounded border-dashed border-[2px] border-[#E0E5F2] py-12 gap-3 flex flex-col justify-center items-center cursor-pointer"
          >
            {fileURL ? (
              <img
                src={fileURL}
                alt="preview"
                className="max-w-full h-auto"
                style={{ border: "none" }}
              />
            ) : (
              <>
                <IoCloudUploadOutline size={25} />
                <p className="font-bold text-[#484848]">
                  اضغط او اسحب الملف الي هنا
                </p>
              </>
            )}
          </div>
          <input
            id="fileInput"
            type="file"
            onChange={handleFileChange}
            className="hidden"
          />
          <p dir="rtl" className="text-right text-[#9D9D9D]">
            الملف يستقبل PNG - JPG
          </p>
          <input
            dir="rtl"
            type="number"
            value={num}
            onChange={(e) => setNum(e.target.value)}
            placeholder="رقم"
            className="p-2 border rounded px-5"
          />
        </div>
        <Divider />
        <div className="flex gap-5 self-end px-5">
          <button
            type="button"
            onClick={onClose}
            className="px-7 py-2 border-solid border-[1px] border-[#E0E5F2] rounded-lg"
          >
            الغاء
          </button>
          <button
            type="submit"
            className="px-7 py-2 bg-[#1677FF] text-white rounded-lg"
          >
            موافق
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateAdhdhkarForm;
