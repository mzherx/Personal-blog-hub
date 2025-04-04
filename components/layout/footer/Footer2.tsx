
import Link from 'next/link'

export default function Footer2() {
	return (
		<>
			<div className="footer4 mt-80 md:mt-40 sm:mt-40">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="logo">
								<Link href="/"><img src="/assets/img/logo/footer-logo4.png" alt="alex" /></Link>
							</div>
							<div className="logo-area2 mt-16">
								<p>Alex is your hub for the latest in digital innovation, technology trends, creative insights.
									Our mission is to empower creators, businesses, valuable resource.</p>
								<div className="footer-social4">
									<ul>
										<li>
											<Link href="/#"><i className="fa-brands fa-facebook-f" /></Link>
										</li>
										<li>
											<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
										</li>
										<li>
											<Link href="/#"><i className="fa-brands fa-youtube" /></Link>
										</li>
										<li>
											<Link href="/#"><i className="fa-brands fa-x-twitter" /></Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 mb-50 sm:mb-30 sm:mt-30">
							<div className="footer-list4 ml-80 md:ml-0 sm:ml-0">
								<h3>Blog Category</h3>
								<ul>
									<li><Link href="/#">Business Consulting </Link></li>
									<li><Link href="/#">Finance Consulting </Link></li>
									<li><Link href="/#">Account Consulting </Link></li>
									<li><Link href="/#">Insurance Consulting </Link></li>
									<li><Link href="/#">Corporate Consulting</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="footer-contact-list4 ml-30 sm:ml-0 md:ml-0 mb-50 sm:mb-30">
								<h3>Contact Us</h3>
								<div className="footer-contact-box4">
									<div className="icon">
										<img src="/assets/img/icons/footer2-contact1.svg" alt="alex" />
									</div>
									<div className="text">
										<Link href="/#">support@Alex.com</Link>
									</div>
								</div>
								<div className="footer-contact-box4">
									<div className="icon">
										<img src="/assets/img/icons/footer2-contact2.svg" alt="alex" />
									</div>
									<div className="text">
										<Link href="/#">421 Allen, Mexico 4233</Link>
									</div>
								</div>
								<div className="footer-contact-box4">
									<div className="icon">
										<img src="/assets/img/icons/footer2-contact3.svg" alt="alex" />
									</div>
									<div className="text">
										<Link href="/mailto:advicxconsult@com">advicxconsult@com</Link>
									</div>
								</div>
								<div className="footer-contact-box4">
									<div className="icon">
										<img src="/assets/img/icons/footer2-contact4.svg" alt="alex" />
									</div>
									<div className="text">
										<Link href="/#">advicxconsult.com</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 mb-50">
							<div className="footer-contact-list4">
								<h3>Latest Blog</h3>
							</div>
							<div className="footer4-blog">
								<div>
									<div className="image _relative image-anime">
										<img src="/assets/img/blog/footer2-blog1.png" alt="alex" />
									</div>
								</div>
								<div className="heading">
									<Link href="/#" className="date"><img src="/assets/img/icons/date1.svg" alt="alex" /> 4 August
										2025</Link>
									<h4><Link href="/blog-single">From Vision Reality: Crafting Winning To Business
										Strategies</Link></h4>
									<Link href="/#" className="learn">Read More <span className="arrow"><i className="fa-regular fa-arrow-right" /></span></Link>
								</div>
							</div>
						</div>
					</div>
					<div className="coppyrihgt4">
						<div className="row coppyrihgt-border">
							<div className="col-md-6">
								<p className="coppyrihgt">© 2025 Alex, Inc. All Rights Reserved.</p>
							</div>
							<div className="col-md-6">
								<div className="conditions">
									<Link href="/#"> Privacy Policy </Link>
									<Link href="/#"> Terms &amp; Conditions </Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
