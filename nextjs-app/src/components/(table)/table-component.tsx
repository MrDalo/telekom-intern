'use client';

import { Entity } from '@/app/types/interfaces';
import React, { useState } from 'react';
import TableFilters from './table-filters';
import TableStructure from './table-structure';

type Prop = {
	data: Entity[];
};

const Table = ({ data }: Prop) => {
	const [filteredData, setFilteredData] = useState<Entity[]>(data);

	return (
		<div className="flex h-full w-full flex-col items-center justify-start">
			<TableFilters
				filteredData={filteredData.sort((a, b) => a.id - b.id)}
				setFilteredData={setFilteredData}
			/>
			<TableStructure
				filteredData={filteredData.sort((a, b) => a.id - b.id)}
				setFilteredData={setFilteredData}
			/>
		</div>
	);
};

export default Table;
