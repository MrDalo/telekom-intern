import React from 'react';
import data from '../data/data';
import { DataTable } from './data-table';
import SupportBox from '@/components/support-box';
import { column } from './column';

const TablePage = () => {
	return (
		<main className=" flex min-h-screen flex-col items-center justify-between bg-[#09090b] p-16">
			<DataTable columns={column} data={data} />
		</main>
	);
};

export default TablePage;
