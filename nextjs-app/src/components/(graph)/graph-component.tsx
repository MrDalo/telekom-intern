'use client';
import { Entity, MonthlyData } from '@/app/types/interfaces';
import React, { useState } from 'react';
import {
	Area,
	CartesianGrid,
	ReferenceLine,
	XAxis,
	YAxis,
	AreaChart,
	ResponsiveContainer,
	Tooltip,
	Legend,
	LineChart,
	Line,
	Bar,
	BarChart
} from 'recharts';
import CustomTooltip from './custome-tooltip';
import LineGraph from './line-graph';
import BarGraph from './bar-graph';

type Props = {
	data: Entity[];
};

const Graph = ({ data }: Props) => {
	const [filteredData, setFilteredData] = useState<Entity[]>(data);

	return (
		<div className="flex h-full w-full flex-col items-center justify-start gap-10">
			<div>Filters</div>
			{/* <div className=" h-5/6  w-[100%] overflow-auto rounded-3xl bg-[#0e0e0e] p-8 text-white "> */}
			<div className=" nav-box-shadow  h-5/6 w-[100%] overflow-auto rounded-3xl bg-[#0e0e0e] p-8 text-white md:w-[calc(100%-60px)]">
				<LineGraph data={data} />
				{/* <BarGraph data={data} /> */}
			</div>
			<div className="flex flex-row flex-nowrap gap-6">
				<div className="nav-box-shadow flex flex-col flex-nowrap items-center justify-center gap-2 rounded-xl bg-[#0e0e0e] p-4">
					<p className=" text-[1rem]">Total expenses </p>
				</div>
				<div className="nav-box-shadow flex flex-col flex-nowrap items-center justify-center gap-2 rounded-xl bg-[#0e0e0e] p-4 ">
					<p className=" text-[1rem]">Total revenue </p>
				</div>
				<div className="nav-box-shadow flex flex-col flex-nowrap items-center justify-center gap-2 rounded-xl bg-[#0e0e0e] p-4">
					<p className=" text-[1rem]">Total profit </p>
				</div>
			</div>
		</div>
	);
};

export default Graph;
