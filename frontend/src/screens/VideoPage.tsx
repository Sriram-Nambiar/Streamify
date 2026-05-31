import { Appbar } from "@/components/Appbar";
import { VideoCard } from "@/components/VideoCard";
import axios from "axios";
import { use, useEffect, useState } from "react";
import { useSearchParams } from "react-router";


export function VideoPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
    const [recommendedVideos, setRecommendedVideos] = useState([]);
  const id = searchParams.get("id");
  useEffect(() => {
    
    axios.get("http://localhost:3000/videos/" + id).then((res) => {
      setVideoDetails(res.data);
      setIsLoading(false);
    });
  }, [id]);


  useEffect(() => {
    axios.get("http://localhost:3000/videos").then((res) => {
      // 1. Grab the array inside 'res.data.videos' instead of just 'res.data'
      const data = res.data.videos || []; 
      setRecommendedVideos(data);
    });
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
  <div style={{display:"flex", justifyContent:"space-between"}}>

    
    <div>
        {JSON.stringify(videoDetails)}
      <video src={videoDetails?.video.videourl} controls   />
    <div>
      {videoDetails?.username|| "Untitled"}
    </div>
    
    </div>
    <div>
        <div style={{width:"100vw"}}></div>
            {recommendedVideos.map((video: any) => (
              <VideoCard
              href={`/watch?id=${video.id}`}
                key={video.id}
                // 3. Point these to the correct names from your database
                imageUrl={video.thumbnail} 
                title={video.title || "Untitled"} 
                channelImage={video.user.profilePicture} 
                channelName={video.user.username} 
              />
            ))}
    </div>
   </div>
  );
}