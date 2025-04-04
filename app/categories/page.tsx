
'use client'
import { useState } from "react";
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Categories() {
	const [isTab, setIsTab] = useState(1)
    const handleTab = (i: number) => {
        setIsTab(i)
    }
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
											<p className="bold" style={{ color: '#ffffff' }}>Categories</p>
										</div>
										<h1 style={{ color: '#ffffff' }}>Categories</h1>
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
								<div className="row">
									<div className="col-lg-10 m-auto text-center">
										<div className="categories-buttons">
											<ul className="nav nav-pills" id="pills-tab" role="tablist">
												<li className="nav-item" role="presentation">
													<button className={isTab == 1 ? "nav-link active" : "nav-link"} id="category-tab1-tab"  onClick={() => handleTab(1)} data-bs-target="#category-tab1" type="button" role="tab" aria-controls="category-tab1" aria-selected="true">Social Media</button>
												</li>
												<li className="nav-item" role="presentation">
													<button className={isTab == 2 ? "nav-link active" : "nav-link"} id="category-tab2-tab"  onClick={() => handleTab(2)} data-bs-target="#category-tab2" type="button" role="tab" aria-controls="category-tab2" aria-selected="false">Digital Innovation</button>
												</li>
												<li className="nav-item" role="presentation">
													<button className={isTab == 3 ? "nav-link active" : "nav-link"} id="category-tab3-tab"  onClick={() => handleTab(3)} data-bs-target="#category-tab3" type="button" role="tab" aria-controls="category-tab3" aria-selected="false">UI/UX</button>
												</li>
												<li className="nav-item" role="presentation">
													<button className={isTab == 4 ? "nav-link active" : "nav-link"} id="category-tab4-tab"  onClick={() => handleTab(4)} data-bs-target="#category-tab4" type="button" role="tab" aria-controls="category-tab4" aria-selected="false">Business</button>
												</li>
												<li className="nav-item" role="presentation">
													<button className={isTab == 5 ? "nav-link active" : "nav-link"} id="category-tab5-tab"  onClick={() => handleTab(5)} data-bs-target="#category-tab5" type="button" role="tab" aria-controls="category-tab5" aria-selected="false">Technology</button>
												</li>
												<li className="nav-item" role="presentation">
													<button className={isTab == 6 ? "nav-link active" : "nav-link"} id="category-tab6-tab"  onClick={() => handleTab(6)} data-bs-target="#category-tab6" type="button" role="tab" aria-controls="category-tab6" aria-selected="false">Technology</button>
												</li>
												<li className="nav-item" role="presentation">
													<button className={isTab == 7 ? "nav-link active" : "nav-link"} id="category-tab7-tab"  onClick={() => handleTab(7)} data-bs-target="#category-tab7" type="button" role="tab" aria-controls="category-tab7" aria-selected="false">Technology</button>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="tab-content categories-content-tab" id="pills-tabContent">
										<div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="category-tab1" role="tabpanel" aria-labelledby="category-tab1-tab">
											<div className="blog1-posts-area">
												<div className="row">
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={100}>
														<div className="blog1-single-box">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image1.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Social Media</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">The Art of Building a Strong Personal Brand on Social Media</Link></h4>
																<p className="mt-16">This post explores strategies to help create an authentic and memorable brand presence on social media that resonates with audience.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author1.png" alt="alex" />
																		</div>
																		<span className="author-text">Kimberly Mastrangelo</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={300}>
														<div className="blog1-single-box sm:mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image2.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Social Media</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Proven Strategies to Boost Your Social Media Metrics</Link></h4>
																<p className="mt-16">Engagement is key to building a loyal following. Learn techniques for crafting posts that invite interaction, encouraging shares.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author2.png" alt="alex" />
																		</div>
																		<span className="author-text">Kathy Pacheco</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 21, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={400}>
														<div className="blog1-single-box sm:mt-30 md:mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image3.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Brand’s</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">The Power of Storytelling: How to Make Your Brand’s Voice Stand Out</Link></h4>
																<p className="mt-16">Discover ways to create relatable and impactful stories that reinforce your brand and keep followers coming back.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author3.png" alt="alex" />
																		</div>
																		<span className="author-text">Corina McCoy</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 2, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={500}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image4.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Content</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Mastering Content Calendars: A Guide to Consistent and Strategic.</Link></h4>
																<p className="mt-16">Consistency is crucial for success on social media. This guide helps you create an effective content calendar to stay organized.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author4.png" alt="alex" />
																		</div>
																		<span className="author-text">Rodger Struck</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 6, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={250}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image5.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Trending</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Social Media Trends for 2025: What to Watch and How to Adapt </Link></h4>
																<p className="mt-16">The social media landscape evolves quickly. Stay ahead of the curve by understanding key trends for 2025,</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
																		</div>
																		<span className="author-text">Rhonda Rhodes</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 6, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={300}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image6.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Brand Consistency</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Creating a Visual Identity: Tips for Aesthetic and Brand Consistency </Link></h4>
																<p className="mt-16">This post covers tips on color schemes, fonts, and visuals to keep your profile visually appealing and cohesive.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
																		</div>
																		<span className="author-text">Katie Sims</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 6, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={350}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image7.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Gen - Z</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">How to Build Authentic Connections with the New Generation</Link></h4>
																<p className="mt-16">Gen Z is reshaping digital interaction. Learn what matters to this generation and how to create authentic, meaningful content.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
																		</div>
																		<span className="author-text">David Elson</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={400}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image8.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Social Media</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Harnessing Analytics: Using Data to Refine Your Social Media Strategy</Link></h4>
																<p className="mt-16">Gen Z is reshaping digital interaction. Learn what matters to this generation and how to create authentic, meaningful content.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
																		</div>
																		<span className="author-text">Kenneth Allen</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={450}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image9.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Social Media</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">From Follower to Customer: Turning Social Engagement into Sales</Link></h4>
																<p className="mt-16">Transforming followers into customers requires a solid strategy. This post offers insights on using social media as a powerful tool convert.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author2.png" alt="alex" />
																		</div>
																		<span className="author-text">Judith Rodriguez</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												
											</div>
										</div>
										<div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="category-tab2" role="tabpanel" aria-labelledby="category-tab2-tab">
											<div className="blog1-posts-area">
												<div className="row">
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={100}>
														<div className="blog1-single-box">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image5.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Trending</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Social Media Trends for 2025: What to Watch and How to Adapt </Link></h4>
																<p className="mt-16">The social media landscape evolves quickly. Stay ahead of the curve by understanding key trends for 2025,</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
																		</div>
																		<span className="author-text">Rhonda Rhodes</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 6, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={300}>
														<div className="blog1-single-box sm:mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image2.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Social Media</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Proven Strategies to Boost Your Social Media Metrics</Link></h4>
																<p className="mt-16">Engagement is key to building a loyal following. Learn techniques for crafting posts that invite interaction, encouraging shares.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author2.png" alt="alex" />
																		</div>
																		<span className="author-text">Kathy Pacheco</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 21, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={400}>
														<div className="blog1-single-box sm:mt-30 md:mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image3.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Brand’s</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">The Power of Storytelling: How to Make Your Brand’s Voice Stand Out</Link></h4>
																<p className="mt-16">Discover ways to create relatable and impactful stories that reinforce your brand and keep followers coming back.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author3.png" alt="alex" />
																		</div>
																		<span className="author-text">Corina McCoy</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 2, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={500}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image4.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Content</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Mastering Content Calendars: A Guide to Consistent and Strategic.</Link></h4>
																<p className="mt-16">Consistency is crucial for success on social media. This guide helps you create an effective content calendar to stay organized.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author4.png" alt="alex" />
																		</div>
																		<span className="author-text">Rodger Struck</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 6, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={250}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image1.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Social Media</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">The Art of Building a Strong Personal Brand on Social Media</Link></h4>
																<p className="mt-16">This post explores strategies to help create an authentic and memorable brand presence on social media that resonates with audience.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author1.png" alt="alex" />
																		</div>
																		<span className="author-text">Kimberly Mastrangelo</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={300}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image6.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Brand Consistency</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Creating a Visual Identity: Tips for Aesthetic and Brand Consistency </Link></h4>
																<p className="mt-16">This post covers tips on color schemes, fonts, and visuals to keep your profile visually appealing and cohesive.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
																		</div>
																		<span className="author-text">Katie Sims</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 6, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={350}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image7.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Gen - Z</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">How to Build Authentic Connections with the New Generation</Link></h4>
																<p className="mt-16">Gen Z is reshaping digital interaction. Learn what matters to this generation and how to create authentic, meaningful content.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
																		</div>
																		<span className="author-text">David Elson</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={400}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image8.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Social Media</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Harnessing Analytics: Using Data to Refine Your Social Media Strategy</Link></h4>
																<p className="mt-16">Gen Z is reshaping digital interaction. Learn what matters to this generation and how to create authentic, meaningful content.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
																		</div>
																		<span className="author-text">Kenneth Allen</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={450}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image9.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Social Media</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">From Follower to Customer: Turning Social Engagement into Sales</Link></h4>
																<p className="mt-16">Transforming followers into customers requires a solid strategy. This post offers insights on using social media as a powerful tool convert.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author2.png" alt="alex" />
																		</div>
																		<span className="author-text">Judith Rodriguez</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												
											</div>
										</div>
										<div className={isTab == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="category-tab3" role="tabpanel" aria-labelledby="category-tab3-tab">
											<div className="blog1-posts-area">
												<div className="row">
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={100}>
														<div className="blog1-single-box">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image4.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Content</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Mastering Content Calendars: A Guide to Consistent and Strategic.</Link></h4>
																<p className="mt-16">Consistency is crucial for success on social media. This guide helps you create an effective content calendar to stay organized.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author4.png" alt="alex" />
																		</div>
																		<span className="author-text">Rodger Struck</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 6, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={300}>
														<div className="blog1-single-box sm:mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image2.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Social Media</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Proven Strategies to Boost Your Social Media Metrics</Link></h4>
																<p className="mt-16">Engagement is key to building a loyal following. Learn techniques for crafting posts that invite interaction, encouraging shares.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author2.png" alt="alex" />
																		</div>
																		<span className="author-text">Kathy Pacheco</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 21, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={400}>
														<div className="blog1-single-box sm:mt-30 md:mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image3.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Brand’s</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">The Power of Storytelling: How to Make Your Brand’s Voice Stand Out</Link></h4>
																<p className="mt-16">Discover ways to create relatable and impactful stories that reinforce your brand and keep followers coming back.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author3.png" alt="alex" />
																		</div>
																		<span className="author-text">Corina McCoy</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 2, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={500}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image1.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Social Media</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">The Art of Building a Strong Personal Brand on Social Media</Link></h4>
																<p className="mt-16">This post explores strategies to help create an authentic and memorable brand presence on social media that resonates with audience.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author1.png" alt="alex" />
																		</div>
																		<span className="author-text">Kimberly Mastrangelo</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={250}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image5.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Trending</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Social Media Trends for 2025: What to Watch and How to Adapt </Link></h4>
																<p className="mt-16">The social media landscape evolves quickly. Stay ahead of the curve by understanding key trends for 2025,</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
																		</div>
																		<span className="author-text">Rhonda Rhodes</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 6, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={300}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image6.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Brand Consistency</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Creating a Visual Identity: Tips for Aesthetic and Brand Consistency </Link></h4>
																<p className="mt-16">This post covers tips on color schemes, fonts, and visuals to keep your profile visually appealing and cohesive.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
																		</div>
																		<span className="author-text">Katie Sims</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 6, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={350}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image7.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Gen - Z</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">How to Build Authentic Connections with the New Generation</Link></h4>
																<p className="mt-16">Gen Z is reshaping digital interaction. Learn what matters to this generation and how to create authentic, meaningful content.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
																		</div>
																		<span className="author-text">David Elson</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={400}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image8.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Social Media</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Harnessing Analytics: Using Data to Refine Your Social Media Strategy</Link></h4>
																<p className="mt-16">Gen Z is reshaping digital interaction. Learn what matters to this generation and how to create authentic, meaningful content.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
																		</div>
																		<span className="author-text">Kenneth Allen</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={450}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image9.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Social Media</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">From Follower to Customer: Turning Social Engagement into Sales</Link></h4>
																<p className="mt-16">Transforming followers into customers requires a solid strategy. This post offers insights on using social media as a powerful tool convert.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author2.png" alt="alex" />
																		</div>
																		<span className="author-text">Judith Rodriguez</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												
											</div>
										</div>
										<div className={isTab == 4 ? "tab-pane fade show active" : "tab-pane fade"} id="category-tab4" role="tabpanel" aria-labelledby="category-tab4-tab">
											<div className="blog1-posts-area">
												<div className="row">
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={100}>
														<div className="blog1-single-box">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image1.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Social Media</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">The Art of Building a Strong Personal Brand on Social Media</Link></h4>
																<p className="mt-16">This post explores strategies to help create an authentic and memorable brand presence on social media that resonates with audience.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author1.png" alt="alex" />
																		</div>
																		<span className="author-text">Kimberly Mastrangelo</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={300}>
														<div className="blog1-single-box sm:mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image2.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Social Media</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Proven Strategies to Boost Your Social Media Metrics</Link></h4>
																<p className="mt-16">Engagement is key to building a loyal following. Learn techniques for crafting posts that invite interaction, encouraging shares.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author2.png" alt="alex" />
																		</div>
																		<span className="author-text">Kathy Pacheco</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 21, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={400}>
														<div className="blog1-single-box sm:mt-30 md:mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image3.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Brand’s</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">The Power of Storytelling: How to Make Your Brand’s Voice Stand Out</Link></h4>
																<p className="mt-16">Discover ways to create relatable and impactful stories that reinforce your brand and keep followers coming back.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author3.png" alt="alex" />
																		</div>
																		<span className="author-text">Corina McCoy</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 2, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={500}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image4.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Content</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Mastering Content Calendars: A Guide to Consistent and Strategic.</Link></h4>
																<p className="mt-16">Consistency is crucial for success on social media. This guide helps you create an effective content calendar to stay organized.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author4.png" alt="alex" />
																		</div>
																		<span className="author-text">Rodger Struck</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 6, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={250}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image5.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Trending</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Social Media Trends for 2025: What to Watch and How to Adapt </Link></h4>
																<p className="mt-16">The social media landscape evolves quickly. Stay ahead of the curve by understanding key trends for 2025,</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
																		</div>
																		<span className="author-text">Rhonda Rhodes</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 6, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={300}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image6.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Brand Consistency</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Creating a Visual Identity: Tips for Aesthetic and Brand Consistency </Link></h4>
																<p className="mt-16">This post covers tips on color schemes, fonts, and visuals to keep your profile visually appealing and cohesive.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
																		</div>
																		<span className="author-text">Katie Sims</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 6, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={350}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image7.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Gen - Z</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">How to Build Authentic Connections with the New Generation</Link></h4>
																<p className="mt-16">Gen Z is reshaping digital interaction. Learn what matters to this generation and how to create authentic, meaningful content.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
																		</div>
																		<span className="author-text">David Elson</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={400}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image8.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Social Media</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Harnessing Analytics: Using Data to Refine Your Social Media Strategy</Link></h4>
																<p className="mt-16">Gen Z is reshaping digital interaction. Learn what matters to this generation and how to create authentic, meaningful content.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
																		</div>
																		<span className="author-text">Kenneth Allen</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={450}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image9.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Social Media</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">From Follower to Customer: Turning Social Engagement into Sales</Link></h4>
																<p className="mt-16">Transforming followers into customers requires a solid strategy. This post offers insights on using social media as a powerful tool convert.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author2.png" alt="alex" />
																		</div>
																		<span className="author-text">Judith Rodriguez</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												
											</div>
										</div>
										<div className={isTab == 5 ? "tab-pane fade show active" : "tab-pane fade"} id="category-tab5" role="tabpanel" aria-labelledby="category-tab5-tab">
											<div className="blog1-posts-area">
												<div className="row">
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={100}>
														<div className="blog1-single-box">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image1.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Social Media</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">The Art of Building a Strong Personal Brand on Social Media</Link></h4>
																<p className="mt-16">This post explores strategies to help create an authentic and memorable brand presence on social media that resonates with audience.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author1.png" alt="alex" />
																		</div>
																		<span className="author-text">Kimberly Mastrangelo</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={300}>
														<div className="blog1-single-box sm:mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image2.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Social Media</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Proven Strategies to Boost Your Social Media Metrics</Link></h4>
																<p className="mt-16">Engagement is key to building a loyal following. Learn techniques for crafting posts that invite interaction, encouraging shares.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author2.png" alt="alex" />
																		</div>
																		<span className="author-text">Kathy Pacheco</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 21, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={400}>
														<div className="blog1-single-box sm:mt-30 md:mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image3.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Brand’s</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">The Power of Storytelling: How to Make Your Brand’s Voice Stand Out</Link></h4>
																<p className="mt-16">Discover ways to create relatable and impactful stories that reinforce your brand and keep followers coming back.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author3.png" alt="alex" />
																		</div>
																		<span className="author-text">Corina McCoy</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 2, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={500}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image4.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Content</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Mastering Content Calendars: A Guide to Consistent and Strategic.</Link></h4>
																<p className="mt-16">Consistency is crucial for success on social media. This guide helps you create an effective content calendar to stay organized.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author4.png" alt="alex" />
																		</div>
																		<span className="author-text">Rodger Struck</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 6, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={250}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image5.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Trending</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Social Media Trends for 2025: What to Watch and How to Adapt </Link></h4>
																<p className="mt-16">The social media landscape evolves quickly. Stay ahead of the curve by understanding key trends for 2025,</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
																		</div>
																		<span className="author-text">Rhonda Rhodes</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 6, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={300}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image6.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Brand Consistency</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Creating a Visual Identity: Tips for Aesthetic and Brand Consistency </Link></h4>
																<p className="mt-16">This post covers tips on color schemes, fonts, and visuals to keep your profile visually appealing and cohesive.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
																		</div>
																		<span className="author-text">Katie Sims</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 6, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={350}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image7.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Gen - Z</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">How to Build Authentic Connections with the New Generation</Link></h4>
																<p className="mt-16">Gen Z is reshaping digital interaction. Learn what matters to this generation and how to create authentic, meaningful content.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
																		</div>
																		<span className="author-text">David Elson</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={400}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image8.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Social Media</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Harnessing Analytics: Using Data to Refine Your Social Media Strategy</Link></h4>
																<p className="mt-16">Gen Z is reshaping digital interaction. Learn what matters to this generation and how to create authentic, meaningful content.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
																		</div>
																		<span className="author-text">Kenneth Allen</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={450}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image9.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Social Media</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">From Follower to Customer: Turning Social Engagement into Sales</Link></h4>
																<p className="mt-16">Transforming followers into customers requires a solid strategy. This post offers insights on using social media as a powerful tool convert.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author2.png" alt="alex" />
																		</div>
																		<span className="author-text">Judith Rodriguez</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												
											</div>
										</div>
										<div className={isTab == 6 ? "tab-pane fade show active" : "tab-pane fade"} id="category-tab6" role="tabpanel" aria-labelledby="category-tab6-tab">
											<div className="blog1-posts-area">
												<div className="row">
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={100}>
														<div className="blog1-single-box">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image1.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Social Media</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">The Art of Building a Strong Personal Brand on Social Media</Link></h4>
																<p className="mt-16">This post explores strategies to help create an authentic and memorable brand presence on social media that resonates with audience.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author1.png" alt="alex" />
																		</div>
																		<span className="author-text">Kimberly Mastrangelo</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={300}>
														<div className="blog1-single-box sm:mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image2.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Social Media</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Proven Strategies to Boost Your Social Media Metrics</Link></h4>
																<p className="mt-16">Engagement is key to building a loyal following. Learn techniques for crafting posts that invite interaction, encouraging shares.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author2.png" alt="alex" />
																		</div>
																		<span className="author-text">Kathy Pacheco</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 21, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={400}>
														<div className="blog1-single-box sm:mt-30 md:mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image3.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Brand’s</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">The Power of Storytelling: How to Make Your Brand’s Voice Stand Out</Link></h4>
																<p className="mt-16">Discover ways to create relatable and impactful stories that reinforce your brand and keep followers coming back.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author3.png" alt="alex" />
																		</div>
																		<span className="author-text">Corina McCoy</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 2, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={500}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image4.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Content</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Mastering Content Calendars: A Guide to Consistent and Strategic.</Link></h4>
																<p className="mt-16">Consistency is crucial for success on social media. This guide helps you create an effective content calendar to stay organized.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author4.png" alt="alex" />
																		</div>
																		<span className="author-text">Rodger Struck</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 6, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={250}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image5.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Trending</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Social Media Trends for 2025: What to Watch and How to Adapt </Link></h4>
																<p className="mt-16">The social media landscape evolves quickly. Stay ahead of the curve by understanding key trends for 2025,</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
																		</div>
																		<span className="author-text">Rhonda Rhodes</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 6, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={300}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image6.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Brand Consistency</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Creating a Visual Identity: Tips for Aesthetic and Brand Consistency </Link></h4>
																<p className="mt-16">This post covers tips on color schemes, fonts, and visuals to keep your profile visually appealing and cohesive.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
																		</div>
																		<span className="author-text">Katie Sims</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 6, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={350}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image7.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Gen - Z</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">How to Build Authentic Connections with the New Generation</Link></h4>
																<p className="mt-16">Gen Z is reshaping digital interaction. Learn what matters to this generation and how to create authentic, meaningful content.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
																		</div>
																		<span className="author-text">David Elson</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={400}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image8.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Social Media</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Harnessing Analytics: Using Data to Refine Your Social Media Strategy</Link></h4>
																<p className="mt-16">Gen Z is reshaping digital interaction. Learn what matters to this generation and how to create authentic, meaningful content.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
																		</div>
																		<span className="author-text">Kenneth Allen</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={450}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image9.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Social Media</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">From Follower to Customer: Turning Social Engagement into Sales</Link></h4>
																<p className="mt-16">Transforming followers into customers requires a solid strategy. This post offers insights on using social media as a powerful tool convert.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author2.png" alt="alex" />
																		</div>
																		<span className="author-text">Judith Rodriguez</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												
											</div>
										</div>
										<div className={isTab == 7 ? "tab-pane fade show active" : "tab-pane fade"} id="category-tab7" role="tabpanel" aria-labelledby="category-tab7-tab">
											<div className="blog1-posts-area">
												<div className="row">
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={100}>
														<div className="blog1-single-box">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image1.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Social Media</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">The Art of Building a Strong Personal Brand on Social Media</Link></h4>
																<p className="mt-16">This post explores strategies to help create an authentic and memorable brand presence on social media that resonates with audience.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author1.png" alt="alex" />
																		</div>
																		<span className="author-text">Kimberly Mastrangelo</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={300}>
														<div className="blog1-single-box sm:mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image2.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Social Media</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Proven Strategies to Boost Your Social Media Metrics</Link></h4>
																<p className="mt-16">Engagement is key to building a loyal following. Learn techniques for crafting posts that invite interaction, encouraging shares.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author2.png" alt="alex" />
																		</div>
																		<span className="author-text">Kathy Pacheco</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 21, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={400}>
														<div className="blog1-single-box sm:mt-30 md:mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image3.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Brand’s</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">The Power of Storytelling: How to Make Your Brand’s Voice Stand Out</Link></h4>
																<p className="mt-16">Discover ways to create relatable and impactful stories that reinforce your brand and keep followers coming back.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author3.png" alt="alex" />
																		</div>
																		<span className="author-text">Corina McCoy</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 2, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={500}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image4.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Content</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Mastering Content Calendars: A Guide to Consistent and Strategic.</Link></h4>
																<p className="mt-16">Consistency is crucial for success on social media. This guide helps you create an effective content calendar to stay organized.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author4.png" alt="alex" />
																		</div>
																		<span className="author-text">Rodger Struck</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 6, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={250}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image5.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Trending</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Social Media Trends for 2025: What to Watch and How to Adapt </Link></h4>
																<p className="mt-16">The social media landscape evolves quickly. Stay ahead of the curve by understanding key trends for 2025,</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
																		</div>
																		<span className="author-text">Rhonda Rhodes</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 6, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={300}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image6.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Brand Consistency</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Creating a Visual Identity: Tips for Aesthetic and Brand Consistency </Link></h4>
																<p className="mt-16">This post covers tips on color schemes, fonts, and visuals to keep your profile visually appealing and cohesive.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
																		</div>
																		<span className="author-text">Katie Sims</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 6, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={350}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image7.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Gen - Z</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">How to Build Authentic Connections with the New Generation</Link></h4>
																<p className="mt-16">Gen Z is reshaping digital interaction. Learn what matters to this generation and how to create authentic, meaningful content.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
																		</div>
																		<span className="author-text">David Elson</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={400}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image8.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Social Media</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">Harnessing Analytics: Using Data to Refine Your Social Media Strategy</Link></h4>
																<p className="mt-16">Gen Z is reshaping digital interaction. Learn what matters to this generation and how to create authentic, meaningful content.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
																		</div>
																		<span className="author-text">Kenneth Allen</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={450}>
														<div className="blog1-single-box mt-30">
															<div className="thumbnail image-anime">
																<img src="/assets/img/blog/blog1-image9.png" alt="alex" />
															</div>
															<div className="heading1">
																<div className="social-area">
																	<Link href="/#" className="social">Social Media</Link>
																	<Link href="/#" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
																</div>
																<h4><Link href="/blog-single">From Follower to Customer: Turning Social Engagement into Sales</Link></h4>
																<p className="mt-16">Transforming followers into customers requires a solid strategy. This post offers insights on using social media as a powerful tool convert.</p>
																<div className="author-area">
																	<div className="author">
																		<div className="author-tumb">
																			<img src="/assets/img/blog/blog1-author2.png" alt="alex" />
																		</div>
																		<span className="author-text">Judith Rodriguez</span>
																	</div>
																	<div className="date">
																		<span><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </span>
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