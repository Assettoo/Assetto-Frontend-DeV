import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Web3Context } from "../context/Web3Context";

const Navbar = () => {
	const { loadWeb3Modal, accountAddress } = useContext(Web3Context);
	return (
		<nav>
			<div className="bar">
				<NavLink className="logo_img" id="logo" to="/">
				<img src="/nav.png" alt="assetto logo" />
				</NavLink>
				<div className="links">
					<NavLink className="item" to="/">
						<h4>HOME</h4>
					</NavLink>
					<NavLink className="item" to="/about">
					<h4>ABOUT</h4>
					</NavLink>
					<NavLink className="item" to="/create">
					<h4>UPLOAD</h4>
					</NavLink>
					<NavLink className="item" to="/verify">
					<h4>VERIFY</h4>
					</NavLink>
					<NavLink className="item" to="/actions">
					<h4>RETRIEVE</h4>
					</NavLink>
				</div>
				<span
					className="item"
					id="wallet"
					role="button"
					onClick={loadWeb3Modal}>
					{accountAddress
						? `Connected ${accountAddress.slice(0, 5)}`
						: <h5>Connect Wallet</h5>}
				</span>
			</div>
		</nav>
	);
};

export default Navbar;
