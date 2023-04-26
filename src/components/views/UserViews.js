import { Outlet, Route, Routes } from "react-router-dom"
import { BirdEdit } from "../birds/BirdEdit"
import { SpeciesContainer } from "../species/SpeciesContainer"
import { Profile } from "../profile/Profile"
import { BirdsContainer } from "../birds/BirdContainer"
import { BirdInfoPage } from "../birds/BirdInfoPage"
import { BirdInfo } from "../birds/BirdInfo"

export const UserViews = () => {
	return (
		<Routes>
			<Route path="/" element={
				<>
					{/* <h1>iAviary</h1>
				<div>Birds, birds, birds!</div> */}

					<Outlet />
				</>
			}>
				<Route path="birds" element={<BirdsContainer />} />
				<Route path="birds/:birdId" element={<BirdInfoPage />} />
				<Route path="birds/edit" element={<BirdEdit />} />
				<Route path="birds/info" element={<BirdInfo />} />
				<Route path="species" element={<SpeciesContainer />} />
				<Route path="profile" element={<Profile />} />
			</Route>
		</Routes>
	)
}