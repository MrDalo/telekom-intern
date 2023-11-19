'use client';
import { Entity, MonthlyData } from '@/app/types/interfaces';
import React, { useState } from 'react';
import LineGraph from './line-graph';
import Stats from './stats';
import BarGraph from './bar-graph';
import GraphFilter from './graph-filter';

type Props = {
	data: Entity[];
};

/**
 * Graph component is the entry point and the main component.
 * It contains the graph structure - GraphFilter, Stats, Line/Bar chart.
 * This component requires the data to be passed as a prop with data type of Entity[].
 * @param data: Entity[]
 * @returns Graph component
 */
const Graph = ({ data }: Props) => {
	const [isLineChart, setIsLineChart] = useState<boolean>(true);

	const [filteredData, setFilteredData] = useState<MonthlyData[]>(
		data.filter(entity => entity.id === 1)[0].monthlyData
	);

	return (
		<div className="flex h-full w-full flex-col items-center justify-start gap-4">
			<GraphFilter
				data={data}
				setFilteredData={setFilteredData}
				setIsLineChart={setIsLineChart}
			/>
			<div className=" nav-box-shadow  h-5/6 w-[100%] overflow-auto rounded-3xl bg-[#0e0e0e] p-8 text-white md:w-[calc(100%-60px)]">
				{isLineChart ? (
					<LineGraph entryData={filteredData} />
				) : (
					<BarGraph entryData={filteredData} />
				)}
			</div>
			<Stats entryData={filteredData} />
		</div>
	);
};

export default Graph;
