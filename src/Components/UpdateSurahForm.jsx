import { useState, useEffect } from "react";
import { Divider } from "@mui/material";
import { IoCloudUploadOutline } from "react-icons/io5";

const baseUrl = "https://deen.somee.com/files/";

const UpdateSurahForm = ({ id, onClose }) => {
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [name, setName] = useState("");
  const [ayatNum, setAyatNum] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://deen.somee.com/api/Dashboard/GetQuranById?QuranId=${id}`
        );
        const data = await response.json();
        setName(data.name);
        setAyatNum(data.ayatNum);
        setType(data.type === "Makiya" ? "مكية" : "مدنية");
        setFileURL(baseUrl + data.file);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileURL(URL.createObjectURL(selectedFile));
    }
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !ayatNum || !type) {
      alert("جميع الحقول مطلوبة");
      return;
    }

    const formData = new FormData();
    formData.append("File", file);
    formData.append("Name", name);
    formData.append("AyatNum", ayatNum);
    formData.append("Type", type === "مكية" ? 0 : type === "مدنية" ? 1 : "");

    try {
      const response = await fetch(
        `https://deen.somee.com/api/Dashboard/UpdateQuran?QuranId=${id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (response.ok) {
        alert("File updated successfully");
        onClose();
      } else {
        alert("File update failed");
      }
    } catch (error) {
      console.error("Error updating file:", error);
      alert("Error updating file");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      setFileURL(URL.createObjectURL(droppedFile));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="py-5 bg-white rounded-lg w-[500px]">
      <h3 className="px-7 pb-5 font-bold text-[22px] text-right">
        تحديث الورد اليومي
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
              <video controls className="max-w-full h-auto">
                <source src={fileURL} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
            onChange={handleInputChange(setName)}
            placeholder="اكتب اسم الورد اليومي هنا"
            className="p-2 border rounded px-5"
          />
          <input
            type="text"
            dir="rtl"
            value={ayatNum}
            onChange={handleInputChange(setAyatNum)}
            placeholder="اكتب عدد الآية هنا"
            className="p-2 border rounded px-5"
          />
          <select
            dir="rtl"
            value={type}
            onChange={handleInputChange(setType)}
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

export default UpdateSurahForm;
