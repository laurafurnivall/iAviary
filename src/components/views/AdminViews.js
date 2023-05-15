import { Outlet, Route, Routes } from "react-router-dom"
import { EditSpecies } from "../species/SpeciesEdit"
import { Profile } from "../profile/Profile"
import { SpeciesContainer } from "../species/SpeciesContainer"
import { BirdsContainer } from "../birds/BirdContainer"
import { BirdInfoPage } from "../birds/BirdInfoPage"
import { LandingPage } from "../landingpage/LandingPage"
import { EditBird } from "../birds/EditBird"



export const AdminViews = () => {
	return (
		<Routes>
			<Route path="/" element={
				<><Outlet />
				</>
			}>
				<Route path="/" element={<LandingPage />} />
				<Route path="birds" element={<BirdsContainer />} />
				<Route path="birds/:birdId" element={<BirdInfoPage />} />
				<Route path="birds/edit/:birdId" element={<EditBird />} />
				<Route path="species" element={<SpeciesContainer />} />
				<Route path="species/:speciesId" element={<EditSpecies />} />
				<Route path="profile" element={<Profile />} />
			</Route>
		</Routes>
	)
}