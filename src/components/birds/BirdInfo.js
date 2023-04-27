import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./Birds.css"

export const BirdInfo = () => {

    const { birdId } = useParams()
    const [bird, setBird] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/birds/?_expand=species&_expand=gender&id=${birdId}`)
                .then(response => response.json())
                .then((birdData) => {
                    const singleBird = birdData[0]
                    setBird(singleBird)
                })
        },
        [birdId]
    )

    return <section className="birdInfo">
        <img className="bird_img2" src={bird.img} alt="Image of Bird" />
        <div className="bird_info_body">
            <h5 className="bird_info">{bird.name}</h5>
            <h6 className="bird_info">{bird?.species?.commonName}</h6>
            <ul className="bird_infolist">
                <li className="bird_info">Identifiers: {bird.identifiers}</li>
                <li className="bird_info">Gender: {bird?.gender?.gender}</li>
                <li className="bird_info">Hatch Day: {bird.hatchDay}</li>
            </ul>
        </div>

    </section>
}