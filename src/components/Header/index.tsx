import Icon from "@/elements/Icon";
import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import DollarSquare from "../../assets/dollarsquare.svg";
import Button from "@/elements/Button";

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isBooking, setIsBooking] = useState(true);
	return (
		<header>
			<nav className="sm:flex justify-between">
				<Icon src={Logo} alt="logo" imageClass="" />
				<div className="grid mt-4 sm:mt-0 sm:flex gap-4">
					{!isLoggedIn && !isBooking && (
						<>
							<Button variant="primary" className="w-36">
								Login
							</Button>
							<Button variant="outlined" className="w-36">
								Learn More
							</Button>
						</>
					)}
					{isLoggedIn && !isBooking && (
						<>
							<Icon src={DollarSquare} alt="dollar-square" />
							<Button variant="primary">Track Shipment</Button>
						</>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Header;