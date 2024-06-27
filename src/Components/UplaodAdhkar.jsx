import { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Divider } from "@mui/material";
import { IoCloudUploadOutline } from "react-icons/io5";

const UploadAdhkar = ({ onClose, type }) => {
  const [fileData, setFileData] = useState({ file: null, fileURL: null });
  const [num, setNum] = useState("");

  const handleFileChange = useCallback((e) => {
    const selectedFile = e.target.files[0];
    setFileData({
      file: selectedFile,
      fileURL: URL.createObjectURL(selectedFile),
    });
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFileData({
      file: droppedFile,
      fileURL: URL.createObjectURL(droppedFile),
    });
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  const getApiUrl = (type) => {
    switch (type) {
      case "morning":
        return "https://deen.somee.com/api/Dashboard/AddAthkarMorning";
      case "evening":
        return "https://deen.somee.com/api/Dashboard/AddAthkarEvening";
      case "sleeping":
        return "https://deen.somee.com/api/Dashboard/AddAthkarSleeping";
      default:
        return "https://deen.somee.com/api/Dashboard/AddAthkarMorning";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("File", fileData.file);
    formData.append("Num", num);

    const apiUrl = getApiUrl(type);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("File uploaded successfully");
        onClose();
      } else {
        alert("File upload failed");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file");
    }
  };

  return (
    <div className="py-5 bg-white rounded-lg w-[500px]">
      <h3 className="px-7 pb-5 font-bold text-[22px] text-right">
        تحميل الأذكار
      </h3>
      <Divider />
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="px-5 py-7 flex flex-col gap-4">
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => document.getElementById("fileInput").click()}
            className="rounded border-dashed border-[2px] border-[#E0E5F2] py-12 gap-3 flex flex-col justify-center items-center cursor-pointer"
            aria-label="Upload file"
          >
            {fileData.file ? (
              fileData.file.type.startsWith("image/") ? (
                <img
                  src={fileData.fileURL}
                  alt="preview"
                  className="max-w-full h-auto"
                  style={{ border: "none" }}
                />
              ) : fileData.file.type.startsWith("video/") ? (
                <video controls className="max-w-full h-auto">
                  <source src={fileData.fileURL} type={fileData.file.type} />
                  Your browser does not support the video tag.
                </video>
              ) : null
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
            الملف يستقبل Mpc4 - PNG - JBJ
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

UploadAdhkar.propTypes = {
  onClose: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["morning", "evening", "sleeping"]).isRequired,
};

export default UploadAdhkar;
