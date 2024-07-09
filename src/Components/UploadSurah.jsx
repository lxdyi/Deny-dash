import { useState } from "react";
import { Divider } from "@mui/material";
import { IoCloudUploadOutline } from "react-icons/io5";

const UploadSurah = ({ onClose }) => {
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null); // State to store file URL
  const [name, setName] = useState("");
  const [ayatNum, setAyatNum] = useState(""); // State to store AyatNum
  const [type, setType] = useState(""); // State to store Type

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileURL(URL.createObjectURL(selectedFile)); // Create URL for the selected file
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAyatNumChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setAyatNum(value);
    }
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!file || !name || !ayatNum || !type) {
      alert("جميع الحقول مطلوبة");
      return;
    }

    const formData = new FormData();
    formData.append("File", file);
    formData.append("Name", name);
    formData.append("AyatNum", ayatNum);

    // Map type values
    const mappedType = type === "مكية" ? 0 : type === "مدنية" ? 1 : "";
    formData.append("Type", mappedType);

    try {
      console.log("Starting file upload..."); // Log start time
      const startTime = Date.now();

      const response = await fetch(
        "http://quranapp.somee.com/api/Dashboard/AddQuran",
        {
          method: "POST",
          body: formData,
        }
      );

      const endTime = Date.now();
      console.log(`File upload completed in ${endTime - startTime} ms`); // Log end time

      const responseData = await response.json(); // Parse response data
      console.log("Response data:", responseData); // Log response data

      if (response.ok) {
        alert("File uploaded successfully");
        onClose(); // Close the overlay on successful upload
      } else {
        alert("File upload failed");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
    setFileURL(URL.createObjectURL(droppedFile)); // Create URL for the dropped file
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="py-5 bg-white rounded-lg w-[500px]">
      <h3 className="px-7 pb-5 font-bold text-[22px] text-right">
        الورد اليومي
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
            {file ? (
              file.type.startsWith("image/") ? (
                <img
                  src={fileURL}
                  alt="preview"
                  className="max-w-full h-auto"
                  style={{ border: "none" }} // Ensure no border around the image
                />
              ) : file.type.startsWith("video/") ? (
                <video controls className="max-w-full h-auto">
                  <source src={fileURL} type={file.type} />
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
            type="text"
            dir="rtl"
            value={name}
            onChange={handleNameChange}
            placeholder="اكتب اسم الورد اليومي هنا"
            className="p-2 border rounded px-5"
          />
          <input
            type="text"
            dir="rtl"
            value={ayatNum}
            onChange={handleAyatNumChange}
            placeholder="اكتب رقم الآية هنا"
            className="p-2 border rounded px-5"
          />
          <select
            dir="rtl"
            value={type}
            onChange={handleTypeChange}
            className="p-2 border rounded px-5 custom-select"
          >
            <option value="">اختر نوع الملف</option>
            <option value="مكية">مكية</option>
            <option value="مدنية">مدنية</option>
          </select>
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

export default UploadSurah;
