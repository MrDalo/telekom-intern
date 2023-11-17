import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';

const SupportBox = () => {
	return (
		<HoverCard openDelay={300}>
			<HoverCardTrigger className=" absolute right-8 top-6 z-10 cursor-pointer rounded-full border-2 border-[#E10075] px-4 py-1 text-center text-[1.5rem] font-bold text-[#E10075]">
				?
			</HoverCardTrigger>
			<HoverCardContent className=" z-20 w-auto max-w-[60vw] border-[#96969E] bg-[#141414] text-[#e1e1e1]">
				TODO: Add support box
			</HoverCardContent>
		</HoverCard>
	);
};

export default SupportBox;
