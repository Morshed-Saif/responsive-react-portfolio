import "./about.css";
import Award from "../../img/award.png";

const About = () => {
	return (
		<div className="a">
			<div className="a-left">
				<div className="a-card bg"></div>
				<div className="a-card">
					<img
						src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt=""
						className="a-img"
					/>
				</div>
			</div>
			<div className="a-right">
				<h1 className="a-title">About Me</h1>
				<p className="a-sub">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Molestias, officiis.
				</p>
				<p className="a-desc">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Officia reprehenderit eaque nostrum, minima architecto a
					repudiandae quisquam quibusdam facilis nulla, iste
					exercitationem earum sed vel dolor dolore at dignissimos eum
					corporis autem ullam enim illo excepturi? Sit, odit quas
					quidem error reprehenderit harum illum iure repellendus,
					deserunt nisi similique et.
				</p>
				<div className="a-award">
					<img src={Award} alt="" className="a-award-img" />
					<div className="a-award-texts">
						<h4 className="a-award-title">International Design</h4>
						<p className="a-award-desc">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Blanditiis, reprehenderit.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
