

'use client'
import Layout from "@/components/layout/Layout"
import { sidebarSliderWidget } from '@/util/SlickOptions'
import Link from "next/link"
import Slider from "react-slick"
export default function BlogDetailsSidebarLeft() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<div className="inner-hero bg-cover" style={{ backgroundImage: 'url(/assets/img/bg/inner-hero-bg.jpg)' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="main-heading">
										<div className="page-prog">
											<Link href="/">Home</Link>
											<span><i className="fa-solid fa-angle-right" /></span>
											<p>Blog</p>
											<span><i className="fa-solid fa-angle-right" /></span>
											<p className="bold">Blog Left Sidebar</p>
										</div>
										<h1>Blog Left Sidebar</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== HERO AREA END=======*/}
					{/*===== BLOG DETAILS AREA START=======*/}
					<div className="blog-details1-all sp">
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="row align-items-center">
										<div className="col-lg-6 m-auto">
											<div className="blog-page3-single-box text-center">
												<div className="heading1">
													<div className="social-area">
														<div className="author-area">
															<div className="author">
																<div className="author-tumb">
																	<img className="w-full" src="/assets/img/blog/blog1-author1.png" alt="alex" />
																</div>
																<Link href="/author" className="author-text">Kimberly Mastrangelo</Link>
															</div>
															<div className="date">
																<Link href="/#"><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </Link>
															</div>
														</div>
														<Link href="/categories" className="time mt-16"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
													</div>
													<h2>The Art of Building a Strong Personal Brand on Social Media</h2>
													<p className="mt-16">In today’s digital age, building a strong personal brand on social media is more crucial than ever. A compelling personal brand not only establishes your credibility and trustworthiness but also opens doors to new opportunities, connects you with like-minded individuals,</p>
												</div>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="thumbnail image-anime _relative mt-20">
												<img className="w-full" src="/assets/img/blog/blog-details-image1.png" alt="alex" />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-4">
									<div className="blog1-sidebar-area mt-40 sm:ml-0 md:ml-0 md:mt-30 sm:mt-30">
										<div className="sidebar-details-widget_1 _search-area1">
											<h3>Search</h3>
											<form action="#">
												<input type="text" placeholder="Search..." />
											</form>
										</div>
										<div className="sidebar-details-widget_1 _author-intro mt-40">
											<div className="sidebar-author-thumb text-center">
												<img src="/assets/img/blog/sidebar-author1.png" alt="alex" />
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
										<div className="sidebar-details-widget_1 _recent-posts mt-40">
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
										<div className="sidebar-details-widget_1 mt-70 _experience">
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
										<div className="sidebar-details-widget_1 instagram-feed mt-40">
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
								<div className="col-lg-8">
									<div className="details content-area ml-40 md:ml-0 sm:mr-0 mt-40">
										<article>
											<div className="heading1">
												<p>In today’s digital age, building a strong personal brand on social media is more crucial than ever. A compelling personal brand not only establishes your credibility and trustworthiness but also opens doors to new opportunities, connects you with like-minded individuals, and can even generate income. With billions of users on social media platforms, carving out a unique space for yourself may seem daunting, but with the right strategies, you can create a brand that resonates.</p>
												<h3 className="mt-40">Understanding Your Personal Brand</h3>
												<p className="mt-16">Your personal brand is a reflection of who you are, what you stand for, and how you want others to perceive you. Before diving into the social media world, take some time to reflect on your values, interests, and goals. Ask yourself: What do I want to be known for? What are my unique strengths and passions? Who is my target audience?</p>
												<p className="mt-16">Once you have clarity on these questions, you can begin crafting a brand that authentically represents you. Remember, authenticity is key—people connect with genuine voices, so stay true to who you are and avoid the temptation to imitate others.</p>
											</div>
										</article>
										<article>
											<div className="heading1 mt-40">
												<h3>Choosing the Right Platforms</h3>
												<p className="mt-16">Different social media platforms serve different purposes, and each has its own user demographics. Selecting the right platforms for your brand is essential. For instance:</p>
												<p className="mt-16 p-with-sapn"><span>LinkedIn:</span> is ideal for professionals seeking to build a network within their industry.</p>
												<p className="mt-10 p-with-sapn"><span>Instagram:</span> is highly visual and works well for brands related to lifestyle, fashion, travel, and more.</p>
												<p className="mt-10 p-with-sapn"><span>Twitter:</span> is great for sharing quick thoughts, opinions, and joining conversations on trending topics.</p>
												<p className="mt-10 p-with-sapn"><span>TikTok:</span> has a young, highly engaged audience and is excellent for creating entertaining, relatable short videos.</p>
												<p className="mt-20">Choose platforms that align with your goals and where your target audience is most active. Instead of spreading yourself too thin across all platforms, focus on two or three and consistently deliver quality content.</p>
											</div>
										</article>
										<article>
											<div className="heading1 mt-50">
												<h3>Crafting a Consistent Brand Image</h3>
												<p className="mt-16">Your brand image is a combination of your visuals, tone, and messaging. Consistency across your profile photos, color scheme, and typography helps establish a memorable and professional look. Choose profile and cover photos that reflect your personality and niche.</p>
												<p className="mt-16">Beyond visuals, consider the tone and style of your posts. Are you aiming for a formal, professional voice or a casual, friendly vibe? Having a consistent tone helps your audience feel connected and fosters trust. Remember, consistency is not only about posting frequently but also about aligning your visuals, voice, and message.</p>
												<div className="row">
													<div className="col-md-6">
														<div className="image _relative image-anime mt-40">
															<img className="w-full" src="/assets/img/blog/blog-details-image2.png" alt="alex" />
														</div>
													</div>
													<div className="col-md-6">
														<div className="image _relative image-anime mt-40">
															<img className="w-full" src="/assets/img/blog/blog-details-image3.png" alt="alex" />
														</div>
													</div>
												</div>
											</div>
										</article>
										<article>
											<div className="heading1 mt-40">
												<h3>Creating Valuable Content</h3>
												<p className="mt-16">Content is the heart of personal branding on social media. To build a loyal audience, your content should educate, inspire, or entertain. Start by creating a content calendar and brainstorming ideas that align with your brand’s message. Here are some types of content to consider:</p>
												<p className="mt-16 p-with-sapn"><span>Educational Content:</span> Share insights, tips, or tutorials related to your expertise. Position yourself as a thought leader by delivering value.</p>
												<p className="mt-10 p-with-sapn"><span>Behind-the-Scenes:</span> Give a glimpse into your life or work process. This humanizes your brand and makes you more relatable.</p>
												<p className="mt-10 p-with-sapn"><span>Storytelling:</span> Use stories to connect emotionally with your audience. Share experiences, challenges, or milestones that have shaped your journey.</p>
												<p className="mt-10 p-with-sapn"><span>User Engagement:</span> Ask questions, create polls, or invite followers to share their experiences. This not only increases engagement but also strengthens your community.</p>
												<p className="mt-20">Plan a mix of these content types to keep your feed dynamic and engaging, and always remember to provide value.</p>
											</div>
										</article>
										<article>
											<div className="heading1 mt-50">
												<h3>Leveraging Hashtags and Keywords</h3>
												<p className="mt-16">Hashtags and keywords can dramatically improve the visibility of your content. Research popular and relevant hashtags in your niche and incorporate them into your posts. On platforms like Instagram and LinkedIn, hashtags help your content reach users who don’t follow you yet. However, avoid overloading your posts with too many hashtags—5-10 carefully selected ones are usually enough.</p>
												<p className="mt-20">Using keywords effectively in your profile and posts can also enhance discoverability, especially on platforms with search functions like LinkedIn and Twitter. Think of words and phrases your audience might use to find information in your niche, and strategically incorporate them into your bio, captions, and content.</p>
												<h3 className="mt-40">Staying Authentic and True to Your Brand</h3>
												<p className="mt-16">Finally, one of the most important aspects of personal branding is authenticity. Your audience can tell when you’re genuine and when you’re not, and they’re more likely to engage with a brand that feels real. Be transparent about your journey, share your wins and losses, and let your true personality shine through. Authenticity fosters trust, which is the foundation of any strong brand.</p>
												<p className="mt-16">As you grow, you may face pressure to conform to trends or present a certain image. Resist the urge to compromise on your values or misrepresent yourself. A strong personal brand is built on honesty, consistency, and the courage to be yourself.</p>
											</div>
										</article>
										<div className="clint-review">
											<p>"Your personal brand is the unique story that only you can tell. Own it, share it, and let it shine."</p>
											<span>Henry Fawyel</span>
										</div>
										<div className="comments-area">
											<div className="heading1 mt-40">
												<h3>Blog Comments (2)</h3>
											</div>
											<div className="tags-social-area">
												<div className="row align-items-center">
													<div className="col-md-7">
														<div className="tags">
															<ul>
																<li className="text">Tags:</li>
																<li><Link href="/#">Social Media</Link></li>
																<li><Link href="/#">UI/UX</Link></li>
																<li><Link href="/#">Business</Link></li>
															</ul>
														</div>
													</div>
													<div className="col-md-5">
														<div className="social footer-social1">
															<ul>
																<li className="text">Social:</li>
																<li>
																	<Link href="/#"><i className="fa-brands fa-facebook-f" /></Link>
																</li>
																<li>
																	<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
																</li>
																<li>
																	<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
											<div className="space30" />
											<div className="comment-box">
												<div className="top-area">
													<div className="author-area">
														<div className="image">
															<img src="/assets/img/blog/comment-author1.png" alt="alex" />
														</div>
														<div className="heading1 ml-20">
															<h4><Link href="/author">Mr. Ana Ritchie</Link></h4>
															<p className="mt-2">8/1/2025</p>
														</div>
													</div>
													<Link href="/#" className="reply-btn"><i className="fa-solid fa-reply" /> Reply</Link>
												</div>
												<div className="heading1 mt-20">
													<p>“This article is exactly what I needed! I've been trying to build my personal brand for a while but was getting stuck. The tips on content creation and engagement are super helpful—thanks for sharing!"</p>
												</div>
											</div>
											<div className="comment-box ml-60">
												<div className="top-area">
													<div className="author-area">
														<div className="image">
															<img src="/assets/img/blog/comment-author2.png" alt="alex" />
														</div>
														<div className="heading1 ml-20">
															<h4><Link href="/author">Matthew Kuhnemann</Link></h4>
															<p className="mt-2">8/2/2025</p>
														</div>
													</div>
													<Link href="/#" className="reply-btn"><i className="fa-solid fa-reply" /> Reply</Link>
												</div>
												<div className="heading1 mt-20">
													<p>“I love how this breaks down the importance of consistency and authenticity. It's easy to get caught up in trends, but staying true to yourself really is key. Great read!"</p>
												</div>
											</div>
										</div>
										<div className="details-contact-area">
											<div className="heading1">
												<h5>Leave a Reply</h5>
												<p className="mt-10">Provide clear contact information, including phone number, email, and address.</p>
											</div>
											<form action="#">
												<div className="row">
													<div className="col-md-6">
														<div className="single-input">
															<input type="text" placeholder="First Name" />
														</div>
													</div>
													<div className="col-md-6">
														<div className="single-input">
															<input type="text" placeholder="Last Name" />
														</div>
													</div>
													<div className="col-md-6">
														<div className="single-input">
															<input type="email" placeholder="Email" />
														</div>
													</div>
													<div className="col-md-6">
														<div className="single-input">
															<input type="number" placeholder="Phone" />
														</div>
													</div>
													<div className="col-md-12">
														<div className="single-input">
															<input type="text" placeholder="Subject" />
														</div>
													</div>
													<div className="col-md-12">
														<div className="single-input">
															<textarea rows={5} placeholder="Message" />
														</div>
														<div className="button mt-30">
															<button className="theme-btn1" type="submit">Get Started</button>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== BLOG DETAILS AREA START=======*/}
					{/*===== BLOG AREA START=======*/}
					<div className="details-page-boxs sp bg1">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 m-auto text-center">
									<div className="heading1">
										<h2>More Blogs</h2>
									</div>
								</div>
							</div>
							<div className="space30" />
							<div className="row">
								<div className="col-md-6 col-lg-4">
									<div className="blog1-single-box mt-30">
										<div className="thumbnail image-anime">
											<img src="/assets/img/blog/blog1-image6.png" alt="alex" />
										</div>
										<div className="heading1">
											<div className="social-area">
												<Link href="/social-media" className="social">Brand Consistency</Link>
												<Link href="/categories" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
											</div>
											<h4><Link href="/blog-single">Creating a Visual Identity: Tips for Aesthetic and Brand Consistency </Link></h4>
											<p className="mt-16">This post covers tips on color schemes, fonts, and visuals to keep your profile visually appealing and cohesive.</p>
											<div className="author-area">
												<div className="author">
													<div className="author-tumb">
														<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
													</div>
													<Link href="/author" className="author-text">Katie Sims</Link>
												</div>
												<div className="date">
													<Link href="/#"><img src="/assets/img/icons/date1.svg" alt="alex" /> Nov 6, 2025 </Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-4">
									<div className="blog1-single-box mt-30">
										<div className="thumbnail image-anime">
											<img src="/assets/img/blog/blog1-image7.png" alt="alex" />
										</div>
										<div className="heading1">
											<div className="social-area">
												<Link href="/social-media" className="social">Gen - Z</Link>
												<Link href="/categories" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
											</div>
											<h4><Link href="/blog-single">How to Build Authentic Connections with the New Generation</Link></h4>
											<p className="mt-16">Gen Z is reshaping digital interaction. Learn what matters to this generation and how to create authentic, meaningful content.</p>
											<div className="author-area">
												<div className="author">
													<div className="author-tumb">
														<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
													</div>
													<Link href="/author" className="author-text">David Elson</Link>
												</div>
												<div className="date">
													<Link href="/#"><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-4">
									<div className="blog1-single-box mt-30">
										<div className="thumbnail image-anime">
											<img src="/assets/img/blog/blog1-image8.png" alt="alex" />
										</div>
										<div className="heading1">
											<div className="social-area">
												<Link href="/social-media" className="social">Social Media</Link>
												<Link href="/categories" className="time"><img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read</Link>
											</div>
											<h4><Link href="/blog-single">Harnessing Analytics: Using Data to Refine Your Social Media Strategy</Link></h4>
											<p className="mt-16">Gen Z is reshaping digital interaction. Learn what matters to this generation and how to create authentic, meaningful content.</p>
											<div className="author-area">
												<div className="author">
													<div className="author-tumb">
														<img src="/assets/img/blog/blog1-author5.png" alt="alex" />
													</div>
													<Link href="/author" className="author-text">Kenneth Allen</Link>
												</div>
												<div className="date">
													<Link href="/#"><img src="/assets/img/icons/date1.svg" alt="alex" /> Oct 26, 2025 </Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== BLOG AREA START=======*/}
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

			</Layout >
		</>
	)
}