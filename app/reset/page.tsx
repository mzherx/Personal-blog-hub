

import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Reset() {

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
										<p className="bold">Reset Password</p>
									</div>
									<h1>Reset Password</h1>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-5 m-auto">
								<div className="login-form">
									<div className="text-center">
										<div className="forgot-icon">
											<img src="/assets/img/icons/reset.svg" alt="alex" />
										</div>
										<h3 className="mt-20">Reset Password</h3>
										<p>If you want to reset your password, please enter your new password below.</p>
									</div>
									<form action="#">
										<div className="single-input">
											<label>New Password</label>
											<input type="password" placeholder="New Password" />
										</div>
										<div className="single-input">
											<label>Confirm Password</label>
											<input type="password" placeholder="Confirm Password" />
										</div>
										<div className="button mt-30">
											<button type="submit" className="theme-btn1">Change Password</button>
										</div>
										<div className="text-center">
											<p className="text">If you didn’t request a password recovery link, please ignore this.</p>
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