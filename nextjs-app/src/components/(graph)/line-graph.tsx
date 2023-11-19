import { MonthlyData } from '@/app/types/interfaces';
import React from 'react';
import {
	CartesianGrid,
	XAxis,
	YAxis,
	ResponsiveContainer,
	Tooltip,
	Legend,
	Line,
	LineChart
} from 'recharts';
import CustomTooltip from './custome-tooltip';

type Props = {
	entryData: MonthlyData[];
};

/**
 * LineGraph component is used to display the line graph.
 * This component requires the entryData to be passed as a prop with data type of MonthlyData array.
 * @param entryData: MonthlyData[]
 * @returns LineGraph component
 */
const LineGraph = ({ entryData }: Props) => {
	return (
		<ResponsiveContainer
			width={'100%'}
			height={'100%'}
			className="!min-w-[600px]"
		>
			<LineChart
				data={entryData.sort((a: MonthlyData, b: MonthlyData) =>
					a.date > b.date ? 1 : -1
				)}
				margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
			>
				<XAxis dataKey="date" tick={{ fill: '#96969E' }} />
				<YAxis tick={{ fill: '#96969E' }} />
				<CartesianGrid
					strokeDasharray="3 3"
					strokeOpacity={0.2}
					color="#000"
					vertical={false}
				/>
				<Legend />
				<Tooltip content={<CustomTooltip />} />
				<Line dot={false} type="monotone" dataKey="Expenses" stroke="#F87171" />
				<Line dot={false} type="monotone" dataKey="Revenue" stroke="#60A5FA" />
				<Line dot={false} type="monotone" dataKey="Profit" stroke="#34D399" />
			</LineChart>
		</ResponsiveContainer>
	);
};

export default LineGraph;
