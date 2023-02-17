import "./DescriptionCard.css"
import male from "../../assets/male.png"
import female from "../../assets/female.png"
import React, {useState} from "react"
import { Button } from 'react-bootstrap'

export default function DescriptionCard(props) {
    const [style, setStyle] = useState("");

    const malePicture = <img src={male} className="gender-icon-m my-auto" alt="male"/>
    const femalePicture = <img src={female} className="gender-icon-f my-auto" alt="female"/>

    function changeStyle() {
        if (style === "") {
            setStyle("favorite"); // style = "favorite"
            props.updateFavorites(1);
        } else {
            setStyle("");
            props.updateFavorites(-1);
        }
    }

    return (
        <div className={"card-container d-flex flex-column " + style}>
            <div className="d-flex flex-row align-items-start pb-3">
                <img className="profile-pic" src = {props.profilePic} alt = "profile"/>
                <div className="d-flex flex-column p-3">
                    <div className="profile-title">
                        {props.name}
                    </div>
                    <div className="profile-description">
                        {props.description}
                    </div>
                </div>
                {/* {props.gender === "male" ? malePicture : (props.gender === "female" ? femalePicture : <></>)} */}
                {props.gender === "male" && malePicture}
                {props.gender == "female" && femalePicture}
            </div>
            <div className="other-elements">
                {props.children}
            </div>
            <div>
                <Button variant="outline-warning" onClick={changeStyle}>Favorite</Button>
            </div>
        </div>
    )
}