import { Appbar } from "@/components/Appbar";
import axios from "axios";
import { useEffect, useState } from "react";

export function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/videos").then((res) => {
      // 1. Grab the array inside 'res.data.videos' instead of just 'res.data'
      const data = res.data.videos || []; 
      setVideos(data);
    });
  }, []);

  return (
    // 2. Added flexWrap so the videos wrap to the next line instead of squishing
    <div style={{ display: "flex", padding: 0, flexWrap: "wrap", margin: 0 }}>
       <div style={{width:"100vw"}}><Appbar /></div>
      {videos.map((video: any) => (
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
  );
}

function VideoCard({imageUrl, title, channelImage, channelName, href}: {imageUrl: string, title: string, channelImage: string, channelName: string, href?: string}) {
  return (
   
    <div style={{ maxWidth: 300, borderRadius: 30, margin: 20, padding: 10 }} onClick={()=> window.location=href}>
      <img src={imageUrl} style={{ display: "block", width: "100%",border: "1px solid #171515" }} />
      <div style={{ marginTop: 10 , border: "1px solid #171515"}}>{title}</div>
      <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
        <img src={channelImage} style={{ width: 30, height: 30, borderRadius: "50%", marginRight: 10 }} />
        <span>{channelName}</span>
      </div>
    </div>
  );
}