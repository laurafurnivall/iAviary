import { createRoot } from "react-dom/client"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { Aviary } from "./components/iAviary"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <Aviary />
  </BrowserRouter>
)
