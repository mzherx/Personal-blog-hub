
import Link from 'next/link'

export default function HeroArea4() {
	return (
		<>

			<div className="hero4 bg-cover" style={{ backgroundImage: 'url(/assets/img/bg/hero4-bg.jpg)' }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-2">
							<div className="image-shapes image-shapes-frist _relative mt-190">
								<div className="image-shape1 image-shape" data-aos="fade-up" data-aos-duration={400} data-aos-delay={100}>
									<div className="image">
										<img src="/assets/img/hero/hero4-image1.png" alt="alex" />
									</div>
									<Link href="/categories" className="text">Design</Link>
								</div>
								<div className="image-shape2 image-shape" data-aos="fade-up" data-aos-duration={400} data-aos-delay={300}>
									<div className="image">
										<img src="/assets/img/hero/hero4-image2.png" alt="alex" />
									</div>
									<Link href="/categories" className="text">Branding</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-8 text-center">
							<div className="main-heading4">
								<p className="sub-title"><img src="/assets/img/icons/white-span.svg" alt="alex" /> Top-Rated Reads
									UI/UX Inspiration And Insight</p>
								<h1 className="text-anime-style-3">Building The Future Of UI/UX, One Insight At Time</h1>
								<div className="form-area" data-aos="fade-up" data-aos-duration={400} data-aos-delay={300}>
									<input type="text" placeholder="Search Post, Tags And Author" />
									<button className="search"><i className="fa-solid fa-magnifying-glass" /></button>
								</div>
							</div>
						</div>
						<div className="col-lg-2">
							<div className="image-shapes _relative mt-190 sm:mt-30 md:mt-30">
								<div className="image-shape3 image-shape" data-aos="fade-up" data-aos-duration={400} data-aos-delay={100}>
									<div className="image">
										<img src="/assets/img/hero/hero4-image3.png" alt="alex" />
									</div>
									<Link href="/categories" className="text">graphics</Link>
								</div>
								<div className="image-shape4 image-shape" data-aos="fade-up" data-aos-duration={400} data-aos-delay={300}>
									<div className="image">
										<img src="/assets/img/hero/hero4-image4.png" alt="alex" />
									</div>
									<Link href="/categories" className="text">Wordpress</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
