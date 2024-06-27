const VideoPlayer = ({ url }) => {
  return (
    <video id={`video-${url}`} className="w-20 h-20">
      <source src={url} type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;
