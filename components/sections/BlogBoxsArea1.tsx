
import Link from 'next/link'
import BlogPost from '../blog/BlogPost'

export default function BlogBoxsArea1() {
	return (
		<>

			<div className="blog3-boxs">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="blog3-mega-box" data-aos-offset={-200} data-aos="fade-up" data-aos-duration={400} data-aos-delay={100}>
								<div className="row align-items-center">
									<div className="col-lg-5">
										<div className="image image-anime">
											<img src="/assets/img/blog/blog3-image1.png" alt="alex" />
										</div>
									</div>
									<div className="col-lg-7">
										<div className="blog3-content sm:mt-20">
											<div className="author-area3">
												<Link href="/#"><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 23, 2025
												</Link>
												<Link href="/author" className="author"><img src="/assets/img/icons/author3.svg" alt="alex" /> Velma Torphy</Link>
											</div>
											<div className="heading3">
												<h3><Link href="/blog-single">Industry Insights: What's Driving Change?</Link>
												</h3>
												<p className="mt-16">The digital industry is moving fast, and understanding the
													forces behind it can help readers anticipate what’s coming next. This
													section dives into the driving factors—technological, economic, and
													societal—that are influencing the direction of innovation in tech, digital
													marketing, and creative industries.</p>
												<Link href="/blog-single" className="learn">Read More <span><i className="fa-regular fa-arrow-right" /></span></Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<BlogPost showItem={6} showStart={24} showEnd={30} style={3} col="col-lg-4 col-md-6" />
					</div>
					<div className="row">
						<div className="col-lg-12" data-aos-offset={50} data-aos="fade-up" data-aos-duration={400} data-aos-delay={100}>
							<div className="text-center mt-60">
								<Link href="/blog" className="theme-btn3">See All Posts</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="space100" />

		</>
	)
}
