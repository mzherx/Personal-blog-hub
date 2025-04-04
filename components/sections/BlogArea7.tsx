'use client'
import "@/node_modules/react-modal-video/css/modal-video.css"
import Link from 'next/link'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function BlogArea7() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<div className="blog4-mega-post" data-aos-offset={-200} data-aos="fade-up" data-aos-duration={400} data-aos-delay={300}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="blog4-mega-post-box">
								<div className="row align-items-center">
									<div className="col-lg-5">
										<div className="video-area _relative">
											<div className="image">
												<img src="/assets/img/blog/blog4-mega-post-image.png" alt="alex" />
											</div>
											<a onClick={() => setOpen(true)} className="video-play-button play-btn">
												<span><i className="fa-solid fa-play" /></span>
											</a>
										</div>
									</div>
									<div className="col-lg-7">
										<div className="content-area md:mt-30 sm:mt-30">
											<div className="tags-area">
												<Link href="/categories" className="tag">#UI/UX Design</Link>
												<Link href="/#" className="date"><img src="/assets/img/icons/date1.svg" alt="alex" /> 26
													August 2025</Link>
											</div>
											<div className="heading4 mt-20">
												<h3><Link href="/blog-single">Stay Inspired With Cutting-Edge UI/UX Insights Of
													An Strategies.</Link></h3>
												<p className="mt-16">Welcome our UI/UX Design Blog, where creativity meets strategy
													to a craft digital experiences that truly connect.</p>
												<div className="mt-30">
													<Link href="/blog-single" className="theme-btn6"><span className="text">read
														more</span><span className="arrow-all"><span className="arrow1"><i className="fa-regular fa-arrow-right" /></span><span className="arrow2"><i className="fa-regular fa-arrow-right" /></span></span></Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ModalVideo channel='youtube' isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />
		</>
	)
}
