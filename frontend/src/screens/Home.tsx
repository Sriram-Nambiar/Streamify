import { Appbar } from "../components/Appbar";
import {Sidebar} from "../components/Sidebar"
import { VideoCard } from "@/components/VideoCard";
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
  // 1. OUTERMOST CONTAINER: Stacks Appbar on top, and the rest below
  <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
    
    {/* 2. APPBAR: Spans the full width at the very top */}
    <Appbar />

    {/* 3. MIDDLE SECTION: Flex row holding Sidebar and Videos side-by-side */}
    <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
      
      {/* 4. SIDEBAR: Sits on the left. (Make sure your Sidebar component has a fixed width, e.g., width: "250px") */}
      <Sidebar />

      {/* 5. VIDEO AREA: 'flex: 1' makes it take up all remaining space on the right */}
      <div style={{ flex: 1, overflowY: "auto", backgroundColor: "#121212" }}>
        
        {/* Your Flex grid for the actual video cards */}
        <div style={{ display: "flex", flexWrap: "wrap", padding: "20px", gap: "15px" }}>
          {videos.map((video: any) => (
            <VideoCard
              href={`/watch?id=${video.id}`}
              key={video.id}
              imageUrl={video.thumbnail}
              title={video.title || "Untitled"}
              channelImage={video.user?.profilePicture}
            />
          ))}
        </div>

      </div>
      
    </div>
  </div>
);
}

