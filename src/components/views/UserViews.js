import { Outlet, Route, Routes } from "react-router-dom"

export const UserViews = () => {
	return (
	<Routes>
		<Route path="/" element={
			<>
				<h1>iAviary</h1>
				<div>Birds, birds, birds!</div>

				<Outlet />
			</>
		}>
            {/* put Routes here... */}
		</Route>
	</Routes>
)
}