import { Outlet, Route, Routes } from "react-router-dom"
import { SpeciesContainer } from "../species/SpeciesContainer"
import { Profile } from "../profile/Profile"
import { BirdsContainer } from "../birds/BirdContainer"
import { BirdInfoPage } from "../birds/BirdInfoPage"


export const UserViews = () => {
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
				<Route path="profile" element={<Profile />} />
			</Route>
		</Routes>
	)
}