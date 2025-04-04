import Link from "next/link"

export default function BlogCard3({ col, item }: any) {
	return (
		<div className={col} data-aos-offset={50} data-aos="fade-up" data-aos-duration={400} data-aos-delay={100}>
			<div className="blog3-box mt-30">
				<div className="image _relative image-anime">
					<img src={`/assets/img/blog/${item.img}`} alt={item.title} />
				</div>
				<div className="heading3 mt-20">
					<div className="author-area3">
						<Link href="/#">
							<img src="/assets/img/icons/date1.svg" alt="alex" /> {item.date}
						</Link>
						<Link href="/author" className="author">
							<img src="/assets/img/icons/author3.svg" alt="alex" /> {item.author}
						</Link>
					</div>
					<div className="heading3">
						<h4>
							<Link href={`/blog/${item.id}`}>{item.title}</Link>
						</h4>
						<p className="mt-16">
							Highlight key emerging technologies such as machine learning, blockchain, virtual reality, and edge computing.
						</p>
						<Link href={`/blog/${item.id}`} className="learn">
							Read More <span><i className="fa-regular fa-arrow-right" /></span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
