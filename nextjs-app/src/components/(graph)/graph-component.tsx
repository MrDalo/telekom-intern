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
