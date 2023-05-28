import { NavLink, Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="flex justify-evenly items-center fixed w-full text-white text-[2.3vw] h-[12vh] bg-slate-900">
        <Link to="/">Home</Link>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/tech">Tech Stack</NavLink>
        <NavLink to="/aboutme">About Me</NavLink>
    </nav>
  )
}
