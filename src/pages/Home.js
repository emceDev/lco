import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import { useSpring, animated } from "react-spring";
import bg1 from "../images/img3640.jpg";
import bg2 from "../images/img3768.jpg";
import bg3 from "../images/img31024.jpg";
import bg from "../images/img31200.jpg";

const homeBackground = {
	backgroundColor: "red",
	position: "fixed",
	zIndex: "-1",
	// filter: "blur(10px)",
	top: "0",
	left: "0",
	width: "0vw",
	height: "100vh",
};

function Home() {
	const [loaded, setloaded] = useState(false);
	const [vw, setvw] = useState(window.innerWidth);
	const [background, setBackground] = useState(bg1);
	useEffect(() => {
		window.addEventListener("resize", () => setvw(window.innerWidth));
	}, []);
	useEffect(() => {
		console.log(vw);
		if (vw < 640) {
			setBackground(bg1);
		} else if (vw < 768 && vw > 640) {
			setBackground(bg2);
		} else if (vw < 1024 && vw > 768) {
			setBackground(bg3);
		} else {
			setBackground(bg);
			window.removeEventListener("resize", () => setvw(window.innerWidth));
		}
	}, [vw]);
	const move = useSpring({
		config: { duration: 1000 },
		marginLeft: 0,
		from: { marginLeft: 500 },
	});
	const appear = useSpring({
		config: { duration: 1500 },
		opacity: 1,
		from: { opacity: 0 },
	});
	return (
		<div className="home">
			<div>
				{/* // <img src={bg} style={homeBackground} /> */}
				<img
					src={background}
					style={homeBackground}
					onLoad={(e) => {
						e.target.style.width = "100vw";
						setloaded(true);
					}}
				/>
				{loaded === false ? (
					<img
						src={bg1}
						style={{
							position: "fixed",
							zIndex: "-1",
							filter: "blur(5px)",
							top: "0",
							left: "0",
							width: "100vw",
							height: "100vh",
						}}
					/>
				) : null}
			</div>
			<animated.div style={move}>
				<img src={logo} alt="logo" className="logo" />
			</animated.div>

			<animated.div className="tag" style={move}>
				Go for it Team!
			</animated.div>

			<animated.div style={appear}>
				<div className="video">
					<iframe
						title="video"
						width="560"
						height="315"
						src="https://www.youtube.com/embed/hqvGOPB0KmQ"
						frameborder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
			</animated.div>
		</div>
	);
}

export default Home;
