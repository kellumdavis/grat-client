import React from "react"
import { Link } from "react-router-dom"
function Home(props){
    return (
        <div className="homeContainer">
            <img src="https://fontmeme.com/permalink/220613/a8f1c9b39495f1ed86f96aa2edf6caa3.png" alt=""></img>
            <div className="homeButton">
                <Link to={'/register'}>
                <button className="buttonForm" >Register</button>
                </Link>
                <Link to={'/login'}>
                <button className="buttonForm" >Login</button>
                </Link>
            </div>
        </div>
    )
  } 
  
  export default Home