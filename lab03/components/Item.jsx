import { useEffect, useState } from "react"
import '../style/item.css'
export default function Item({item}){
    return(
        
        <div className="item-card">
            <div className="card-img">
                <img src={item.img} alt="" />
            </div>
            <div className="card-body">
                <div className="card-name">
                    <div className="card-text">
                        <p>{item.name}</p>
                    </div>
                    <div className="card-tag">
                        <p>{item.time}</p>
                    </div>
                </div>
                <div className="card-save-button">
                    <span className="save_img">
                        <img src={item.save_img} alt="" />
                    </span>
                </div>
            </div>
        </div>
    )
}