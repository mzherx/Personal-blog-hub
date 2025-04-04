import Link from 'next/link'

export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch }: any) {
	return (
		<>
			<header>
				<div className={`header-area header-area2 d-none d-lg-block ${scroll ? 'sticky' : ''}`} id="header">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="header-elements">
									<div className="site-logo">
										<Link href="/">
											<img src="/assets/img/logo/white-logo.png" alt="alex" />
										</Link>
									</div>
									<div className="main-menu-ex main-menu-ex1">
										<ul>
											<li className="dropdown-menu-parrent">
												<Link href="/blog" className="main1">Blogs</Link>
											</li>
											<li className="dropdown-menu-parrent">
												<Link href="/latest-blog" className="main1">Posts</Link>
											</li>
											<li className="dropdown-menu-parrent">
												<Link href="/categories" className="main1">Categories</Link>
											</li>
											
											<li className="dropdown-menu-parrent">
												<Link href="/author" className="main1">Author</Link>
											</li>
											<li className="dropdown-menu-parrent">
												<Link href="/contact" className="main1">Contact</Link>
											</li>
										</ul>
									</div>
									<div className="header1-buttons">
										<div className="vl-search-top">
											<button className="search-open-btn"><i className="fa-regular fa-magnifying-glass"  onClick={handleSearch}/></button>
										</div>
										<Link className="theme-btn2" href="/blog">Explore Articles </Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
