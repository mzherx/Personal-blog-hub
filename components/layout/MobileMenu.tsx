'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key: any) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>
			<div className="mobile-header mobile-header-main d-block d-lg-none">
				<div className="container-fluid">
					<div className="col-12">
						<div className="mobile-header-elements">
							<div className="mobile-logo">
								<Link href="/index1"><img src="/assets/img/logo/header-logo1.png" alt="alex" /></Link>
							</div>
							<div className="mobile-nav-icon" onClick={handleMobileMenu}>
								<i className="fa-duotone fa-bars-staggered" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`mobile-sidebar d-block d-lg-none ${isMobileMenu ? 'mobile-menu-active' : ''}`}>
				<div className="logo-m">
					<Link href="/"><img src="/assets/img/logo/header-logo1.png" alt="alex" /></Link>
				</div>
				<div className="menu-close" onClick={handleMobileMenu}>
					<i className="fa-solid fa-xmark" />
				</div>
				<div className="mobile-nav">
					<ul>
						<li className="has-dropdown">
							<span className={`submenu-button ${isAccordion == 1 ? 'submenu-opened' : ''}`} onClick={() => handleAccordion(1)}><em /></span>
							<Link href="/#">Home </Link>
							<ul className="sub-menu" style={{ display: `${isAccordion == 1 ? "block" : "none"}` }}>
								<li><Link href="/">Home 1</Link></li>
								<li><Link href="/index2">Home 2</Link></li>
								<li><Link href="/index3">Home 3</Link></li>
								<li><Link href="/index4">Home 4</Link></li>
							</ul>
						</li>
						<li className="has-dropdown">
							<span className={`submenu-button ${isAccordion == 2 ? 'submenu-opened' : ''}`} onClick={() => handleAccordion(2)}><em /></span>
							<Link href="/#">Blog</Link>
							<ul className="sub-menu" style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}>
								<li><Link href="/blog">Blog 01</Link></li>
								<li><Link href="/blog2">Blog 02</Link></li>
								<li><Link href="/blog3">Blog 03</Link></li>
							</ul>
						</li>
						<li className="has-dropdown">
							<span className={`submenu-button ${isAccordion == 3 ? 'submenu-opened' : ''}`} onClick={() => handleAccordion(3)}><em /></span>
							<Link href="/#">Single Posts</Link>
							<ul className="sub-menu" style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}>
								<li><Link href="/blog-details1">Standard Format</Link></li>
								<li><Link href="/blog-details2">Split Format</Link></li>
								<li><Link href="/blog-details3">Overlay Format</Link></li>
								<li><Link href="/blog-details-sidebar-left">Sidebar Left</Link></li>
								<li><Link href="/blog-details-sidebar-right">Sidebar Right</Link></li>
								<li><Link href="/blog-single">Single Post</Link></li>
							</ul>
						</li>
						<li className="has-dropdown">
							<span className={`submenu-button ${isAccordion == 4 ? 'submenu-opened' : ''}`} onClick={() => handleAccordion(4)}><em /></span>
							<Link href="/#">Pages</Link>
							<ul className="sub-menu" style={{ display: `${isAccordion == 4 ? "block" : "none"}` }}>
								<li><Link href="/author">Author</Link></li>
								<li><Link href="/search">Search Result</Link></li>
								<li><Link href="/contact">Contact Us</Link></li>
								<li><Link href="/social-media">Social Media</Link></li>
								<li><Link href="/404">404</Link></li>
							</ul>
						</li>
						<li className="has-dropdown has-dropdown1">
							<span className={`submenu-button ${isAccordion == 5 ? 'submenu-opened' : ''}`} onClick={() => handleAccordion(5)}><em /></span>
							<Link href="/#" className="main">Account</Link>
							<ul className="sub-menu" style={{ display: `${isAccordion == 5 ? "block" : "none"}` }}>
								<li><Link href="/blog">Blog 01</Link></li>
								<li><Link href="/blog2">Blog 02</Link></li>
								<li><Link href="/blog-details-sidebar-left">Details Left</Link></li>
								<li><Link href="/blog-details-sidebar-right">Details Right</Link></li>
								<li><Link href="/blog-single">Single Blog</Link></li>
							</ul>
						</li>
						<li><Link href="/contact">Contact Us</Link></li>
					</ul>
					<div className="mobile-button">
						<Link className="theme-btn1" href="/contact">Get A Quote <i className="fa-solid fa-arrow-right" /></Link>
					</div>
					<div className="footer-contact-area1 md:pl-0 pl-20 sm:pl-0 mt-30">
						<h3 className="text-24 leading-26 font-semibold title1 pb-10">Get in touch</h3>
						<div className="contact-box d-flex">
							<div className="icon">
								<img src="/assets/img/icons/footer1-icon1.svg" alt="alex" />
							</div>
							<div className="text">
								<Link href="/mailto:contact@alex.com">contact@alex.com</Link>
							</div>
						</div>
						<div className="contact-box d-flex">
							<div className="icon">
								<img src="/assets/img/icons/footer1-icon2.svg" alt="alex" />
							</div>
							<div className="text">
								<Link href="/#">123 Innovation Drive,<br />
									Tech City, ST 12345, USA</Link>
							</div>
						</div>
						<div className="contact-box d-flex">
							<div className="icon">
								<img src="/assets/img/icons/footer1-icon3.svg" alt="alex" />
							</div>
							<div className="text">
								<Link href="/tel:123-456-7890">123-456-7890</Link>
							</div>
						</div>
					</div>
					<div className="contact-infos">
						<h3>Our Social Network</h3>
						<ul className="social-icon">
							<li>
								<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
							</li>
							<li>
								<Link href="/#"><i className="fa-brands fa-x-twitter" /></Link>
							</li>
							<li>
								<Link href="/#"><i className="fa-brands fa-youtube" /></Link>
							</li>
							<li>
								<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}
