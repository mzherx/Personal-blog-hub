

import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Verify() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div className="login-page sp bg-cover" style={{ backgroundImage: 'url(/assets/img/bg/login-page-bg.jpg)' }}>
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="inner-main-heading">
									<div className="page-prog">
										<Link href="/">Home</Link>
										<span><i className="fa-solid fa-angle-right" /></span>
										<p className="bold">Verify Your Email</p>
									</div>
									<h1>Verify Your Email</h1>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-5 m-auto">
								<div className="login-form">
									<div className="text-center">
										<div className="forgot-icon">
											<img src="/assets/img/icons/verify.svg" alt="alex" />
										</div>
										<h3 className="mt-20">Verify Your Email!</h3>
										<p>We sent you a verification link via email. Please click it to verify your email address if you don’t see it, please wait up to 5 mins or check your SPAM folder.</p>
									</div>
									<form action="#">
										<div className="button mt-30">
											<button type="submit" className="theme-btn1">Open Email</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>

			</Layout>
		</>
	)
}