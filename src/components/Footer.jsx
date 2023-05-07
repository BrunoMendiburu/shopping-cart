import "./Footer.css"
import { useFilters } from "../hooks/useFilters.js"

export function Footer() {
  const { filters } = useFilters()

  return (
    <footer className="footer">
      <h4>Esto es un foking footer</h4>
      <span>@bruumendiburu on socials</span>
      <h5>Shopping Carte con useContext & useReducer</h5>
    </footer>
  )
}
