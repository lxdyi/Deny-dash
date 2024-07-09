import React, { useRef, useEffect, useState } from "react";
import { IoMdPause, IoIosPlay } from "react-icons/io";
import { PiRepeatThin, PiRepeatOnceThin } from "react-icons/pi";
import { Divider } from "@mui/material";
const SurahVideo = ({ surah, onVideoEnd }) => {
  const videoBaseUrl = "http://quranapp.somee.com/files/";
  const [playing, setPlaying] = useState(true);
  const [loop, setLoop] = useState(false);
  const videoRef = useRef(null);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1.0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [surah.File]);

  const togglePlay = () => {
    setPlaying(!playing);
    if (videoRef.current) {
      if (!playing) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const toggleRepeat = () => {
    setLoop(!loop);
  };

  const toggleSpeed = () => {
    const newRate = playbackRate === 1.0 ? 2.0 : 1.0;
    setPlaybackRate(newRate);
    if (videoRef.current) {
      videoRef.current.playbackRate = newRate;
    }
  };

  const handleProgress = () => {
    if (videoRef.current) {
      const currentPlayed = videoRef.current.duration
        ? videoRef.current.currentTime / videoRef.current.duration
        : 0;
      if (!seeking) {
        setPlayed(currentPlayed);
      }
    }
  };

  const handleSeek = (e) => {
    if (videoRef.current) {
      const seekTime = e.target.value * videoRef.current.duration;
      setPlayed(parseFloat(e.target.value));
      videoRef.current.currentTime = seekTime;
    }
  };

  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const handleSeekMouseUp = (e) => {
    handleSeek(e);
    setSeeking(false);
  };

  return (
    <div className="w-full  mx-auto mt-8  px-5 ">
      <div className="flex w-full flex-col items-center">
        <div className="border-dashed w-[60%] border-[3px] border-[#E0E5F2] rounded-lg px-3">
          <video
            ref={videoRef}
            src={`${videoBaseUrl}${surah.File}`}
            className="w-full h-[400px]"
            loop={loop}
            onTimeUpdate={handleProgress}
            onEnded={onVideoEnd}
          />
        </div>
        <p className="text-right text-[#9D9D9D]  self-end mt-3 mr-36">{surah.date}</p>
        <div className="w-[60%] h-[1px] mt-3 bg-[#E3E3E3]"/>
        <div className="flex justify-center mt-4 ">
          <button onClick={toggleSpeed} className="mr-10">
            <span className="font-bold">
              {playbackRate === 1.0 ? "1x" : "2x"}
            </span>
          </button>
          <button
            onClick={togglePlay}
            className="w-[60px] h-[60px] mx-2 rounded-full bg-[#03AA77] flex items-center justify-center"
          >
            {playing ? (
              <IoMdPause size={30} color="white" />
            ) : (
              <IoIosPlay size={30} color="white" />
            )}
          </button>
          <button onClick={toggleRepeat} className="ml-10">
            {loop ? (
              <PiRepeatOnceThin size={30} title="Disable Repeat" />
            ) : (
              <PiRepeatThin size={30} title="Enable Repeat" />
            )}
          </button>
        </div>
        <div className="relative  w-full my-10 ">
          <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={isNaN(played) ? 0 : played}
            onMouseDown={handleSeekMouseDown}
            onChange={handleSeek}
            onMouseUp={handleSeekMouseUp}
            className="slider absolute bottom-0  w-[100%]  appearance-none bg-transparent h-[8px] rounded-full outline-none"
            style={{
              background: `linear-gradient(to right, #03AA77 0%, #03AA77 ${
                played * 100
              }%, #03AA7733 ${played * 100}%, #03AA7733 100%)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SurahVideo;
