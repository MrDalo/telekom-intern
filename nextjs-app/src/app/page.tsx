import Link from 'next/link';

export default function Home() {
	return (
		<main className="flex h-screen w-full flex-col items-center justify-center gap-10 overflow-hidden bg-[#09090b] px-4 py-16  md:flex-row md:px-8 lg:pr-12">
			<Link
				className=" nav-box-shadow flex flex-col items-center justify-center gap-4 rounded-[30px] bg-[#0e0e0e] px-8 py-6 duration-100 hover:scale-105 lg:px-12 lg:py-10"
				href="/table"
			>
				<svg
					width="155"
					height="154"
					viewBox="0 0 155 154"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className=" scale-75 lg:scale-90"
				>
					<path
						d="M0.5 19.25C0.5 14.1446 2.52812 9.24827 6.13819 5.63819C9.74827 2.02812 14.6446 0 19.75 0L135.25 0C140.355 0 145.252 2.02812 148.862 5.63819C152.472 9.24827 154.5 14.1446 154.5 19.25V134.75C154.5 139.855 152.472 144.752 148.862 148.362C145.252 151.972 140.355 154 135.25 154H19.75C14.6446 154 9.74827 151.972 6.13819 148.362C2.52812 144.752 0.5 139.855 0.5 134.75V19.25ZM144.875 38.5H106.375V67.375H144.875V38.5ZM144.875 77H106.375V105.875H144.875V77ZM144.875 115.5H106.375V144.375H135.25C137.803 144.375 140.251 143.361 142.056 141.556C143.861 139.751 144.875 137.303 144.875 134.75V115.5ZM96.75 144.375V115.5H58.25V144.375H96.75ZM48.625 144.375V115.5H10.125V134.75C10.125 137.303 11.1391 139.751 12.9441 141.556C14.7491 143.361 17.1973 144.375 19.75 144.375H48.625ZM10.125 105.875H48.625V77H10.125V105.875ZM10.125 67.375H48.625V38.5H10.125V67.375ZM58.25 38.5V67.375H96.75V38.5H58.25ZM96.75 77H58.25V105.875H96.75V77Z"
						fill="#E10075"
					/>
				</svg>

				<p className="  text-[1.5rem] font-bold text-[#E10075] ">
					Table Component
				</p>
			</Link>
			<Link
				className=" nav-box-shadow flex flex-col items-center justify-center gap-4 rounded-[30px] bg-[#0e0e0e] px-8 py-6 duration-100 hover:scale-105 lg:px-12 lg:py-10"
				href="/graph"
			>
				<svg
					width="165"
					height="164"
					viewBox="0 0 165 164"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className=" scale-75 lg:scale-90"
				>
					<path
						d="M5.5 139.75V24.25C5.5 19.1446 7.52812 14.2483 11.1382 10.6382C14.7483 7.02812 19.6446 5 24.75 5H140.25C145.355 5 150.252 7.02812 153.862 10.6382C157.472 14.2483 159.5 19.1446 159.5 24.25V139.75C159.5 144.855 157.472 149.752 153.862 153.362C150.252 156.972 145.355 159 140.25 159H24.75C19.6446 159 14.7483 156.972 11.1382 153.362C7.52812 149.752 5.5 144.855 5.5 139.75Z"
						stroke="#E10075"
						strokeWidth="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M34.375 101.25L63.25 72.375L82.5 91.625L111.375 62.75L130.625 82"
						stroke="#E10075"
						strokeWidth="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>

				<p className="  text-[1.5rem] font-bold text-[#E10075] ">
					Graph Component
				</p>
			</Link>
		</main>
	);
}
