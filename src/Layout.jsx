import { Outlet } from "react-router-dom"
import { Header , Footer } from "./components"


export default function Route() {
  return (
    <div>
    <Header/>
      <Outlet/>
    <Footer/>
    </div>
  )
}
