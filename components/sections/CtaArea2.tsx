

export default function CtaArea2() {
	return (
		<>

			<div className="cta2 bg-cover _relative" style={{ backgroundImage: 'url(/assets/img/bg/cta2-bg.jpg)' }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="cta2-form-area">
								<div className="heading2-w">
									<h2>Join Our alex Community</h2>
									<p className="mt-16">Hi, I’m Alex Robertson! Passionate uncovering unique insights an sharing
										meaningful stories, I here bring fresh perspectives.</p>
									<div className="form-area">
										<form action="#">
											<input type="email" placeholder="Enter Your Email" />
											<div className="button">
												<button className="theme-btn2">Subscribe Now</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<img src="/assets/img/shapes/cta2-shape.png" alt="alex" className="shape" />
			</div>
		</>
	)
}
