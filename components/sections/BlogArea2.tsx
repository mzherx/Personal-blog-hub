
import Link from 'next/link'

export default function BlogArea2() {
	return (
		<>

			<div className="blog2-boxs-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-10 m-auto">
							<div className="blog2-single-box">
								<div className="row align-items-center">
									<div className="col-lg-6" data-aos-offset={-100} data-aos="fade-up" data-aos-duration={400} data-aos-delay={100}>
										<div className="image _relative image-anime mr-30">
											<img src="/assets/img/blog/blog2-image1.png" alt="alex" />
										</div>
									</div>
									<div className="col-lg-6" data-aos-offset={-100} data-aos="fade-up" data-aos-duration={400} data-aos-delay={300}>
										<div className="blog2-box-content md:mt-30 sm:mt-30">
											<div className="author-area2">
												<Link href="/#"><img src="/assets/img/icons/date1.svg" alt="alex" />Oct 10, 2025
												</Link>
												<Link href="/author" className="author"><img src="/assets/img/icons/author2.svg" alt="alex" /> Philips Huge</Link>
											</div>
											<div className="heading2">
												<h4><Link href="/blog-single">The Power of Data: Leveraging Analytics for
													Business Consult Strategic Decisions</Link></h4>
												<p className="mt-16">In today’s fast-paced business environment, change is best
													inevitable, an how organizations manage that make change.</p>
												<Link href="/blog-single" className="learn">Read More <span><i className="fa-regular fa-arrow-right" /></span></Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="blog2-single-box mt-40">
								<div className="row align-items-center">
									<div className="col-lg-6" data-aos-offset={50} data-aos="fade-up" data-aos-duration={400} data-aos-delay={300}>
										<div className="blog2-box-content">
											<div className="author-area2">
												<Link href="/#"><img src="/assets/img/icons/date1.svg" alt="alex" />Oct 10, 2025
												</Link>
												<Link href="/author" className="author"><img src="/assets/img/icons/author2.svg" alt="alex" /> Philips Huge</Link>
											</div>
											<div className="heading2">
												<h4><Link href="/blog-single">Effective Communication: The Key to Best Business
													Consulting Successful</Link></h4>
												<p className="mt-16">In today’s fast-paced business environment, change is best
													inevitable, an how organizations manage that make change.</p>
												<Link href="/blog-single" className="learn">Read More <span><i className="fa-regular fa-arrow-right" /></span></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-6" data-aos-offset={50} data-aos="fade-up" data-aos-duration={400} data-aos-delay={100}>
										<div className="image _relative image-anime mr-30 sm:mr-0 md:mr-0 sm:mt-30 md:mt-30">
											<img src="/assets/img/blog/blog2-image2.png" alt="alex" />
										</div>
									</div>
								</div>
							</div>
							<div className="blog2-single-box mt-40">
								<div className="row align-items-center">
									<div className="col-lg-6" data-aos-offset={50} data-aos="fade-up" data-aos-duration={400} data-aos-delay={100}>
										<div className="image _relative image-anime mr-30">
											<img src="/assets/img/blog/blog2-image3.png" alt="alex" />
										</div>
									</div>
									<div className="col-lg-6" data-aos-offset={50} data-aos="fade-up" data-aos-duration={400} data-aos-delay={300}>
										<div className="blog2-box-content sm:mt-30 md:mt-30">
											<div className="author-area2">
												<Link href="/#"><img src="/assets/img/icons/date1.svg" alt="alex" />Oct 10, 2025
												</Link>
												<Link href="/author" className="author"><img src="/assets/img/icons/author2.svg" alt="alex" /> Philips Huge</Link>
											</div>
											<div className="heading2">
												<h4><Link href="/blog-single">Effective Communication: The Key to Best Business
													Consulting Successful</Link></h4>
												<p className="mt-16">In today’s fast-paced business environment, change is best
													inevitable, an how organizations manage that make change.</p>
												<Link href="/blog-single" className="learn">Read More <span><i className="fa-regular fa-arrow-right" /></span></Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
