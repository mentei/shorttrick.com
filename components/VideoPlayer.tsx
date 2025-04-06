interface VideoProps {
    title: string;
    url: string;
  }
  
  const VideoPlayer = ({ title, url }: VideoProps) => {
    return (
      <div className="rounded-xl overflow-hidden shadow-lg border">
        <iframe
          className="w-full h-64"
          src={url}
          title={title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className="p-4 text-center font-medium">{title}</div>
      </div>
    );
  };
  
  export default VideoPlayer;
  