import { Outlet, Route, Routes } from "react-router-dom"

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
            {/* put Routes here... */}
		</Route>
	</Routes>
)
}