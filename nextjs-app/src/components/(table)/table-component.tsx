'use client';

import { Entity } from '@/app/types/interfaces';
import React, { useState } from 'react';
import TableFilters from './table-filters';
import TableStructure from './table-structure';

type Prop = {
	data: Entity[];
	className: string;
};

/**
 *  Table component is an entry point for the table.
 * It contains the table filters and the table structure.
 * The table filters are used to filter the data.
 * The table structure is used to display and sort the data.
 * This component requires the data to be passed as a prop with data type of Entity[].
 * @param data: Entity[]
 * @returns Table component
 */
const Table = ({ data, className }: Prop) => {
	const [filteredData, setFilteredData] = useState<Entity[]>(data);

	return (
		<div className={className}>
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
