'use client'
import Link from 'next/link'
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
	modules: [Pagination, Navigation],
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,

	// Navigation
	navigation: {
		nextEl: '.blog4-slider-next',
		prevEl: '.blog4-slider-prev',
	},
}

export default function LatestBlogArea1() {
	return (
		<>

			<div className="latest-blog4 sp bg-cover" style={{ backgroundImage: 'url(/assets/img/bg/latest-blog4-bg.jpg)' }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-5 m-auto text-center">
							<div className="heading4">
								<span className="span"><img src="/assets/img/icons/span4.svg" alt="alex" /> Latest Trending
									Blog</span>
								<h2 className="text-anime-style-3">Our Trending Video Blog</h2>
							</div>
						</div>
					</div>
					<div className="col-lg-10 m-auto">
						<div className="row">
							<div className="col-lg-12 _relative">
								<Swiper {...swiperOptions} className="blog4-slider mt-60" data-aos="fade-up" data-aos-delay={100} data-aos-duration={400}>
									<SwiperSlide className="blog4-single-slider">
										<div className="image">
											<img src="/assets/img/blog/blog4-slider-image.png" alt="alex" />
										</div>
										<div className="content-area">
											<div className="tags-area">
												<Link href="/categories" className="tag">#UI/UX Design</Link>
												<Link href="/#" className="date"><img src="/assets/img/icons/date1.svg" alt="alex" /> 26
													August 2025</Link>
											</div>
											<div className="heading4">
												<h3><Link href="/blog-single">Stay Inspired With Cutting-Edge UI/UX Insights Of
													An Strategies. Transform way users connect technology.</Link></h3>
												<div className="space30" />
												<Link href="/blog-single" className="theme-btn6"><span className="text">read
													more</span><span className="arrow-all"><span className="arrow1"><i className="fa-regular fa-arrow-right" /></span><span className="arrow2"><i className="fa-regular fa-arrow-right" /></span></span></Link>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide className="blog4-single-slider">
										<div className="image">
											<img src="/assets/img/blog/blog4-slider-image.png" alt="alex" />
										</div>
										<div className="content-area">
											<div className="tags-area">
												<Link href="/categories" className="tag">#UI/UX Design</Link>
												<Link href="/#" className="date"><img src="/assets/img/icons/date1.svg" alt="alex" /> 26
													August 2025</Link>
											</div>
											<div className="heading4">
												<h3><Link href="/blog-single">Stay Inspired With Cutting-Edge UI/UX Insights Of
													An Strategies. Transform way users connect technology.</Link></h3>
												<div className="space30" />
												<Link href="/blog-single" className="theme-btn6"><span className="text">read
													more</span><span className="arrow-all"><span className="arrow1"><i className="fa-regular fa-arrow-right" /></span><span className="arrow2"><i className="fa-regular fa-arrow-right" /></span></span></Link>
											</div>
										</div>
									</SwiperSlide>
								</Swiper>
								<div className="blog4-buttons">
									<button className="blog4-slider-next"><i className="fa-solid fa-angle-left" /></button>
									<button className="blog4-slider-prev"><i className="fa-solid fa-angle-right" /></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="space100" />

		</>
	)
}
