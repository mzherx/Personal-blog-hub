export default function Pagination({
	prev,
	currentPage,
	getPaginationGroup,
	next,
	pages,
	handleActive,
}: any) {
	return (
		<>
			<div className="theme-pagination text-center">
				<ul>
					{getPaginationGroup.length <= 0 ? null : (
						<li onClick={prev} className="next_link page-item">
							{currentPage === 1 ? null : (
								<a>
									<i className="fa-solid fa-angle-left" />
								</a>
							)}
						</li>
					)}

					{getPaginationGroup.map((item: any, index: any) => {
						return (
							<li
								onClick={() => handleActive(item)}
								key={index}

							>
								<a className={
									currentPage === item
										? "active"
										: ""
								}>{item}</a>
							</li>
						)
					})}

					{getPaginationGroup.length <= 0 ? null : (
						<li onClick={next}>
							{currentPage >= pages ? null : (
								<a>
									<i className="fa-solid fa-angle-right" />
								</a>
							)}
						</li>
					)}
				</ul>
			</div>
		</>
	)
}