import Link from "next/link"
import { useRouter } from "next/router"

export default function Menu() {
	const router = useRouter()

	return (
		<>

			<ul className="sub-menu">
				<Link href="/#" className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
				<Link href="/#" className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
			</ul>
		</>
	)
}
