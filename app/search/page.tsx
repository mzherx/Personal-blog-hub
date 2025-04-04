

import BlogPost from '@/components/blog/BlogPost'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Search() {

	return (
		<>

			<Layout headerStyle={2} footerStyle={2}>
				<div>
					<div className="inner-hero bg-cover" style={{ backgroundImage: 'url(/assets/img/bg/hero2-bg.jpg)' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="main-heading">
										<div className="page-prog">
											<Link href="/#" style={{ color: '#ffffff' }}>Home</Link>
											<span style={{ color: '#ffffff' }}><i className="fa-solid fa-angle-right" /></span>
											<p style={{ color: '#ffffff' }}>Blog</p>
											<span style={{ color: '#ffffff' }}><i className="fa-solid fa-angle-right" /></span>
											<p style={{ color: '#ffffff' }}>Category</p>
											<span style={{ color: '#ffffff' }}><i className="fa-solid fa-angle-right" /></span>
											<p className="bold" style={{ color: '#ffffff' }}>Search Result</p>
										</div>
										<h1 style={{ color: '#ffffff' }}>Search Result</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== HERO AREA END=======*/}
					{/*===== BLOG AREA START=======*/}
					<div className="blog1 blog-formets-sec sp bg1 _relative">
						<div className="container">
							<div className="row align-items-center mb-60">
								<div className="col-lg-2 col-md-6">
									<div className="blog-formets">
										<Link href="/#"><img src="/assets/img/icons/blog-formet1.svg" alt="alex" /></Link>
										<Link href="/#"><img src="/assets/img/icons/blog-formet2.svg" alt="alex" /></Link>
										<Link href="/#"><img src="/assets/img/icons/blog-formet3.svg" alt="alex" /></Link>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="search-inputs">
										<input className="ps-4" type="search" placeholder="Search..." />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="d-flex gap-3 justify-content-end">
										<div className="dropdown-area">
											<p>Short by</p>
											<select>
												<option value="Social Media">Social Media</option>
												<option value="Brand">Brand</option>
												<option value="Content">Content</option>
												<option value="Trending">Trending</option>
												<option value="Gen-z">Gen-z</option>
											</select>
										</div>
										<div className="dropdown-area">
											<p>Show</p>
											<select>
												<option value={9}>9</option>
												<option value={16}>16</option>
												<option value={24}>24</option>
											</select>
										</div>
									</div>
								</div>

							</div>
							<div className="row">
								<div className="col-lg-12">
									<div className="blog1-posts-area">
										<div className="row">

											<BlogPost showItem={6} showStart={11} showEnd={20} style={1} showPagination={true} col="col-md-6 col-lg-4" />

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