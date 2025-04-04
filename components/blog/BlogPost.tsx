'use client'
import allData from "@/util/blog.json"
import React, { useEffect, useState, useCallback } from "react"
import BlogCard1 from "./BlogCard1"
import BlogCard2 from "./BlogCard2"
import BlogCard3 from "./BlogCard3"
import BlogCard4 from "./BlogCard4"
import Pagination from "./Pagination"

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
	showItem = 4, // Default to 4 if not provided
	video,
	formatIcon,
	latest,
	showStart = 0,
	showEnd = 5
}: BlogPostProps) {
	const [currentPage, setCurrentPage] = useState(1)
	const [pagination, setPagination] = useState<number[]>([])
	const [limit, setLimit] = useState(showItem)

	// Ensure data slicing is safe
	const data: BlogItem[] = allData.slice(showStart, showEnd) || []
	const pages = Math.ceil(data.length / limit)

	// Memoized function to prevent unnecessary re-creation
	const createPagination = useCallback(() => {
		const arr = Array.from({ length: pages }, (_, idx) => idx + 1)
		setPagination(arr)
	}, [pages])

	useEffect(() => {
		createPagination()
	}, [limit, data.length, createPagination])

	const startIndex = (currentPage - 1) * limit
	const endIndex = startIndex + limit
	const getPaginatedProducts = data.slice(startIndex, endIndex)

	const paginationItem = 4 // Number of pagination buttons shown
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
			{data.length === 0 ? (
				<h3>No Products Found</h3>
			) : (
				getPaginatedProducts.map((item, i) => (
					<React.Fragment key={item.id}>
						{!style && <BlogCard1 item={item} desc={desc} col={col} />}
						{style === 1 && <BlogCard1 item={item} desc={desc} col={col} />}
						{style === 2 && <BlogCard2 item={item} desc={desc} col={col} />}
						{style === 3 && <BlogCard3 item={item} desc={desc} col={col} />}
						{style === 4 && <BlogCard4 item={item} desc={desc} col={col} />}
					</React.Fragment>
				))
			)}

			{showPagination && pages > 1 && (
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
