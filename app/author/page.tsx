
'use client'
import BlogPost from '@/components/blog/BlogPost'
import Layout from "@/components/layout/Layout"
import { sidebarSliderWidget } from '@/util/SlickOptions'
import Link from "next/link"
import Slider from "react-slick"
export default function Author() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<div className="inner-hero bg-cover" style={{ backgroundImage: 'url(/assets/img/bg/hero2-bg.jpg)' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="main-heading">
										<div className="page-prog">
											<Link href="/" style={{ color: '#ffffff' }}>Home</Link>
											<span style={{ color: '#ffffff' }}><i className="fa-solid fa-angle-right" /></span>
											<p style={{ color: '#ffffff' }}>Blog</p>
											<span style={{ color: '#ffffff' }}><i className="fa-solid fa-angle-right" /></span>
											<p style={{ color: '#ffffff' }}>Category</p>
											<span style={{ color: '#ffffff' }}><i className="fa-solid fa-angle-right" /></span>
											<p className="bold" style={{ color: '#ffffff' }}>Author</p>
										</div>
										<h1 style={{ color: '#ffffff' }}>Alex Robertson</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== HERO AREA END=======*/}
					{/*===== BLOG AREA START=======*/}
					<div className="blog1 sp bg1 _relative">
						<div className="container">
							<div className="row">
								<div className="col-lg-8">
									<div className="blog1-posts-area">
										<div className="row">
											<BlogPost showItem={6} showStart={11} showEnd={20} style={1} showPagination={true} col="col-md-6" />
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
												<img src="/assets/img/blog/sidebar-author1.png" alt="Alex" />
												<h4>Alex Robertson</h4>
												<div className="heading1">
													<p>Whether you’re a tech enthusiast or a business leader, these emerging trends are reshaping the future and offering endless opportunities for growth and creativity.</p>
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
													<Link href="/#" className="date"><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 13, 2025</Link>
													<h5><Link href="/blog-single">The Power of Storytelling: How Make Your Brand’s Voice...</Link></h5>
												</div>
											</div>
											<div className="blog1-recent-box mt-16">
												<div>
													<div className="recent-thumb">
														<img src="/assets/img/blog/blog1-recent2.png" alt="alex" />
													</div>
												</div>
												<div className="heading">
													<Link href="/#" className="date"><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 12, 2025</Link>
													<h5><Link href="/blog-single">Mastering Content Calendars: A Guide to Consistent Strat...</Link></h5>
												</div>
											</div>
											<div className="blog1-recent-box mt-16">
												<div>
													<div className="recent-thumb">
														<img src="/assets/img/blog/blog1-recent3.png" alt="alex" />
													</div>
												</div>
												<div className="heading">
													<Link href="/#" className="date"><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 21, 2025</Link>
													<h5><Link href="/blog-single">Social Media Trends for 2025: What to Watch and How to...</Link></h5>
												</div>
											</div>
											<div className="blog1-recent-box mt-16">
												<div>
													<div className="recent-thumb">
														<img src="/assets/img/blog/blog1-recent4.png" alt="alex" />
													</div>
												</div>
												<div className="heading">
													<Link href="/#" className="date"><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 19, 2025 </Link>
													<h5><Link href="/blog-single">Creating a Visual Identity: Tips for Aesthetic &amp; Brand Consi...</Link></h5>
												</div>
											</div>
										</div>
										<Slider {...sidebarSliderWidget} className="sidebar-slider-widget mt-40">
											<div className="sidebar-single-slider">
												<div className="social-top">
													<Link href="/#" className="social">Social Media</Link>
													<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
												</div>
												<div className="heading-area">
													<div className="_author-area">
														<div className="author">
															<div className="author_thumb">
																<img src="/assets/img/blog/blog1-author2.png" alt="alex" />
															</div>
															<span className="author-name">Lorri Warf</span>
														</div>
														<span className="date"><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 21, 2025</span>
													</div>
													<h4><Link href="/#">Handling Negative Feedback: Maintaining Brand Reputation on Social Media</Link></h4>
												</div>
											</div>
											<div className="sidebar-single-slider">
												<div className="social-top">
													<Link href="/#" className="social">Social Media</Link>
													<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
												</div>
												<div className="heading-area">
													<div className="_author-area">
														<div className="author">
															<div className="author_thumb">
																<img src="/assets/img/blog/blog1-author2.png" alt="alex" />
															</div>
															<span className="author-name">Lorri Warf</span>
														</div>
														<span className="date"><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 21, 2025</span>
													</div>
													<h4><Link href="/#">Handling Negative Feedback: Maintaining Brand Reputation on Social Media</Link></h4>
												</div>
											</div>
											<div className="sidebar-single-slider">
												<div className="social-top">
													<Link href="/#" className="social">Social Media</Link>
													<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
												</div>
												<div className="heading-area">
													<div className="_author-area">
														<div className="author">
															<div className="author_thumb">
																<img src="/assets/img/blog/blog1-author2.png" alt="alex" />
															</div>
															<span className="author-name">Lorri Warf</span>
														</div>
														<span className="date"><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 21, 2025</span>
													</div>
													<h4><Link href="/#">Handling Negative Feedback: Maintaining Brand Reputation on Social Media</Link></h4>
												</div>
											</div>
										</Slider>
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
					</div>
					{/*===== BLOG AREA END=======*/}
					{/*===== CTA AREA START=======*/}
					<div className="cta1">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-6">
									<div className="heading1-w">
										<h2>Ready to Elevate Your Social Media Game?</h2>
										<p className="mt-16">Unlock the tools and insights you need to thrive on social media with alex. Join our community for expert tips, trending strategies, and resources that empower you to stand out and succeed.</p>
										<div className="form-area">
											<form action="#">
												<input type="email" placeholder="Enter Your Email" />
												<div className="button">
													<button className="theme-btn1">Get Started</button>
												</div>
											</form>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="image text-end sm:text-start md:text-start sm:mt-30 md:mt-30">
										<img src="/assets/img/hero/hero1-image.png" alt="alex" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</Layout>
		</>
	)
}