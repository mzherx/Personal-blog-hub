
import Link from 'next/link'

export default function HeroArea3() {
	return (
		<>

			<div className="hero3 bg-cover" style={{ backgroundImage: 'url(/assets/img/bg/hero3-bg.jpg)' }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-8 text-center m-auto">
							<div className="main-heading3">
								<h1 className="text-anime-style-3">Exploring the Future of Digital Innovation</h1>
								<p className="mt-16" data-aos="fade-up" data-aos-duration={400} data-aos-delay={100}>In today's
									fast-evolving digital landscape, staying updated with emerging trends is essential for
									businesses and creators alike. From groundbreaking AI developments to the latest in web
									design</p>
								<div className="buttons" data-aos="fade-up" data-aos-duration={400} data-aos-delay={100}>
									<Link className="theme-btn3" href="/blog">Explore More</Link>
									<p>Or</p>
									<Link className="theme-btn4" href="/contact">Contact Us</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
