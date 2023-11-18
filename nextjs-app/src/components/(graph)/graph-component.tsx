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
import Stats from './stats';

type Props = {
	data: Entity[];
};

const Graph = ({ data }: Props) => {
	const [filteredData, setFilteredData] = useState<Entity[]>(data);

	return (
		<div className="flex h-full w-full flex-col items-center justify-start gap-4">
			<div></div>
			{/* <div className=" h-5/6  w-[100%] overflow-auto rounded-3xl bg-[#0e0e0e] p-8 text-white "> */}
			<div className=" nav-box-shadow  h-5/6 w-[100%] overflow-auto rounded-3xl bg-[#0e0e0e] p-8 text-white md:w-[calc(100%-60px)]">
				<LineGraph data={data} />
				{/* <BarGraph data={data} /> */}
			</div>
			<Stats data={data} />
		</div>
	);
};

export default Graph;
