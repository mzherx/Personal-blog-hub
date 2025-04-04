
'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Header2 from './header/Header2'
import MobileMenu from './MobileMenu'
import Search from './Search'

interface LayoutProps {
	headerStyle?: Number
	footerStyle?: Number
	children?: React.ReactNode
	breadcrumbTitle?: string
}


export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children }: LayoutProps) {
	const [scroll, setScroll] = useState<boolean>(false)
	// Mobile Menu
	const [isMobileMenu, setMobileMenu] = useState<boolean>(false)
	const handleMobileMenu = (): void => setMobileMenu(!isMobileMenu)
	// Search
	const [isSearch, setSearch] = useState<boolean>(false)
	const handleSearch = (): void => setSearch(!isSearch)

	useEffect(() => {
		AOS.init()

		const handleScroll = (): void => {
			const scrollCheck: boolean = window.scrollY > 100
			if (scrollCheck !== scroll) {
				setScroll(scrollCheck)
			}
		}

		document.addEventListener("scroll", handleScroll)

		return () => {
			document.removeEventListener("scroll", handleScroll)
		}
	}, [scroll])

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		const revealContainers = document.querySelectorAll('.reveal')

		revealContainers.forEach((container) => {
			const image = container.querySelector('img')
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					toggleActions: 'play none none none',
				},
			})

			tl.set(container, { autoAlpha: 1 })
			tl.from(container, 1.5, { xPx: -100, ease: 'power2.out' })
			tl.from(image, 1.5, { xPx: 100, scale: 1.3, delay: -1.5, ease: 'power2.out' })
		})
	}, [])
	return (
		<>
			<div id="top" />
			<Search isSearch={isSearch} handleSearch={handleSearch} />
			{!headerStyle && <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} />}
			{headerStyle == 1 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} /> : null}
			{headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} /> : null}
			{headerStyle == 3 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} /> : null}
			{headerStyle == 4 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} /> : null}
			<MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />



			{children}

			{!footerStyle && < Footer1 />}
			{footerStyle == 1 ? < Footer1 /> : null}
			{footerStyle == 2 ? < Footer2 /> : null}

			<BackToTop target="#top" />
		</>
	)
}
