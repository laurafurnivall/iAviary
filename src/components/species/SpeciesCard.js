import { useNavigate } from "react-router-dom"
import Image from 'react-bootstrap/Image'

export const SpeciesCard = ({ speciesObject, id, img, commonName, scientificName, description, getAllSpecies }) => {

    const localAviaryUser = localStorage.getItem("aviary_user")
    const aviaryUserObject = JSON.parse(localAviaryUser)

    const navigate = useNavigate()

    const removeSpecies = () => {
        return <button className="button2" data-toggle="button" data-placement="bottom" title="Remove this species from the database?"
            onClick={() => {
                fetch(`http://localhost:8088/species/${id}`, {
                    method: "DELETE"
                })
                    .then(response => response.json())
                    .then(getAllSpecies()

                    )
            }}
        >Remove</button>
    }

    return <>
        <section className="singularSpecies">
            <Image className="species_img" fluid={false} src={img} alt="Image of Species" />
            <div className="species_info_body">
                <h5 className="species_name">{commonName}</h5>
                <h6 className="species_name">{scientificName}</h6>
                <p className="species_description">{description}</p>
            </div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <> {
                    aviaryUserObject.admin
                        ? <> {removeSpecies()}
                            <button className="button2" onClick={() => navigate(`/species/${speciesObject.id}`)}>Edit</button></>
                        : ""
                }
                </>
            </div>
        </section>
    </>
}