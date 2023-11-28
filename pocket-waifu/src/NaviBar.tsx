import React from "react";
import './NaviBar.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const NaviBar = () =>{
    return(        
        <div>
            <div className="tittle"><h1>POCKET WAIFU</h1></div> 
            <div className="navigator">       
            <ul>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/browse">Browse</CustomLink>
                <CustomLink to="/search">Search</CustomLink>            
            </ul>            
            </div>
            <audio src='yamete.mp3' controls />
        </div>
    );
}

function CustomLink({ to, children, ...props}:{to:any, children:any}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return(
        <li className={isActive ? "active": ""}>
            <Link to={ to }{...props}>{children}</Link>
        </li>
    )
}

export default NaviBar;