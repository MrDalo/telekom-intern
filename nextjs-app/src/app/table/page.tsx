import React from 'react';
import data from '../data/data';
import { column } from './Column';
import { DataTable } from './DataTable';
import SupportBox from '@/components/SupportBox';

const TablePage = () => {
	return (
		<main className="bg-balck relative flex min-h-screen flex-col items-center justify-between bg-[#09090b] p-16">
			<SupportBox />
			<DataTable columns={column} data={data} />
		</main>
	);
};

export default TablePage;
