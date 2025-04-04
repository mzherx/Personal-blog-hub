
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Error404() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div className="login-page sp bg-cover" style={{ backgroundImage: 'url(/assets/img/bg/hero2-bg.jpg)' }}>
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="inner-main-heading">
									<div className="page-prog">
										<Link href="/"  style={{ color: '#ffffff' }}>Home</Link>
										<span style={{ color: '#ffffff' }}><i className="fa-solid fa-angle-right" /></span>
										<p className="bold" style={{ color: '#ffffff' }}>Page not found</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-5 m-auto">
								<div className="login-form">
									<div className="text-center">
										<div className="forgot-icon">
											<img src="/assets/img/shapes/404.png" alt="Alex" />
										</div>
										<h3 className="mt-5 mb-2">Error 404</h3>
										<p className="mb-5">This page is outside of the universe</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</Layout>
		</>
	)
}