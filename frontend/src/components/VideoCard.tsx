export function VideoCard({imageUrl, title, channelImage, channelName, href}: {imageUrl: string, title: string, channelImage: string, channelName: string, href?: string}) {
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