import IconButton from "@mui/material/IconButton";
import { Divider } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const typeMappings = {
  morning: "ائكار الصباح",
  evening: "اذكار المساء",
  sleeping: "ما قبل النوم",
};

const AdhdhkarPlay = ({ Adhdhkar, setSelectedAdh, type }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between px-3">
        <IconButton onClick={() => setSelectedAdh(null)}>
          <CloseRoundedIcon style={{ color: "#03AA77" }} />
        </IconButton>
        <h3 className="text-right font-[900] text-[22px] my-3">
          {typeMappings[type]}
        </h3>
      </div>
      <Divider />
      <div className="flex flex-col gap-4 items-center py-7">
        <div className="border-dashed w-[60%] border-[3px] border-[#E0E5F2] rounded-lg ">
          <img src={`http://quranapp.somee.com/files/${Adhdhkar.image}`} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AdhdhkarPlay;
