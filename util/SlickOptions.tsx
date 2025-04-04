
// Extend ArrowProps to include className
interface ArrowProps {
	currentSlide?: number
	slideCount?: number
	onClick?: () => void
	className?: string // Add className to ArrowProps
}

const SlickArrowLeft = ({ currentSlide, slideCount, className, ...props }: ArrowProps) => (
	<button
		{...props}
		className={`slick-prev slick-arrow ${currentSlide === 0 ? "slick-disabled" : ""} ${className}`}
		aria-hidden="true"
		aria-disabled={currentSlide === 0}
		type="button"
	>
		Previous
	</button>
)

const SlickArrowRight = ({ currentSlide, slideCount, className, ...props }: ArrowProps) => (
	<button
		{...props}
		className={`slick-next slick-arrow ${currentSlide === slideCount! - 1 ? "slick-disabled" : ""} ${className}`}
		aria-hidden="true"
		aria-disabled={currentSlide === slideCount! - 1}
		type="button"
	>
		Next
	</button>
)

// Slider settings for multiple sliders
const sidebarSliderWidget = {
	margin: 30,
	slidesToShow: 1,
	arrows: false,
	centerMode: false,
	dots: true,
	loop: true,
	draggable: true,
	autoplay: true,
	autoplaySpeed: 4000,
	fade: true,
	fadeSpeed: 1000,
	responsive: [
		{
			breakpoint: 769,
			settings: {
				arrows: false,
				centerMode: false,
				centerPadding: "40px",
				slidesToShow: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: false,
				centerPadding: "40px",
				slidesToShow: 1,
			},
		},
	],
}

const blog2MeetsSlider = {
	margin: 30,
	slidesToShow: 5,
	arrows: true,
	prevArrow: <SlickArrowLeft className="blog2-slider-prev" />,
	nextArrow: <SlickArrowRight className="blog2-slider-next" />,
	centerMode: false,
	dots: false,
	loop: true,
	draggable: true,
	autoplay: true,
	autoplaySpeed: 4000,
	fade: false,
	fadeSpeed: 1000,
	responsive: [
		{
			breakpoint: 769,
			settings: {
				arrows: false,
				centerMode: false,
				centerPadding: "40px",
				slidesToShow: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: false,
				centerPadding: "40px",
				slidesToShow: 1,
			},
		},
	],
}

const blog4Slider = {
	margin: 30,
	slidesToShow: 1,
	arrows: true,
	prevArrow: <SlickArrowLeft className="blog4-slider-prev" />,
	nextArrow: <SlickArrowRight className="blog4-slider-next" />,
	centerMode: false,
	dots: false,
	loop: true,
	draggable: true,
	autoplay: true,
	autoplaySpeed: 4000,
	fade: false,
	fadeSpeed: 1000,
	responsive: [
		{
			breakpoint: 769,
			settings: {
				arrows: false,
				centerMode: false,
				centerPadding: "40px",
				slidesToShow: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: false,
				centerPadding: "40px",
				slidesToShow: 1,
			},
		},
	],
}

// Export sliders
export { blog2MeetsSlider, blog4Slider, sidebarSliderWidget }

