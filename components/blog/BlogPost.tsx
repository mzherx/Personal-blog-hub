'use client'
import allData from "@/util/blog.json"
import React, { useEffect, useState } from "react"
import BlogCard1 from "./BlogCard1"
import BlogCard2 from "./BlogCard2"
import BlogCard3 from "./BlogCard3"
import BlogCard4 from "./BlogCard4"
import Pagination from "./Pagination"
// import BlogCard5 from "./BlogCard5";
// import BlogCard6 from "./BlogCard6";
// import BlogCard7 from "./BlogCard7";

// Define the type for the individual blog item
interface BlogItem {
	id: number
	title: string
	img: string
	category: string
	author: string
	date: string
}


// Define the props for the BlogPost component
interface BlogPostProps {
	style?: number
	showPagination?: boolean
	desc?: boolean
	col?: string
	showItem?: number
	video?: boolean
	formatIcon?: boolean
	latest?: boolean
	showStart?: number
	showEnd?: number
}

export default function BlogPost({
	style,
	showPagination,
	desc,
	col,
	showItem,
	video,
	formatIcon,
	latest,
	showStart = 0,
	showEnd = 5
}: BlogPostProps) {
	const data: BlogItem[] = allData.slice(showStart, showEnd)  // Ensure the data is typed as BlogItem[]

	const [currentPage, setCurrentPage] = useState(1)
	const [pagination, setPagination] = useState<number[]>([])
	const [limit, setLimit] = useState(showItem || 4) // Default to 4 if not provided

	// Calculate total number of pages
	const pages = Math.ceil(data.length / limit)

	useEffect(() => {
		createPagination()
	}, [limit, data.length])

	const createPagination = () => {
		let arr = new Array(pages)
			.fill(null)
			.map((_, idx) => idx + 1)
		setPagination(arr)
	}

	const startIndex = currentPage * limit - limit
	const endIndex = startIndex + limit
	const getPaginatedProducts = data.slice(startIndex, endIndex)

	const paginationItem = 4 // Limit pagination items per page
	let start = Math.floor((currentPage - 1) / paginationItem) * paginationItem
	let end = start + paginationItem
	const getPaginationGroup = pagination.slice(start, end)

	const next = () => {
		setCurrentPage((page) => Math.min(page + 1, pages))
	}

	const prev = () => {
		setCurrentPage((page) => Math.max(page - 1, 1))
	}

	const handleActive = (item: number) => {
		setCurrentPage(item)
	}

	return (
		<>
			{getPaginatedProducts.length === 0 && <h3>No Products Found</h3>}

			{getPaginatedProducts.map((item, i) => (
				<React.Fragment key={i}>
					{/* Rendering the title, content, and excerpt by accessing the `rendered` property */}
					{!style && <BlogCard1 item={item} desc={desc} col={col} />}
					{style === 1 && <BlogCard1 item={item} desc={desc} col={col} />}
					{style === 2 && <BlogCard2 item={item} desc={desc} col={col} />}
					{style === 3 && <BlogCard3 item={item} desc={desc} col={col} />}
					{style === 4 && <BlogCard4 item={item} desc={desc} col={col} />}
				</React.Fragment>
			))}
			{showPagination && (
				<>
					<div className="space60" />
					<Pagination
						getPaginationGroup={getPaginationGroup}
						currentPage={currentPage}
						pages={pages}
						next={next}
						prev={prev}
						handleActive={handleActive}
					/>
				</>
			)}
		</>
	)
}
