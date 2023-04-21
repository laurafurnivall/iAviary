import { useNavigate } from "react-router-dom"

export const SpeciesCard = ({ speciesObject, id, img, commonName, scientificName, description, getAllSpecies }) => {
    
    const localAviaryUser = localStorage.getItem("aviary_user")
    const aviaryUserObject = JSON.parse(localAviaryUser)
    
    const navigate = useNavigate()

    const removeSpecies = () => {
        return <button className="button" data-toggle="button" data-placement="bottom" title="Remove this species from the database?"
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
            <img className="species_img" src={img} alt="Image of Species" />
            <div className="species_info_body">
                <h3 className="species_name">{commonName}</h3>
                <h4 className="species_name">{scientificName}</h4>
                <p className="species_description">{description}</p>
            </div>
            <footer>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <> {
                        aviaryUserObject.admin 
                       ? <> {removeSpecies()} 
                            <button className="button" onClick={() => navigate(`/species/${speciesObject.id}`)}>Edit</button></>
                       : ""
                    }
                    </>
                </div>
            </footer>
        </section>
    </>
}