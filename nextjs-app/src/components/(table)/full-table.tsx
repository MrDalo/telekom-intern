'use client';
import data from '@/app/data/data';
import { Entity } from '@/app/types/interfaces';
import React, { useState } from 'react';
import TableFilters from './table-filters';
import { DataTable } from '@/app/table/data-table';
import { column } from '@/app/table/column';

const FullTable = () => {
	const [filteredData, setFilteredData] = useState<Entity[]>(data);

	return (
		<>
			<TableFilters
				filteredData={filteredData}
				setFilteredData={setFilteredData}
			/>
			<DataTable
				columns={column}
				data={filteredData.sort((a, b) => a.id - b.id)}
			/>
		</>
	);
};

export default FullTable;
