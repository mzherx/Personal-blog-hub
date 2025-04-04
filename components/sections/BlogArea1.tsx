
'use client'
import Slider from "react-slick"
import { sidebarSliderWidget } from '@/util/SlickOptions'
import Link from 'next/link'
import BlogPost from '../blog/BlogPost'

export default function BlogArea1() {
	return (
		<>

			<div className="blog1 sp bg1 _relative">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<div className="blog1-posts-area">
								<div className="row">
									<BlogPost showItem={4} showStart={11} showEnd={20} style={1} showPagination={true} col="col-md-6" />

								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="blog1-sidebar-area ml-30 sm:ml-0 md:ml-0 md:mt-30 sm:mt-30">
								<div className="sidebar-widget_1 _search-area1">
									<h3>Search</h3>
									<form action="#">
										<input type="text" placeholder="Search..." />
									</form>
								</div>
								<div className="sidebar-widget_1 _author-intro mt-40">
									<div className="sidebar-author-thumb text-center">
										<img src="/assets/img/blog/sidebar-author1.png" alt="alex" />
										<h4>Alex Robertson</h4>
										<div className="heading1">
											<p>Whether you’re a tech enthusiast or a business leader, these emerging trends are
												reshaping the future and offering endless opportunities for growth and
												creativity.</p>
										</div>
										<div className="footer-social1">
											<ul>
												<li>
													<Link href="/#"><i className="fa-brands fa-facebook-f" /></Link>
												</li>
												<li>
													<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
												</li>
												<li>
													<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
												</li>
												<li>
													<Link href="/#"><i className="fa-regular fa-basketball" /></Link>
												</li>
												<li>
													<Link href="/#"><i className="fa-brands fa-behance" /></Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="sidebar-widget_1 _recent-posts mt-40">
									<h3>Recent Post</h3>
									<div className="blog1-recent-box">
										<div>
											<div className="recent-thumb">
												<img src="/assets/img/blog/blog1-recent1.png" alt="alex" />
											</div>
										</div>
										<div className="heading">
											<Link href="/#" className="date"><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct
												13, 2025</Link>
											<h5><Link href="/blog-single">The Power of Storytelling: How Make Your Brand’s
												Voice...</Link></h5>
										</div>
									</div>
									<div className="blog1-recent-box mt-16">
										<div>
											<div className="recent-thumb">
												<img src="/assets/img/blog/blog1-recent2.png" alt="alex" />
											</div>
										</div>
										<div className="heading">
											<Link href="/#" className="date"><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct
												12, 2025</Link>
											<h5><Link href="/blog-single">Mastering Content Calendars: A Guide to Consistent
												Strat...</Link></h5>
										</div>
									</div>
									<div className="blog1-recent-box mt-16">
										<div>
											<div className="recent-thumb">
												<img src="/assets/img/blog/blog1-recent3.png" alt="alex" />
											</div>
										</div>
										<div className="heading">
											<Link href="/#" className="date"><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct
												21, 2025</Link>
											<h5><Link href="/blog-single">Social Media Trends for 2025: What to Watch and How
												to...</Link></h5>
										</div>
									</div>
									<div className="blog1-recent-box mt-16">
										<div>
											<div className="recent-thumb">
												<img src="/assets/img/blog/blog1-recent4.png" alt="alex" />
											</div>
										</div>
										<div className="heading">
											<Link href="/#" className="date"><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct
												19, 2025 </Link>
											<h5><Link href="/blog-single">Creating a Visual Identity: Tips for Aesthetic &amp;
												Brand Consi...</Link></h5>
										</div>
									</div>
								</div>
								<Slider {...sidebarSliderWidget} className="sidebar-slider-widget mt-40">
									<div className="sidebar-single-slider">
										<div className="social-top">
											<Link href="/#" className="social">Social Media</Link>
											<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min
												read</Link>
										</div>
										<div className="heading-area">
											<div className="_author-area">
												<div className="author">
													<div className="author_thumb">
														<img src="/assets/img/blog/blog1-author2.png" alt="alex" />
													</div>
													<span className="author-name">Lorri Warf</span>
												</div>
												<span className="date"><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 21,
													2025</span>
											</div>
											<h4><Link href="/blog-single">Handling Negative Feedback: Maintaining Brand
												Reputation on Social Media</Link></h4>
										</div>
									</div>
									<div className="sidebar-single-slider">
										<div className="social-top">
											<Link href="/#" className="social">Social Media</Link>
											<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min
												read</Link>
										</div>
										<div className="heading-area">
											<div className="_author-area">
												<div className="author">
													<div className="author_thumb">
														<img src="/assets/img/blog/blog1-author2.png" alt="alex" />
													</div>
													<span className="author-name">Lorri Warf</span>
												</div>
												<span className="date"><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 21,
													2025</span>
											</div>
											<h4><Link href="/blog-single">Handling Negative Feedback: Maintaining Brand
												Reputation on Social Media</Link></h4>
										</div>
									</div>
									<div className="sidebar-single-slider">
										<div className="social-top">
											<Link href="/#" className="social">Social Media</Link>
											<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min
												read</Link>
										</div>
										<div className="heading-area">
											<div className="_author-area">
												<div className="author">
													<div className="author_thumb">
														<img src="/assets/img/blog/blog1-author2.png" alt="alex" />
													</div>
													<span className="author-name">Lorri Warf</span>
												</div>
												<span className="date"><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 21,
													2025</span>
											</div>
											<h4><Link href="/blog-single">Handling Negative Feedback: Maintaining Brand
												Reputation on Social Media</Link></h4>
										</div>
									</div>
								</Slider>
								<div className="sidebar-widget_1 mt-70 _experience">
									<h3>Work Experience</h3>
									<div className="_experience-box divider">
										<p className="bold-text">Product Design</p>
										<p className="normal-text">2020 - Now</p>
									</div>
									<div className="_experience-box divider">
										<p className="bold-text">Brand Expertise</p>
										<p className="normal-text">2018 - Now</p>
									</div>
									<div className="_experience-box divider">
										<p className="bold-text">UI/UX Design</p>
										<p className="normal-text">2021 - Now</p>
									</div>
									<div className="_experience-box">
										<p className="bold-text">SEO Expert</p>
										<p className="normal-text">2019 - Now</p>
									</div>
								</div>
								<div className="sidebar-widget_1 instagram-feed mt-40">
									<h3>Instagram Posts</h3>
									<div className="feed-all">
										<div className="row">
											<div className="col-4">
												<div className="feed-single">
													<div className="image">
														<img src="/assets/img/blog/blog1-feed1.png" alt="alex" />
														<Link href="/#" className="insta"><i className="fa-brands fa-instagram" /></Link>
													</div>
												</div>
											</div>
											<div className="col-4">
												<div className="feed-single">
													<div className="image">
														<img src="/assets/img/blog/blog1-feed2.png" alt="alex" />
														<Link href="/#" className="insta"><i className="fa-brands fa-instagram" /></Link>
													</div>
												</div>
											</div>
											<div className="col-4">
												<div className="feed-single">
													<div className="image">
														<img src="/assets/img/blog/blog1-feed3.png" alt="alex" />
														<Link href="/#" className="insta"><i className="fa-brands fa-instagram" /></Link>
													</div>
												</div>
											</div>
											<div className="col-4">
												<div className="feed-single mt-20">
													<div className="image">
														<img src="/assets/img/blog/blog1-feed4.png" alt="alex" />
														<Link href="/#" className="insta"><i className="fa-brands fa-instagram" /></Link>
													</div>
												</div>
											</div>
											<div className="col-4">
												<div className="feed-single mt-20">
													<div className="image">
														<img src="/assets/img/blog/blog1-feed5.png" alt="alex" />
														<Link href="/#" className="insta"><i className="fa-brands fa-instagram" /></Link>
													</div>
												</div>
											</div>
											<div className="col-4">
												<div className="feed-single mt-20">
													<div className="image">
														<img src="/assets/img/blog/blog1-feed6.png" alt="alex" />
														<Link href="/#" className="insta"><i className="fa-brands fa-instagram" /></Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									<Link href="/#" className="insta-btn">View on Instagram <span><i className="fa-regular fa-arrow-right" /></span></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div >
		</>
	)
}
