import Table from '@/components/(table)/table-component';
import React from 'react';
import data from '@/app/data/data';

// Main could be put into layout instead as the className is same for grapgh and table
const TablePage = () => {
	return (
		<main className=" flex h-screen w-full flex-col items-start justify-center overflow-hidden bg-[#09090b] px-4  py-16 md:px-8 lg:pr-12">
			<Table data={data} className="flex h-full w-full flex-col items-center justify-start" />
		</main>
	);
};

export default TablePage;
