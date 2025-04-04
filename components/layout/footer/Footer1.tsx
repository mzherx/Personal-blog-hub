
import Link from 'next/link'

export default function Footer1() {
	return (
		<>
			<div className="footer1 mt-80 md:mt-40 sm:mt-40">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="logo">
								<Link href="/"><img src="/assets/img/logo/header-logo1.png" alt="alex" /></Link>
							</div>
							<div className="heading1 mt-16">
								<p>Alex is your hub for the latest in digital innovation, technology trends, creative insights.
									Our mission is to empower creators, businesses, valuable resource.</p>
								<div className="footer-social1">
									<ul>
										<li>
											<Link href="/#"><i className="fa-brands fa-facebook-f" /></Link>
										</li>
										<li>
											<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
										</li>
										<li>
											<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
										</li>
										<li>
											<Link href="/#"><i className="fa-regular fa-basketball" /></Link>
										</li>
										<li>
											<Link href="/#"><i className="fa-brands fa-behance" /></Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 mb-50 sm:mb-30 sm:mt-30">
							<div className="footer-list1 ml-80 md:ml-0 sm:ml-0">
								<h3>Explore Categories</h3>
								<ul>
									<li><Link href="/#">Digital Marketing </Link></li>
									<li><Link href="/#">Ai &amp; Technology </Link></li>
									<li><Link href="/#">Content Strategy </Link></li>
									<li><Link href="/#">Social Media </Link></li>
									<li><Link href="/#">SEO &amp; Analytics </Link></li>
									<li><Link href="/#">Design &amp; Development </Link></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="footer-list1 ml-50 md:ml-0 sm:ml-0 mb-50 sm:mb-30">
								<h3>Quick Links</h3>
								<ul>
									<li><Link href="/#">Home </Link></li>
									<li><Link href="/#">Blog </Link></li>
									<li><Link href="/#">Features </Link></li>
									<li><Link href="/#">Contact us </Link></li>
									<li><Link href="/#">Privacy &amp; policy </Link></li>
									<li><Link href="/#">Terms of Services </Link></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="footer-contact-list1 mb-50 sm:mb-30">
								<h3>Contact Us</h3>
								<div className="footer-contact-box1">
									<div className="icon">
										<img src="/assets/img/icons/footer1-icon1.svg" alt="alex" />
									</div>
									<div className="text">
										<Link href="/#">support@Alex.com</Link>
									</div>
								</div>
								<div className="footer-contact-box1">
									<div className="icon">
										<img src="/assets/img/icons/footer1-icon2.svg" alt="alex" />
									</div>
									<div className="text">
										<Link href="/#">8708 Technology Forest Pl <br />
											Suite 125 -G, The Woodlands, <br />
											TX 773</Link>
									</div>
								</div>
								<div className="footer-contact-box1">
									<div className="icon">
										<img src="/assets/img/icons/footer1-icon3.svg" alt="alex" />
									</div>
									<div className="text">
										<Link href="/#">123-456-7890</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="coppyrihgt1">
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
