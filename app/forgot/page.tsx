

import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Forgot() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div className="login-page sp bg-cover" style={{ backgroundImage: 'url(/assets/img/bg/login-page-bg.jpg)' }}>
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="inner-main-heading">
									<div className="page-prog">
										<Link href="/#">Home</Link>
										<span><i className="fa-solid fa-angle-right" /></span>
										<p className="bold">Forgot Password</p>
									</div>
									<h1>Forgot Password</h1>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-5 m-auto">
								<div className="login-form">
									<div className="text-center">
										<div className="forgot-icon">
											<img src="/assets/img/icons/forgot-icon.svg" alt="alex" />
										</div>
										<h3 className="mt-20">Forgot Your Password?</h3>
										<p>If you forgot your password, please enter your email below and we will send you a recovery link.</p>
									</div>
									<form action="#">
										<div className="single-input">
											<label>Email Address</label>
											<input type="email" placeholder="Email Address" />
										</div>
										<div className="button mt-30">
											<button type="submit" className="theme-btn1">Send Recovery Link</button>
										</div>
										<div className="text-center">
											<p className="text"><label> Remember your password </label><Link href="/login">Login</Link></p>
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