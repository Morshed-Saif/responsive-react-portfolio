import "./intro.css";
import Me from "../../img/me.png";

const intro = () => {
	return (
		<div className="i">
			<div className="i-left">
				<div className="i-left-wrapper">
					<h2 className="i-intro">Hello, My name is</h2>
					<h1 className="i-name">mSaif</h1>
					<div className="i-title">
						<div className="i-title-wrapper">
							<div className="i-title-item">UI/UX Designer</div>
							<div className="i-title-item">
								Fullstack Developer
							</div>
							<div className="i-title-item">DevOps Engineer</div>
						</div>
					</div>
					<p className="i-desc">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ex consequatur, vero quidem deleniti quo natus pariatur
						quisquam obcaecati tenetur illo?
					</p>
				</div>
				{/* svg with class i-scroll */}
			</div>
			<div className="i-right">
				<div className="i-bg"></div>
				<img src={Me} alt="" className="i-img" />
			</div>
		</div>
	);
};

export default intro;
