import { Route, Routes } from 'react-router-dom'
import Home from './layouts/Home.jsx'
import Projects from './layouts/Projects.jsx'
import TechStack from './layouts/TechStack.jsx'
import AboutMe from './layouts/AboutMe.jsx'

export default function Routing() {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/tech" element={<TechStack />}></Route>
        <Route path="/aboutme" element={<AboutMe />}></Route>
        <Route path="*" element={<h1>Not Found - Error 404</h1>}></Route>
    </Routes>
  )
}
