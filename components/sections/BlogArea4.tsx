
import Link from 'next/link'

export default function BlogArea4() {
	return (
		<>

			<div className="latest-blog2 sp">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 m-auto text-center">
							<div className="heading2">
								<span className="sub-titile mb-16"><img src="/assets/img/icons/span2.svg" alt="alex" /> Latest
									Blog</span>
								<h2 className="text-anime-style-3">Our Trending Blog</h2>
							</div>
						</div>
					</div>
					<div className="space30" />
					<div className="row">
						<div className="col-lg-10 m-auto">
							<div className="row">
								<div className="col-lg-6">
									<div className="latest-blog2-box mt-30">
										<div className="image-area _relative image-anime">
											<div className="image">
												<img src="/assets/img/blog/latest-blog2-img1.png" alt="alex" />
											</div>
											<Link href="/blog-single" className="arrow"><i className="fa-regular fa-arrow-right" /></Link>
										</div>
										<div className="content-area heading2">
											<div className="author-area2">
												<Link href="/#"><img src="/assets/img/icons/date1.svg" alt="alex" />Oct 10, 2025
												</Link>
												<Link href="/#" className="author"><img src="/assets/img/icons/author2.svg" alt="alex" /> Philips Huge</Link>
											</div>
											<h4><Link href="/blog-single">The Top 5 Financial Mistakes Businesses Finance Make
												– And How to Avoid Them</Link></h4>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="latest-blog2-box mt-30">
										<div className="image-area _relative image-anime">
											<div className="image">
												<img src="/assets/img/blog/latest-blog2-img2.png" alt="alex" />
											</div>
											<Link href="/blog-single" className="arrow"><i className="fa-regular fa-arrow-right" /></Link>
										</div>
										<div className="content-area heading2">
											<div className="author-area2">
												<Link href="/#"><img src="/assets/img/icons/date1.svg" alt="alex" />Oct 10, 2025
												</Link>
												<Link href="/#" className="author"><img src="/assets/img/icons/author2.svg" alt="alex" /> Philips Huge</Link>
											</div>
											<h4><Link href="/blog-single">The Top 5 Financial Mistakes Businesses Finance Make
												– And How to Avoid Them</Link></h4>
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
