

export default function CtaArea4() {
	return (
		<>

			<div className="cta4 bg-cover _relative" style={{ backgroundImage: 'url(/assets/img/bg/cta4-bg.jpg)' }}>
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
												<button type="submit" className="theme-btn6">
													<span className="text">Discover More</span><span className="arrow-all"><span className="arrow1"><i className="fa-regular fa-arrow-right" /></span><span className="arrow2"><i className="fa-regular fa-arrow-right" /></span></span>
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<img src="/assets/img/shapes/cta4-shape.png" alt="alex" className="shape" />
			</div>
		</>
	)
}
