import { Entity, MonthlyData } from '@/app/types/interfaces';
import React from 'react';

type Props = {
	entryData: MonthlyData[];
};

const Stats = ({ entryData }: Props) => {
	const expenses = entryData.reduce(
		(accumulator, value) => accumulator + value.Expenses,
		0
	);
	const revenue = entryData.reduce(
		(accumulator, value) => accumulator + value.Revenue,
		0
	);
	const profit = entryData.reduce(
		(accumulator, value) => accumulator + value.Profit,
		0
	);

	return (
		<div className="flex w-[90%] flex-row flex-nowrap items-center justify-start gap-6 overflow-x-auto overflow-y-hidden md:justify-center">
			<div className="nav-box-shadow flex flex-col flex-nowrap items-center justify-center gap-2 rounded-2xl bg-[#0e0e0e] px-10 py-5">
				<p className=" text-[1rem] text-[#F87171]">Total expenses </p>
				<p className="text-[1.5rem] font-bold text-[#F87171]">
					{Math.round(expenses * 100) / 100}
				</p>
			</div>
			<div className="nav-box-shadow flex flex-col flex-nowrap items-center justify-center gap-2 rounded-2xl bg-[#0e0e0e] px-10 py-5 ">
				<p className=" text-[1rem] text-[#60A5FA]">Total revenue </p>
				<p className="text-[1.5rem] font-bold text-[#60A5FA]">
					{Math.round(revenue * 100) / 100}
				</p>
			</div>
			<div className="nav-box-shadow flex flex-col flex-nowrap items-center justify-center gap-2 rounded-2xl bg-[#0e0e0e] px-10 py-5">
				<p className=" text-[1rem] text-[#34D399]">Total profit </p>
				<p className="text-[1.5rem] font-bold text-[#34D399]">
					{Math.round(profit * 100) / 100}
				</p>
			</div>
		</div>
	);
};

export default Stats;
