import React from 'react'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
		<>
			<header>
				<nav className="navbar navbar-expand-md navbar-dark bg-dark" >
					<Link to="/" className="navbar-brand mx-3">
						Employee Management Application
					</Link>
				</nav>
			</header>
		</>
	);
}
