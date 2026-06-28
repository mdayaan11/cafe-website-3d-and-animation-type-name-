import "./globals.css";
export default function Home() {
  return (
    <main style={{maxWidth:"900px",margin:"0 auto",padding:"80px 24px"}}>
      <div style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"6px 14px",borderRadius:"99px",border:"1px solid #333",background:"#111",fontSize:"12px",color:"#888",marginBottom:"32px"}}>
        <span style={{width:"8px",height:"8px",borderRadius:"50%",background:"#10B981",boxShadow:"0 0 8px #10B981",display:"inline-block"}}></span>
        Built by Heaven AI Engine
      </div>
      <h1 style={{fontSize:"clamp(2rem,6vw,4rem)",fontWeight:900,letterSpacing:"-.04em",background:"linear-gradient(135deg,#fff,#888)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"16px"}}>cafe website 3d and animation type name </h1>
      <p style={{color:"#888",fontSize:"1.1rem",marginBottom:"48px",lineHeight:1.6}}>A complete application built autonomously by Heaven AI Engine.</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:"16px",marginBottom:"48px"}}>
        {{"
".join(f'<div key="{i}" style={{{{background:"#111",border:"1px solid #222",borderRadius:"16px",padding:"24px"}}}}><h3 style={{{{fontSize:".95rem",fontWeight:600,marginBottom:"8px"}}}}>{f}</h3><p style={{{{fontSize:".85rem",color:"#666",lineHeight:1.5}}}}>Production ready.</p></div>' for i, f in enumerate(agreement.features[:8]))}}</div>
      <footer style={{textAlign:"center",padding:"40px",color:"#444",fontSize:".8rem",borderTop:"1px solid #111",marginTop:"40px"}}>Built by Heaven AI Engine · heavenaii.netlify.app</footer>
    </main>
  );
}