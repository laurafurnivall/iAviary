import { useNavigate } from "react-router-dom"

export const Bird = ({ birdObject, id, img, name, species, getAllBirds }) => {

    const navigate = useNavigate()

    const removeBird = () => {
        return <button className="button2" data-toggle="button" data-placement="bottom" title="Remove the bird from your collection?"
            onClick={() => {
                fetch(`http://localhost:8088/birds/${id}`, {
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
            </div>
            <footer>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <>
                        <button className="button2" onClick={() => navigate(`/birds/${birdObject.id}`)}>Info</button>
                        {removeBird()}
                    </>
                </div>
            </footer>
        </section>
    </>
}