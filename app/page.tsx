import Layout from "@/components/layout/Layout"
import BlogArea2 from "@/components/sections/BlogArea2"
import BlogArea3 from "@/components/sections/BlogArea3"
import BlogArea4 from "@/components/sections/BlogArea4"

import CtaArea2 from "@/components/sections/CtaArea2"
import HeroArea2 from "@/components/sections/HeroArea2"
export default function Home() {

	return (
		<>

			<Layout headerStyle={2} footerStyle={2}>
				<HeroArea2 />
				<BlogArea2 />
				<div className="space100" />
				<BlogArea3 />
				<BlogArea4 />
				<CtaArea2 />
				
			</Layout>
		</>
	)
}