import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import Link from 'next/link';

const SupportBox = () => {
	return (
		<HoverCard openDelay={300}>
			<HoverCardTrigger className=" absolute right-8 top-6 z-10 hidden cursor-pointer items-center justify-center rounded-full border-2 border-[#E10075] px-4 py-1 text-center text-[1.5rem] font-bold text-[#E10075] lg:flex">
				?
			</HoverCardTrigger>
			<HoverCardContent className=" z-20 w-auto max-w-[60vw] border-[#96969E] bg-[#141414] text-[#e1e1e1]">
				<h2 className=" text-[1.5rem] text-[#E10075]">Table</h2>
				<p>
					Table is a reusable component that can be used in any application.
				</p>
				<p>
					Table component has 2 types of filters. First filter is a search
					filter which filters data by any value in the row. Second filter is a
					select filter which filters data by company status.
				</p>
				<p>
					Table component was built from scratch by myself without using any
					external component library.
				</p>
				<h2 className=" text-[1.5rem] text-[#E10075]">Graph</h2>
				<p>
					Graph is a reusable component that can be used in any application.
				</p>
				<p>
					Graph component has 1 type of filter. Filter is a select filter which
					filters data by company.
				</p>
				<p>
					Application has 2 types of graph. First graph is a bar graph which
					displays data in a bar graph. Second graph is a line graph which
					displays data in a line graph.
				</p>
				<p>
					Graph component was built by using of the external component library{' '}
					<Link
						href="https://recharts.org/en-US/"
						className=" font-bold underline"
						target="_blank"
					>
						Rechart
					</Link>
					.
				</p>
			</HoverCardContent>
		</HoverCard>
	);
};

export default SupportBox;
