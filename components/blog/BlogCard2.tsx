import Link from "next/link"

export default function BlogCard2({ col, item }: any) {
	return (
		<div className={col}>
			<div className="blog2-meet-bottom-box md:mt-30 sm:mt-30 mb-3">
				<div>
					<div className="image">
						<img src={`/assets/img/blog/${item.img}`} alt={item.title} />
					</div>
				</div>
				<div className="content-area">
					<div className="author-area2">
						<Link href="/#">
							<img src="/assets/img/icons/date1.svg" alt="date" /> {item.date}
						</Link>
						<Link href="/author" className="author">
							<img src="/assets/img/icons/author2.svg" alt="author" /> {item.author}
						</Link>
					</div>
					<div className="heading2">
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
	)
}
