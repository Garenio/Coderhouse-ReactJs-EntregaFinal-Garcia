import React from "react";
import { Link } from "react-router-dom"

import { CartWidget } from "./CartWidget";
import { products } from "../data/products";

const categories = products.map(item => item.category);
const uniqueCategories = new Set(categories)

console.log(uniqueCategories);

export const NavBar = () => {
	return (
		<header>
			<nav>
				<div className="nav-brand"><Link to={"/"}>DeltaTech</Link></div>
				<ul>
					<li><Link to={"/"}>Inicio</Link></li>
					{[...uniqueCategories].map(item => <li><Link to={`/category/${item}`}>{item}</Link></li>)}
					<li><Link to={"/contacto"}>Contacto</Link></li>
				</ul>
				<CartWidget />
			</nav>
		</header>
	);
}