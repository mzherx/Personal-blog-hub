
import Link from 'next/link'
import BlogPost from '../blog/BlogPost'

export default function BlogAllArea1() {
	return (
		<>

			<div className="blog4-all sp">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<div className="blog4-boxs-all">
								<h5 className="pb-10">Our Featured Post</h5>
								<BlogPost showItem={3} showStart={35} showEnd={39} style={4} showPagination={true} />
							</div>
						</div>
						<div className="col-lg-4">
							<div className="blog4-sidebar-area mt-70 ml-30 sm:ml-0 md:ml-0 md:mt-30 sm:mt-30">
								<div className="sidebar-widget_2 _search-area1">
									<h3>Search</h3>
									<form action="#">
										<input type="text" placeholder="Search..." />
									</form>
								</div>
								<div className="sidebar-widget_2 _author-intro mt-40">
									<div className="sidebar-author-thumb text-center">
										<img src="/assets/img/blog/sidebar-author1.png" alt="alex" />
										<h4>Alex Robertson</h4>
										<div className="heading1">
											<p>Personal Blog Writer</p>
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
											</ul>
										</div>
									</div>
								</div>
								<div className="sidebar-widget_2 instagram-feed mt-40">
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
									<Link href="/#" className="theme-btn6 mt-30"><span className="text">View ON Instagram</span><span className="arrow-all"><span className="arrow1"><i className="fa-regular fa-arrow-right" /></span><span className="arrow2"><i className="fa-regular fa-arrow-right" /></span></span></Link>
								</div>
								<div className="sidebar-widget_2 mt-40 _trending-post">
									<h3>Our Trending Post</h3>
									<div className="trending-post">
										<div className="image image-anime _recent-posts _relative">
											<img src="/assets/img/blog/sidebar2-trending-post.png" alt="alex" />
										</div>
										<div className="content-area">
											<div className="author-area">
												<Link href="/#" className="date"><img src="/assets/img/icons/date1.svg" alt="alex" />
													Oct 15, 2025</Link>
												<Link href="/#" className="author"><img src="/assets/img/icons/author3.svg" alt="alex" /> Rhonda Rhodes</Link>
											</div>
											<h4><Link href="/blog-single">Discover the principles behind A designs that
												captivate engage.</Link></h4>
											<Link href="/blog-single" className="learn">Read More <span><i className="fa-regular fa-arrow-right" /></span></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
