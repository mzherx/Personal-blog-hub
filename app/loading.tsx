
export default function Loading() {
	return (
		<>
			

			<div className="sec-preloader">
				<div className="overlay-preloader flex cac vac" id="preloader">
					<div>
						<div className="loader preloader flex vac">
							<svg width={200} height={200}>
								<circle className="background" cx={90} cy={90} r={80} transform="rotate(-90, 100, 90)" />
								<circle className="outer" cx={90} cy={90} r={80} transform="rotate(-90, 100, 90)" />
							</svg>
							<span className="circle-background" />
							<span className="logo animated fade-in"> </span>
						</div>
					</div>
				</div>
			</div>


		</>
	)
}
