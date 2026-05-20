import axios from "axios";
export function Uploads(){
    async function uploads(){
        
            await axios.post("http://localhost:3000/videos", {
            videoUrl: (document.getElementById("videoUrl") as HTMLInputElement).value,
            thumbnail: (document.getElementById("thumbnailUrl") as HTMLInputElement).value
        },{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        
        }).then((res)=>{   
                     console.log(res.data);
                     window.location = "/";
        }
        
    )}
    return (    
      <div>
        <input id="videoUrl" type="text" placeholder="Enter video URL" />
        <input id="thumbnailUrl" type="text" placeholder="Enter thumbnail URL" />
        <button onClick={uploads}>Upload</button>
      </div>
    )
}