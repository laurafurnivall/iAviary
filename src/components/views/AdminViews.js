import { Outlet, Route, Routes } from "react-router-dom"
import { EditSpecies } from "../species/SpeciesEdit"
import { Profile } from "../profile/Profile"
import { SpeciesContainer } from "../species/SpeciesContainer"
import { BirdsContainer } from "../birds/BirdContainer"
import { BirdInfoPage } from "../birds/BirdInfoPage"


export const AdminViews = () => {
	return (
		<Routes>
			<Route path="/" element={
				<>
					<Outlet />
				</>
			}>
				<Route path="birds" element={<BirdsContainer />} />
				<Route path="birds/:birdId" element={<BirdInfoPage />} />
				<Route path="species" element={<SpeciesContainer />} />
				<Route path="species/:speciesId" element={<EditSpecies />} />
				<Route path="profile" element={<Profile />} />
			</Route>
		</Routes>
	)
}