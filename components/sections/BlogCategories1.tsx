
import Link from 'next/link'

export default function BlogCategories1() {
	return (
		<>

			<div className="blog1-cetegorys sp">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="heading1">
								<h2 className="text-anime-style-3">All Blog Post Categories</h2>
							</div>
						</div>
						<div className="col-lg-6" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={350}>
							<div className="text-end md:text-start sm:text-start sm:mt-20 md:mt-20">
								<Link className="theme-btn1" href="/categories">Explore All Topic </Link>
							</div>
						</div>
					</div>
					<div className="row mt-30 sm:mt-0 md:mt-0">
						<div className="col-lg col-md-6" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={450}>
							<div className="blog1-cetegory-box mt-30 text-center">
								<div className="image image-anime">
									<img src="/assets/img/blog/blog1-cetegroy-post1.png" alt="alex" />
								</div>
								<div className="heading1 mt-16">
									<h4><Link href="/social-media">Social Media </Link></h4>
								</div>
							</div>
						</div>
						<div className="col-lg col-md-6" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={400}>
							<div className="blog1-cetegory-box mt-30 text-center">
								<div className="image image-anime">
									<img src="/assets/img/blog/blog1-cetegroy-post2.png" alt="alex" />
								</div>
								<div className="heading1 mt-16">
									<h4><Link href="/social-media">Digital Marketing </Link></h4>
								</div>
							</div>
						</div>
						<div className="col-lg col-md-6" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={350}>
							<div className="blog1-cetegory-box mt-30 text-center">
								<div className="image image-anime">
									<img src="/assets/img/blog/blog1-cetegroy-post3.png" alt="alex" />
								</div>
								<div className="heading1 mt-16">
									<h4><Link href="/social-media">Startup Agency </Link></h4>
								</div>
							</div>
						</div>
						<div className="col-lg col-md-6" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={300}>
							<div className="blog1-cetegory-box mt-30 text-center">
								<div className="image image-anime">
									<img src="/assets/img/blog/blog1-cetegroy-post4.png" alt="alex" />
								</div>
								<div className="heading1 mt-16">
									<h4><Link href="/social-media">Design &amp; Development </Link></h4>
								</div>
							</div>
						</div>
						<div className="col-lg col-md-6" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={250}>
							<div className="blog1-cetegory-box mt-30 text-center">
								<div className="image image-anime">
									<img src="/assets/img/blog/blog1-cetegroy-post5.png" alt="alex" />
								</div>
								<div className="heading1 mt-16">
									<h4><Link href="/social-media">Life style </Link></h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
