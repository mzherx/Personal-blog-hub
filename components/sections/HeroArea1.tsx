

export default function HeroArea1() {
	return (
		<>

			<div className="hero1">
				<div className="container">
					<div className="hero1-bg bg-cover" style={{ backgroundImage: 'url(/assets/img/bg/hero1-bg.jpg)' }}>
						<div className="row align-items-center">
							<div className="col-lg-5">
								<div className="main-image reveal">
									<img src="/assets/img/hero/hero1-image.png" alt="alex" />
								</div>
							</div>
							<div className="col-lg-6">
								<div className="main-heading1">
									<h1 className="text-anime-style-3">Unlocking The Secrets To Social Media Success</h1>
									<p className="mt-16" data-aos="fade-left" data-aos-duration={400} data-aos-delay={100}>Social
										media is more than just a platform—it’s a powerful tool for building connections,
										amplifying your brand, and driving growth. At alex, we provide insights and strategies
										to help you stand out in the ever-evolving social media landscape.</p>
									<div className="form-area">
										<form action="#" data-aos="fade-left" data-aos-duration={400} data-aos-delay={100}>
											<input type="email" placeholder="Enter Your Email" />
											<div className="button">
												<button className="theme-btn1">Get Started</button>
											</div>
										</form>
									</div>
									<p className="bottom-content" data-aos="fade-left" data-aos-duration={1100} data-aos-delay={100}>❊ Connect, engage, &amp; inspire—social media success starts here.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
