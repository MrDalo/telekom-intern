'use client';
import data from '@/app/data/data';
import { Entity } from '@/app/types/interfaces';
import React, { useState } from 'react';
import TableFilters from './table-filters';
import TableStructure from './table-structure';

const Table = () => {
	const [filteredData, setFilteredData] = useState<Entity[]>(data);

	return (
		<>
			<TableFilters
				filteredData={filteredData.sort((a, b) => a.id - b.id)}
				setFilteredData={setFilteredData}
			/>
			<TableStructure
				filteredData={filteredData.sort((a, b) => a.id - b.id)}
				setFilteredData={setFilteredData}
			/>
		</>
	);
};

export default Table;
