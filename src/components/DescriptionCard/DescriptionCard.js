import "./DescriptionCard.css"

export default function DescriptionCard(props) {
    return (
        <div className="card-container d-flex flex-column">
            <div className="d-flex flex-row align-items-start pb-3">
                <img className="profile-pic" src = {props.profilePic}/>
                <div className="d-flex flex-column p-3">
                    <div className="profile-title">
                        {props.name}
                    </div>
                    <div className="profile-description">
                        {props.description}
                    </div>
                </div>
            </div>
            {props.children}
        </div>
    )
}