'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

const SideBar = () => {
	const [sideMenuOpen, setsideMenuOpen] = useState(true);

	return (
		<aside
			className={`fixed flex h-screen 
			${sideMenuOpen ? 'left-0 bg-[#0e0e0e]' : 'left-[-230px] bg-[#09090b]'}
			 z-10 w-[300px] flex-col flex-nowrap items-start justify-start  py-6 duration-300`}
		>
			<div className="flex w-full flex-row flex-nowrap items-center justify-between">
				<p className=" whitespace-nowrap pl-8 text-[2rem] font-bold text-[#E10075]">
					Intern Task
				</p>
				<svg
					width="30"
					height="18"
					viewBox="0 0 30 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="mr-5 cursor-pointer"
					onClick={() => setsideMenuOpen(!sideMenuOpen)}
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M0 1.27604C0 0.937614 0.148158 0.613048 0.411881 0.373744C0.675604 0.13444 1.03329 0 1.40625 0H28.5938C28.9667 0 29.3244 0.13444 29.5881 0.373744C29.8518 0.613048 30 0.937614 30 1.27604C30 1.61447 29.8518 1.93904 29.5881 2.17834C29.3244 2.41764 28.9667 2.55208 28.5938 2.55208H1.40625C1.03329 2.55208 0.675604 2.41764 0.411881 2.17834C0.148158 1.93904 0 1.61447 0 1.27604ZM0 8.50694C0 8.16852 0.148158 7.84395 0.411881 7.60465C0.675604 7.36534 1.03329 7.2309 1.40625 7.2309H28.5938C28.9667 7.2309 29.3244 7.36534 29.5881 7.60465C29.8518 7.84395 30 8.16852 30 8.50694C30 8.84537 29.8518 9.16994 29.5881 9.40924C29.3244 9.64855 28.9667 9.78299 28.5938 9.78299H1.40625C1.03329 9.78299 0.675604 9.64855 0.411881 9.40924C0.148158 9.16994 0 8.84537 0 8.50694ZM1.40625 14.4618C1.03329 14.4618 0.675604 14.5962 0.411881 14.8356C0.148158 15.0749 0 15.3994 0 15.7378C0 16.0763 0.148158 16.4008 0.411881 16.6401C0.675604 16.8794 1.03329 17.0139 1.40625 17.0139H28.5938C28.9667 17.0139 29.3244 16.8794 29.5881 16.6401C29.8518 16.4008 30 16.0763 30 15.7378C30 15.3994 29.8518 15.0749 29.5881 14.8356C29.3244 14.5962 28.9667 14.4618 28.5938 14.4618H1.40625Z"
						fill="#5E5D68"
					/>
				</svg>
			</div>
			<nav className="m-auto flex w-full flex-col items-center justify-center">
				<Link
					className={`${
						sideMenuOpen ? 'flex' : 'hidden'
					} w-full flex-row items-center justify-start gap-4 whitespace-nowrap px-8 py-5 text-[1.4rem]  leading-none text-[#96969E] duration-200 hover:bg-[#292929] `}
					// } w-full flex-row items-center justify-start gap-4 whitespace-nowrap px-8 py-5 text-[1.4rem]  leading-none text-[#96969E] hover:bg-[#292929] `}
					href="/"
				>
					<Image
						src="/img/home-icon.svg"
						height={20}
						width={20}
						alt="home-icon"
					/>
					Home
				</Link>
				<Link
					className={`${
						sideMenuOpen ? 'flex' : 'hidden'
					} w-full flex-row items-center justify-start gap-4 whitespace-nowrap px-8 py-5 text-[1.4rem]  leading-none text-[#96969E] duration-200 hover:bg-[#292929]`}
					href="/table"
				>
					<Image
						src="/img/table-icon.svg"
						height={20}
						width={20}
						alt="home-icon"
					/>
					Table Component
				</Link>
				<Link
					className={`${
						sideMenuOpen ? 'flex' : 'hidden'
					} w-full flex-row items-center justify-start gap-4 whitespace-nowrap px-8 py-5 text-[1.4rem]  leading-none text-[#96969E] duration-200 hover:bg-[#292929]`}
					href="/graph"
				>
					<Image
						src="/img/graph-icon.svg"
						height={20}
						width={20}
						alt="home-icon"
					/>
					Graph Component
				</Link>
			</nav>
		</aside>
	);
};

export default SideBar;
