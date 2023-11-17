'use client';
import { Entity } from '@/app/types/interfaces';
import { ArrowUpDown } from 'lucide-react';
import React, { useState } from 'react';
import { set } from 'vue/types/umd';

type Props = {
	filteredData: Entity[];
	setFilteredData: React.Dispatch<React.SetStateAction<Entity[]>>;
};

type TKey = keyof Omit<Entity, 'monthlyData'>;

type SortingState = {
	field: string;
	isSortedDesc: boolean;
};

const colDefinition = {
	id: 'Company ID',
	company: 'Company',
	industry: 'Industry',
	location: 'Location',
	employee_count: 'Employee Count',
	year_founded: 'Year Founded',
	status: 'Status',
	region: 'Region',
	sector: 'Sector'
};

const TableStructure = ({ filteredData, setFilteredData }: Props) => {
	const [sorting, setSorting] = useState<SortingState>({
		field: 'id',
		isSortedDesc: true
	});

	return (
		<div className=" h-5/6  max-w-[calc(100%-60px)] rounded-3xl bg-[#0e0e0e] p-8">
			<div className=" h-full w-full overflow-auto bg-[#0e0e0e] ">
				<table className="w-full caption-bottom text-sm">
					<thead className="sticky top-0">
						<tr className=" border-b border-[#4d4d52] bg-[#0e0e0e] transition-colors  duration-200 hover:bg-[#0e0e0e]">
							{Object.keys(colDefinition).map(key => {
								if (key !== 'monthlyData') {
									return (
										<th
											key={key}
											className="sticky top-0 h-12 px-4 text-left align-middle font-medium text-[#96969E] text-muted-foreground hover:text-[#EEEEEE] [&:has([role=checkbox])]:pr-0"
										>
											<button
												className=" flex flex-row flex-nowrap items-center justify-center rounded-md px-3 py-2 text-[#96969E] hover:bg-[#E10075] hover:text-white"
												// className=" flex flex-row flex-nowrap items-center justify-center rounded-md px-3 py-2 hover:bg-[#292929]"
												onClick={() => {
													let isDesc =
														sorting.field === key
															? !sorting?.isSortedDesc
															: true;
													setFilteredData(
														filteredData.sort((a, b) => {
															if (isDesc) {
																return a[key as TKey] > b[key as TKey] ? 1 : -1;
															} else {
																return a[key as TKey] < b[key as TKey] ? 1 : -1;
															}
														})
													);

													setSorting({
														field: key,
														isSortedDesc:
															sorting.field === key
																? !sorting?.isSortedDesc
																: true
													});
												}}
											>
												{colDefinition[key as TKey]}
												<ArrowUpDown className="ml-2 h-4 w-4" />
											</button>
										</th>
									);
								}
							})}
						</tr>
					</thead>
					<tbody>
						{filteredData.length > 0 ? (
							filteredData.map((entity, index) => {
								return (
									<tr
										key={index}
										className="border-b border-[#4d4d52]  transition-colors hover:bg-[#292929]"
									>
										{Object.keys(entity).map(key => {
											if (key !== 'monthlyData') {
												return (
													<td
														key={key}
														className="p-4 text-center align-middle text-[#EEEEEE]"
													>
														{entity[key as TKey]}
													</td>
												);
											}
										})}
									</tr>
								);
							})
						) : (
							<tr>
								<td
									colSpan={Object.keys(colDefinition).length}
									className="h-24 text-center text-[#EEEEEE]"
								>
									No results
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TableStructure;
