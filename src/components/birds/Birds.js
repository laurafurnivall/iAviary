import { useState, useEffect } from "react"
import { Bird } from "./BirdCard"
import "./Birds.css"
import { useNavigate } from "react-router-dom"

export const Birds = ({ searchTermState }) => {

    const [birds, setBirds] = useState([])
    const [filteredBirds, setFilteredBirds] = useState([])

    const localAviaryUser = localStorage.getItem("aviary_user")
    const aviaryUserObject = JSON.parse(localAviaryUser)

    const navigate = useNavigate()

    const getAllBirds = () => {
        fetch(`http://localhost:8088/birdsAndEggs/?_expand=species&_expand=gender`)
        .then(response => response.json())
        .then((birdArray) => {
            setBirds(birdArray)
        })
    }

    useEffect(
        () =>{
            getAllBirds()
        },
        []
    )

    useEffect(
        () =>{
        const searchedBirds = birds.filter(bird => {
            return bird.name.toLowerCase().startsWith(searchTermState.toLowerCase())
        })
        setFilteredBirds(searchedBirds)
        },
        [searchTermState]
    )
    useEffect(
        () =>{
        const myBirds = birds.filter(bird => bird.userId === aviaryUserObject.id)
        setFilteredBirds(myBirds)
        },
        [birds]
    )

    return <>
    <article className="birds">
        {
            filteredBirds.map((bird) => <Bird key={bird.id}
            id={bird.id}
            img={bird.img}
            name={bird.name}
            species={bird.species.commonName}
            sex={bird.gender.gender}
            identifiers={bird.identifiers}
            getAllBirds={getAllBirds}
            birdObject={bird}
            hatchDay={bird.hatchDay} />
            )
        }
    </article>
    </>
}