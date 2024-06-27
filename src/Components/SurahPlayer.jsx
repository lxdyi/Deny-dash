import IconButton from "@mui/material/IconButton";
import SurahVideo from "./SurahVideo";
import { Divider } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
const SurahPlayer = ({ surah, setSelectedSurah }) => {
  if (!surah || !surah.File) {
    return <div>No surah data available</div>;
  }

  return (
    <div className=" w-full">
      <div className="flex items-center justify-between px-3">
        <IconButton onClick={() => setSelectedSurah(null)}>
          <CloseRoundedIcon style={{ color: "#03AA77" }} />
        </IconButton>
        <h3 className="text-right font-[900] text-[22px] my-3">{surah.name}</h3>
      </div>

      <Divider />
      <SurahVideo videoFile={surah.File} surah={surah} onVideoEnd={() => {}} />
    </div>
  );
};

export default SurahPlayer;
