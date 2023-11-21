import Graph from '@/components/(graph)/graph-component';
import React from 'react';
// Keep consistent imports
import data from '../data/data';

// Main could be put into layout instead as the className is same for grapgh and table
const GraphPage = () => {
	return (
		<main className="flex h-screen w-full flex-col items-start justify-center overflow-hidden bg-[#09090b] px-4  py-10 md:px-8 lg:pr-12">
			<Graph data={data} />
		</main>
	);
};

export default GraphPage;
