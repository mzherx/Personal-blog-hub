

import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Login() {

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
										<p className="bold">Login</p>
									</div>
									<h1>Login</h1>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-5 m-auto">
								<div className="login-form">
									<h3>Welcome Back</h3>
									<p>Please fill your email and password to sign in.</p>
									<form action="#">
										<div className="single-input">
											<label>Email</label>
											<input type="text" placeholder="Email address" />
										</div>
										<div className="single-input">
											<label>Password</label>
											<input type="password" placeholder="Enter your password" />
										</div>
										<div className="button mt-30">
											<button type="submit" className="theme-btn1">Sign In</button>
										</div>
										<div className="text-center">
											<p className="text">Don’t have an account? <Link href="/#">Sign Up Today.</Link> <br /><Link href="/#">Forgot Password</Link></p>
											<p className="or"><span>Or</span></p>
											<Link href="/#" className="google-btn"><img src="/assets/img/icons/google.svg" alt="alex" /> Sign Up With Google</Link>
											<Link href="/#" className="google-btn mt-20"><img src="/assets/img/icons/facebook.svg" alt="alex" /> Sign Up With Facebook</Link>
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