import Link from "next/link"

export default function BlogCard4({ col, item }: any) {
	return (
		<div data-aos="fade-up" data-aos-duration={400} data-aos-delay={100}>
			<div className="blog4-single-box mt-30">
				<div className="row align-items-center">
					<div className="col-lg-4">
						<div className="image image-anime _relative">
							<img src={`/assets/img/blog/${item.img}`} alt={item.title} />
						</div>
					</div>
					<div className="col-lg-8">
						<div className="content-area">
							<div className="author-area3">
								<Link href="/#">
									<img src="/assets/img/icons/date1.svg" alt="alex" /> {item.date}
								</Link>
								<Link href="/author" className="author">
									<img src="/assets/img/icons/author3.svg" alt="alex" /> {item.author}
								</Link>
							</div>
							<div className="heading4">
								<h4>
									<Link href={`/blog/${item.id}`}>{item.title}</Link>
								</h4>
								<Link href={`/blog/${item.id}`} className="learn">
									Read More <span><i className="fa-regular fa-arrow-right" /></span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
