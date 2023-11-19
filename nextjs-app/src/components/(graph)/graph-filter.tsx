import React from 'react';
import { Entity, MonthlyData } from '@/app/types/interfaces';

type Props = {
	data: Entity[];
	setFilteredData: React.Dispatch<React.SetStateAction<MonthlyData[]>>;
	setIsLineChart: React.Dispatch<React.SetStateAction<boolean>>;
};

/**
 * GraphFilter component is used to display the filter for the graph.
 * This component requires the data, setFilteredData and setIsLineChart to be passed as a prop with data type of Entity[], React.Dispatch<React.SetStateAction<MonthlyData[]>> and React.Dispatch<React.SetStateAction<boolean>>.
 * @param data: Entity[]
 * @param setFilteredData: React.Dispatch<React.SetStateAction<MonthlyData[]>>
 * @param setIsLineChart: React.Dispatch<React.SetStateAction<boolean>>
 * @returns GraphFilter component
 */
const GraphFilter = ({ data, setFilteredData, setIsLineChart }: Props) => {
	return (
		<div className=" flex flex-col flex-nowrap items-center justify-center gap-6 sm:flex-row">
			<select
				className=" nav-box-shadow rounded-xl bg-[#0e0e0e] p-4 text-white"
				placeholder="Select Company"
				defaultValue={data.sort((a, b) => (a.id > b.id ? 1 : -1))[0].company}
				onChange={e => {
					const selectedEntity = data.filter(
						entity => entity.company === e.target.value
					);
					setFilteredData(selectedEntity[0].monthlyData);
				}}
			>
				{data.map(entity => (
					<option
						key={entity.company}
						value={entity.company}
						className="bg-[#0e0e0e] font-teleGrotesk text-[#96969E]"
					>
						{entity.company}
					</option>
				))}
			</select>

			<form
				onSubmit={e => {
					e.preventDefault;
				}}
				className="flex flex-row flex-nowrap items-center justify-center gap-6"
			>
				<fieldset className=" flex flex-row gap-6">
					<div className=" flex flex-row gap-2">
						<input
							type="radio"
							id="line-chart"
							name="chart"
							value={'lineChart'}
							defaultChecked
							onChange={() => setIsLineChart(true)}
						/>
						<label htmlFor="line-chart" className="text-white">
							Line chart
						</label>
					</div>
					<div className=" flex flex-row gap-2">
						<input
							type="radio"
							id="bar-chart"
							name="chart"
							value={'barChart'}
							onChange={() => setIsLineChart(false)}
						/>
						<label htmlFor="bar-chart" className="text-white">
							Bar chart
						</label>
					</div>
				</fieldset>
			</form>
		</div>
	);
};

export default GraphFilter;
