import Link from "next/link"

export default function BlogCard1({ col, item }: any) {
	return (
		<div className={col} data-aos="fade-up" data-aos-offset={50} data-aos-duration={400} data-aos-delay={0}>
			<div className="blog1-single-box mb-4">
				<div className="thumbnail image-anime">
					<img src={`/assets/img/blog/${item.img}`} alt={item.title} />
				</div>
				<div className="heading1">
					<div className="social-area">
						<Link href="/social-media" className="social">Social Media</Link>
						<Link href="/categories" className="time">
							<img src="/assets/img/icons/time1.svg" alt="alex" /> 3 min read
						</Link>
					</div>
					<h4>
						<Link href="/blog-single">{item.title}</Link>
					</h4>
					<p className="mt-16">
						This post explores strategies to help create an authentic and memorable brand presence on social media that resonates with the audience.
					</p>
					<div className="author-area">
						<div className="author">
							<div className="author-tumb">
								<img src="/assets/img/blog/blog1-author1.png" alt={item.author} />
							</div>
							<Link href="/author" className="author-text">{item.author}</Link>
						</div>
						<div className="date">
							<Link href="/#">
								<img src="/assets/img/icons/date1.svg" alt="alex" /> {item.date}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
