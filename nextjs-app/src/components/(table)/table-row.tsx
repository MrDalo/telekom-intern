import React from 'react';
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger
} from '../ui/hover-card';
import { Entity } from '@/app/types/interfaces';
import {
	Apple,
	BatteryCharging,
	BookA,
	Car,
	CircleDollarSign,
	Cpu,
	Cross,
	Dumbbell,
	MonitorPlay,
	Plane
} from 'lucide-react';

type Props = {
	entity: Entity;
	index: number;
};

type TKey = keyof Omit<Entity, 'monthlyData'>;

const industryDataDefinition = {
	Automotive: <Car />,
	Education: <BookA />,
	Energy: <BatteryCharging />,
	Finance: <CircleDollarSign />,
	Fitness: <Dumbbell />,
	Food: <Apple />,
	Healthcare: <Cross />,
	Media: <MonitorPlay />,
	Technology: <Cpu />,
	Travel: <Plane />
};

type TIndustry = keyof typeof industryDataDefinition;

const TableRow = ({ entity, index }: Props) => {
	return (
		<HoverCard key={index} openDelay={300}>
			<HoverCardTrigger asChild>
				<tr
					key={index}
					className="border-b border-[#4d4d52]  transition-colors hover:bg-[#292929]"
				>
					{Object.keys(entity).map(key => {
						if (key !== 'monthlyData') {
							return (
								<td
									key={key}
									className={` p-4 text-center align-middle  ${
										key === 'status'
											? entity[key as TKey] === 'Active'
												? 'text-green-400'
												: entity[key as TKey] === 'Pending'
												  ? ' text-yellow-400'
												  : entity[key as TKey] === 'Inactive'
												    ? 'text-red-400'
												    : 'text-[#EEEEEE]'
											: 'text-[#EEEEEE]'
									}`}
								>
									{key === 'industry' || key === 'sector' ? (
										<span className="flex flex-row flex-nowrap items-center justify-center gap-2">
											{' '}
											{
												industryDataDefinition[entity[key as TKey] as TIndustry]
											}{' '}
											{entity[key as TKey]}
										</span>
									) : (
										entity[key as TKey]
									)}
								</td>
							);
						}
					})}
				</tr>
			</HoverCardTrigger>
			<HoverCardContent className=" z-20 max-h-[50vh] w-auto overflow-auto rounded-lg border-[#57575c] bg-[#141414] text-[#e1e1e1]">
				{entity.monthlyData.map((monthlyData, index) => {
					return (
						<span
							key={index}
							className="flex flex-row flex-nowrap items-center justify-between gap-4  border-b border-[#96969E] px-4 py-2"
						>
							<span className="flex flex-row flex-nowrap items-center justify-between">
								<span className="font-bold text-[#E10075]">
									Date: {monthlyData.date}
								</span>
							</span>
							<span className="text-[#96969E]">
								Revenue: {monthlyData.Revenue};
							</span>
							<span className="text-[#96969E]">
								Expenses: {monthlyData.Expenses};
							</span>
							<span className="text-[#96969E]">
								Profit: {monthlyData.Profit};
							</span>
						</span>
					);
				})}
			</HoverCardContent>
		</HoverCard>
	);
};

export default TableRow;
