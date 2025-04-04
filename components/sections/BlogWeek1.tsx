
import Link from 'next/link'

export default function BlogWeek1() {
	return (
		<>

			<div className="best-post3 sp" style={{ backgroundColor: '#f3f4f6' }}>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="heading3">
								<h2 className="text-anime-style-3">Post Of The Week</h2>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="text-end md:text-start sm:text-start sm:mt-20 md:mt-20" data-aos-offset={50} data-aos="fade-left" data-aos-duration={400} data-aos-delay={100}>
								<Link href="/blog" className="theme-btn3">View All Weekly Posts</Link>
							</div>
						</div>
					</div>
					<div className="space40" />
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="image mt-30 _relative image-anime reveal">
								<img src="/assets/img/blog/best-post3.png" alt="alex" />
							</div>
						</div>
						<div className="col-lg-6">
							<div className="best-post3-box mt-30">
								<div className="author-area2">
									<Link href="/#"><img src="/assets/img/icons/date1.svg" alt="alex" />Oct 10, 2025 </Link>
									<Link href="/author" className="author"><img src="/assets/img/icons/author2.svg" alt="alex" />
										Philips Huge</Link>
								</div>
								<div className="heading3">
									<h4><Link href="/blog-single">Building a Digital Presence That Lasts: Long-Term Strategies
										for Online Success Beyond Just Getting Clicks</Link></h4>
									<p className="mt-16">Building a sustainable online presence requires more than just short-term
										gains. Learn how to develop long-term digital strategies that foster loyalty, drive
										organic growth, and withstand the test of time.</p>
									<Link href="/blog-single" className="learn">Read More <span><i className="fa-regular fa-arrow-right" /></span></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
