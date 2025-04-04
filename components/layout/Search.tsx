import Link from 'next/link'

export default function Search({ isSearch, handleSearch }: any) {
	return (
		<>
			<div className={`search__popup ${isSearch ? 'search-opened' : ''}`}>
				<div className="container">
					<div className="row">
						<div className="col-xxl-12">
							<div className="search__wrapper">
								<div className="search__top d-flex justify-content-between align-items-center">
									<div className="search__logo">
										<Link href="/">
											<img src="/assets/img/logo/white-logo.png" alt="alex" />
										</Link>
									</div>
									<div className="search__close" onClick={handleSearch}>
										<button type="button" className="search__close-btn search-close-btn">
											<svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M1 1L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</button>
									</div>
								</div>
								<div className="search__form">
									<form action="#">
										<div className="search__input">
											<input className="search-input-field" type="text" placeholder="Type here to search..." />
											<span className="search-focus-border" />
											<button type="submit">
												<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
