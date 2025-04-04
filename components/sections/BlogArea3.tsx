'use client'
import Link from 'next/link'


import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import BlogPost from '../blog/BlogPost'
const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 3,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,

	// Navigation
	navigation: {
		nextEl: '.blog2-slider-next',
		prevEl: '.blog2-slider-prev',
	},

	// Pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		575: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		767: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		991: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
		1199: {
			slidesPerView: 5,
			spaceBetween: 30,
		},
		1350: {
			slidesPerView: 5,
			spaceBetween: 30,
		},
	}
}
export default function BlogArea3() {

	return (
		<>

			<div className="blog2-meets bg-cover sp bg-grey">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="heading2">
								<span className="sub-titile mb-16" data-aos-offset={50} data-aos="fade-left" data-aos-duration={400} data-aos-delay={100}><img src="/assets/img/icons/span2.svg" alt="alex" /> Meet Alex
									Robertson</span>
								<h2 className="text-anime-style-3">Insights Storyteller alex Blog</h2>
							</div>
						</div>
						<div className="col-lg-6" data-aos-offset={50} data-aos="fade-up" data-aos-duration={400} data-aos-delay={100}>
							<div className="blog2-meets-btns text-end md:text-start sm:text-start sm:mt-20 md:mt-20">
								<button className="blog2-slider-prev"><i className="fa-solid fa-angle-left" /></button>
								<button className="blog2-slider-next"><i className="fa-solid fa-angle-right" /></button>
							</div>
						</div>
					</div>
					<div className="row" data-aos-offset={50} data-aos="fade-up" data-aos-duration={400} data-aos-delay={100}>
						<div className="col-lg-12">
							<Swiper {...swiperOptions} className="blog2-meets-slider mt-60">
								<SwiperSlide className="blog2-meets-single">
									<div className="image">
										<img src="/assets/img/blog/blog2-meets1.png" alt="alex" />
									</div>
									<div className="heading-area">
										<Link href="/categories">Finance <span>32</span></Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="blog2-meets-single">
									<div className="image">
										<img src="/assets/img/blog/blog2-meets2.png" alt="alex" />
									</div>
									<div className="heading-area">
										<Link href="/categories">Accounting <span>32</span></Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="blog2-meets-single">
									<div className="image">
										<img src="/assets/img/blog/blog2-meets3.png" alt="alex" />
									</div>
									<div className="heading-area">
										<Link href="/categories">Business <span>32</span></Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="blog2-meets-single">
									<div className="image">
										<img src="/assets/img/blog/blog2-meets4.png" alt="alex" />
									</div>
									<div className="heading-area">
										<Link href="/categories">Insurances <span>32</span></Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="blog2-meets-single">
									<div className="image">
										<img src="/assets/img/blog/blog2-meets1.png" alt="alex" />
									</div>
									<div className="heading-area">
										<Link href="/categories">Agency <span>32</span></Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="blog2-meets-single">
									<div className="image">
										<img src="/assets/img/blog/blog2-meets1.png" alt="alex" />
									</div>
									<div className="heading-area">
										<Link href="/categories">Finance <span>32</span></Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="blog2-meets-single">
									<div className="image">
										<img src="/assets/img/blog/blog2-meets2.png" alt="alex" />
									</div>
									<div className="heading-area">
										<Link href="/categories">Accounting <span>32</span></Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="blog2-meets-single">
									<div className="image">
										<img src="/assets/img/blog/blog2-meets3.png" alt="alex" />
									</div>
									<div className="heading-area">
										<Link href="/categories">Business <span>32</span></Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="blog2-meets-single">
									<div className="image">
										<img src="/assets/img/blog/blog2-meets4.png" alt="alex" />
									</div>
									<div className="heading-area">
										<Link href="/categories">Insurances <span>32</span></Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="blog2-meets-single">
									<div className="image">
										<img src="/assets/img/blog/blog2-meets1.png" alt="alex" />
									</div>
									<div className="heading-area">
										<Link href="/categories">Agency <span>32</span></Link>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
					<div className="space80" />
					<div className="row">
						<div className="col-lg-4">
							<div className="blog2-author-area bg-cover" style={{ backgroundImage: 'url(/assets/img/bg/blog2-author-bg.jpg)' }}>
								<div className="image">
									<img src="/assets/img/blog/blog2-author-image.png" alt="alex" />
								</div>
								<div className="heading-area">
									<h4>Alex Robertson</h4>
									<p>Personal Blog Writer</p>
									<div className="social-icons">
										<ul>
											<li>
												<Link href="/#"><i className="fa-brands fa-facebook-f" /></Link>
											</li>
											<li>
												<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
											</li>
											<li>
												<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
											</li>
											<li>
												<Link href="/#"><i className="fa-brands fa-x-twitter" /></Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-8">
							<BlogPost showItem={4} showStart={30} showEnd={35} style={2} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
