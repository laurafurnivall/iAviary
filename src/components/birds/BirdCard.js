import { useNavigate } from "react-router-dom"

export const Bird = ({ birdObject, id, img, name, species, sex, identifiers, hatchDay, getAllBirds }) => {

    const navigate = useNavigate()

    const removeBird = () => {
        return <button className="button" data-toggle="button" data-placement="bottom" title="Remove the bird from your collection?"
            onClick={() => {
                fetch(`http://localhost:8088/birdsAndEggs/${id}`, {
                    method: "DELETE"
                })
                    .then(response => response.json())
                    .then(getAllBirds()

                    )
            }}
        >Remove</button>
    }


    return <>
        <section className="bird">
            <img className="bird_img" src={img} alt="Image of Bird" />
            <div className="bird_info_body">
                <h5 className="bird_name">{name}</h5>
                <h6 className="bird_name">{species}</h6>
                <ul>
                    <li className="bird_info">Identifiers: {identifiers}</li>
                    <li className="bird_info">Gender: {sex}</li>
                    <li className="bird_info">Hatch Day: {hatchDay}</li>
                </ul>
            </div>
            <footer>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <>
                        <button className="button" onClick={() => navigate(`/birds/${birdObject.id}`)}>Edit</button>
                        {removeBird()}
                    </>
                </div>
            </footer>
        </section>
    </>
}