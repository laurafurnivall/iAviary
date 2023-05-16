import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./Birds.css"


export const BirdInfo = () => {

    const { birdId } = useParams() //watch for birdId
    const [oneBird, updateBird] = useState([])
    const navigate = useNavigate()

    useEffect( //fetch bird object with species and gender, watching for param birdId
        () => {
            fetch(`http://localhost:8088/birds/?_expand=species&_expand=gender&id=${birdId}`)
                .then(response => response.json())
                .then((birdData) => {
                    const singleBird = birdData[0]
                    updateBird(singleBird)
                })
        },
        [birdId]
    )

    return <article className="birdInfoContainer">
        <section className="birdInfo">
            <img className="bird_img2" src={oneBird?.img} alt="Image of Bird" />
            <div className="bird_info_body">
                <h5 className="bird_info">{oneBird?.name}</h5>
                <h6 className="bird_info">{oneBird?.species?.commonName}</h6>
                <ul className="bird_infolist">
                    <li className="bird_info">Identifiers: {oneBird?.identifiers}</li>
                    <li className="bird_info">Gender: {oneBird?.gender?.gender}</li>
                    <li className="bird_info">Hatch Day: {oneBird?.hatchDay}</li>
                </ul>
                <button className="button editbirdbutton" onClick={() => navigate(`/birds/edit/${oneBird?.id}`)}>Edit Information</button>
            </div>
        </section>
    </article>
}