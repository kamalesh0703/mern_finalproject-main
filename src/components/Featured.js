import { useNavigate } from "react-router-dom";
import "./Featured.css";

const Featured = () => {
  const navigate=useNavigate();
  const handleclick=(type)=>{
    navigate('/hotle-type',{state:type})
  }
  return (
    <div className="Types">
      <h1>Select Based on Type</h1>
      <hr className="h"></hr>
      <div className="container">
        <div className="bg1" onClick={()=>handleclick("Resorts")}>
            <h2>Resorts</h2>
        </div>
        <div className="bg2" onClick={()=>handleclick("Hotel")}>
            <h2>Hotels</h2>
        </div>
        <div className="bg3" onClick={()=>handleclick("Villas")}>
            <h2>Villas</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;