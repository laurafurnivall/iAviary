import { Outlet, Route, Routes } from "react-router-dom"
import { Birds } from "../birds/Birds"
import { BirdForm } from "../birds/BirdForm"
import { BirdEdit } from "../birds/BirdEdit"
import { Species } from "../species/Species"
import { AddSpecies } from "../species/SpeciesForm"
import { EditSpecies } from "../species/SpeciesEdit"

export const AdminViews = () => {
	return (
	<Routes>
		<Route path="/" element={
			<>
				<h1>iAviary Admin</h1>
				<div>Birds, birds, birds!</div>

				<Outlet />
			</>
		}>
            <Route path="birds" element={ <Birds /> } />
			<Route path="birds/addbird" element={ <BirdForm /> } />
			<Route path="birds/:birdId" element={ <BirdEdit /> } />
			<Route path="species" element={ <Species /> } />
			<Route path="species/addspecies" element={ <AddSpecies /> } />
			<Route path="species/:speciesId" element={ <EditSpecies /> } />
		</Route>
	</Routes>
)
}