import { CartWidget } from "./CartWidget";

export const NavBar = () => {
	return (
		<header>
			<nav>
				<div className="nav-brand">DeltaTech</div>
				<ul>
					<li><a href="">Inicio</a></li>
					<li><a href="">Componentes</a></li>
					<li><a href="">PC Armadas</a></li>
					<li><a href="">Contacto</a></li>
				</ul>
				<CartWidget />
			</nav>
		</header>
	);
}