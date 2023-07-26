import React from 'react';
import '../layouts/card.css'

const Card = (props) => {
  return (
    <div className="card" style={{ marginTop:"40px"}}>
      <div className="card container" style={{ marginTop: "3vh" }}>
        <div className="cardHeader">
          <h2>{props.header}</h2>
        </div>
        <div className="cardBody" style={{marginBottom: "30px"}}>
          <div style={{display: "flex", alignItems: "center"}} className="cardMain">
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px", marginTop: "10px" }}><img src={props.imageref} style={{ width: "100px" }} /></div>
                <div style={{ display: "flex", flexDirection: "row", backgroundColor: "gray", padding: "50px", margin: "20px", borderRadius: "30px" }}><b>{props.cardBody}</b></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;