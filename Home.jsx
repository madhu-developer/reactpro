import React from 'react'
import {Link} from "react-router-dom"

export const Home = () => {
  return (
    <div>
        <center>
            <h1>Welcome to React World!</h1>
            <aside>
                <Link to="/"><p>Home</p></Link>
                <Link to="/dashboard"><p>Dashboard</p></Link>
                <Link to="/login"><p>Login</p></Link>
            </aside>
        </center>
    </div>
  )
}
