const Upload = () => {
  return (
    <div className="px-7 pt-8">
      <button className="px-10 text-white bg-[#03AA77] flex font-normal items-center py-[10px] rounded-lg gap-2 justify-start text-[14px]">
        اضافة مكان جديد
      </button>
      <div className="flex justify-end items-center w-full gap-4 mt-10">
        <div>
          <div className=" relative mr-3 mb-3">
            <img
              className=" absolute right-[-10px]"
              src="/src/assets/stare.png"
              alt=""
            />
            <h3 className=" text-right font-semibold text-[24px]">
              صورة الاذكار
            </h3>
          </div>
          <div className="p-5 pt-16 flex flex-col items-center gap-3 bg-white border-dashed border-[3px] border-[#E0E5F2] rounded-lg">
            <img
              className="w-10 h-10"
              src="/src/assets/upload.png"
              alt="upload"
            />
            <h6 className=" font-bold text-[18px] text-[#03AA77]">
              Upload Files
            </h6>
            <p className="text-[#8F9BBA] text-[12px]">
              PNG, JPG and GIF files are allowed
            </p>
          </div>
        </div>
        <div>
          <div className=" relative mr-3 mb-3">
            <img
              className=" absolute right-[-10px]"
              src="/src/assets/stare.png"
              alt=""
            />
            <h3 className=" text-right font-semibold text-[24px]">
              فيديو القرأن الكريم
            </h3>
          </div>
          <div className="p-5 pt-16 flex flex-col items-center gap-3 bg-white border-dashed border-[3px] border-[#E0E5F2] rounded-lg">
            <img
              className="w-10 h-10"
              src="/src/assets/upload.png"
              alt="upload"
            />
            <h6 className=" font-bold text-[18px] text-[#03AA77]">
              Upload Files
            </h6>
            <p className="text-[#8F9BBA] text-[12px]">
              PNG, JPG and GIF files are allowed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
