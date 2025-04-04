

export default function HeroArea2() {
	return (
		<>

			<div className="hero2 bg-cover" style={{ backgroundImage: 'url(/assets/img/bg/hero2-bg.jpg)' }}>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="main-heading2">
								<h1 className="text-anime-style-3">Hi, I’m Alex Robertson</h1>
								<p className="mt-16" data-aos="fade-right" data-aos-duration={400} data-aos-delay={100}>Hi, I’m Alex
									Robertson! Passionate uncovering unique insights an sharing meaningful stories, I here bring
									fresh perspectives.</p>
								<div className="form-area" data-aos="fade-right" data-aos-duration={400} data-aos-delay={300}>
									<form action="#">
										<input type="email" placeholder="Enter Your Email" />
										<div className="button">
											<button className="theme-btn2">Get Started</button>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="images-all">
								<div className="image1 image-anime reveal">
									<img src="/assets/img/hero/hero2-image.png" alt="alex" />
								</div>
								<div className="shape animate2">
									<img src="/assets/img/shapes/hero2-shape.png" alt="alex" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
