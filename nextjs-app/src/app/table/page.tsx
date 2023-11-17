import FullTable from '@/components/(table)/full-table';
import React from 'react';

const TablePage = () => {
	return (
		<main className=" flex h-screen flex-col items-center justify-start bg-[#09090b] py-16 pl-[320px] pr-16">
			<FullTable />
		</main>
	);
};

export default TablePage;

// 'use client';
// import React, { Dispatch, SetStateAction, useState } from 'react';
// import data from '../data/data';
// import { DataTable } from './data-table';
// import { column } from './column';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Entity } from '../types/interfaces';

// const TablePage = () => {
// 	const [filteredData, setFilteredData] = useState<Entity[]>(data);
// 	const [checkboxData, setCheckboxData] = useState<Entity[]>(data);

// 	const [activeChecked, setActiveChecked] = useState<boolean>(true);
// 	const [pendingChecked, setPendingChecked] = useState<boolean>(true);
// 	const [inactiveChecked, setInactiveChecked] = useState<boolean>(true);

// 	const [filterString, setFilterString] = useState<string>('');

// 	const createCheckBoxData = (
// 		active: boolean,
// 		pending: boolean,
// 		inactive: boolean,
// 		status: string,
// 		filteringByFilterInput: boolean
// 	): Entity[] => {
// 		let checkboxDataHelper: Entity[] = [];

// 		// When all checboxes are unchecked, I will show all data
// 		if (active === false && pending === false && inactive === false) {
// 			setCheckboxData(data);
// 			return data;
// 		}

// 		console.log(
// 			filterString,
// 			filterString.length,
// 			status,
// 			active,
// 			filteringByFilterInput
// 		);

// 		const activeData: Entity[] =
// 			// Case when filter input is set (deleting letter from the filter input) and checkbox is checked -> I have to load all data and filter it by status and then by filter input
// 			filterString.length !== 0 &&
// 			status === 'Active' &&
// 			active === true &&
// 			!filteringByFilterInput
// 				? data
// 						.filter(item => item.status === 'Active')
// 						.filter(
// 							item =>
// 								item.company
// 									.toLowerCase()
// 									.includes(filterString.toLowerCase()) ||
// 								item.industry
// 									.toLowerCase()
// 									.includes(filterString.toLowerCase()) ||
// 								item.location
// 									.toLowerCase()
// 									.includes(filterString.toLowerCase()) ||
// 								item.region
// 									.toLowerCase()
// 									.includes(filterString.toLowerCase()) ||
// 								item.sector
// 									.toLowerCase()
// 									.includes(filterString.toLowerCase()) ||
// 								item.status
// 									.toLowerCase()
// 									.includes(filterString.toLowerCase()) ||
// 								item.employee_count
// 									.toString()
// 									.toLowerCase()
// 									.includes(filterString.toLowerCase()) ||
// 								item.id
// 									.toString()
// 									.toLowerCase()
// 									.includes(filterString.toLowerCase()) ||
// 								item.year_founded
// 									.toString()
// 									.toLowerCase()
// 									.includes(filterString.toLowerCase())
// 						)
// 				: // Case when filter input is empty and I want to find all occurence of the status
// 				  filterString.length === 0 ||
// 				    (status === 'Active' && active === true) ||
// 				    filteringByFilterInput
// 				  ? data.filter(item => item.status === 'Active')
// 				  : // Case when I want to filter over the filtered data byt filter input (when adding new letters to the filter input)
// 				    filteredData.filter(item => item.status === 'Active');
// 		const pendingData: Entity[] =
// 			// Case when filter input is set (deleting letter from the filter input) and checkbox is checked -> I have to load all data and filter it by status and then by filter input
// 			filterString.length !== 0 &&
// 			status === 'Pending' &&
// 			pending === true &&
// 			!filteringByFilterInput
// 				? data
// 						.filter(item => item.status === 'Pending')
// 						.filter(
// 							item =>
// 								item.company
// 									.toLowerCase()
// 									.includes(filterString.toLowerCase()) ||
// 								item.industry
// 									.toLowerCase()
// 									.includes(filterString.toLowerCase()) ||
// 								item.location
// 									.toLowerCase()
// 									.includes(filterString.toLowerCase()) ||
// 								item.region
// 									.toLowerCase()
// 									.includes(filterString.toLowerCase()) ||
// 								item.sector
// 									.toLowerCase()
// 									.includes(filterString.toLowerCase()) ||
// 								item.status
// 									.toLowerCase()
// 									.includes(filterString.toLowerCase()) ||
// 								item.employee_count
// 									.toString()
// 									.toLowerCase()
// 									.includes(filterString.toLowerCase()) ||
// 								item.id
// 									.toString()
// 									.toLowerCase()
// 									.includes(filterString.toLowerCase()) ||
// 								item.year_founded
// 									.toString()
// 									.toLowerCase()
// 									.includes(filterString.toLowerCase())
// 						)
// 				: // Case when filter input is empty and I want to find all occurence of the status
// 				  filterString.length === 0 ||
// 				    (status === 'Pending' && pending === true) ||
// 				    filteringByFilterInput
// 				  ? data.filter(item => item.status === 'Pending')
// 				  : // Case when I want to filter over the filtered data byt filter input (when adding new letters to the filter input)
// 				    filteredData.filter(item => item.status === 'Pending');

// 		const inactiveData: Entity[] =
// 			// Case when filter input is set (deleting letter from the filter input) and checkbox is checked -> I have to load all data and filter it by status and then by filter input
// 			filterString.length !== 0 &&
// 			status === 'Inactive' &&
// 			inactive === true &&
// 			!filteringByFilterInput
// 				? data
// 						.filter(item => item.status === 'Inactive')
// 						.filter(
// 							item =>
// 								item.company
// 									.toLowerCase()
// 									.includes(filterString.toLowerCase()) ||
// 								item.industry
// 									.toLowerCase()
// 									.includes(filterString.toLowerCase()) ||
// 								item.location
// 									.toLowerCase()
// 									.includes(filterString.toLowerCase()) ||
// 								item.region
// 									.toLowerCase()
// 									.includes(filterString.toLowerCase()) ||
// 								item.sector
// 									.toLowerCase()
// 									.includes(filterString.toLowerCase()) ||
// 								item.status
// 									.toLowerCase()
// 									.includes(filterString.toLowerCase()) ||
// 								item.employee_count
// 									.toString()
// 									.toLowerCase()
// 									.includes(filterString.toLowerCase()) ||
// 								item.id
// 									.toString()
// 									.toLowerCase()
// 									.includes(filterString.toLowerCase()) ||
// 								item.year_founded
// 									.toString()
// 									.toLowerCase()
// 									.includes(filterString.toLowerCase())
// 						)
// 				: // Case when filter input is empty and I want to find all occurence of the status
// 				  filterString.length === 0 ||
// 				    (status === 'Inactive' && inactive === true) ||
// 				    filteringByFilterInput
// 				  ? data.filter(item => item.status === 'Inactive')
// 				  : // Case when I want to filter over the filtered data byt filter input (when adding new letters to the filter input)
// 				    filteredData.filter(item => item.status === 'Inactive');

// 		// Handle each checkbox and concat data into final data array
// 		if (active === true) {
// 			checkboxDataHelper = checkboxDataHelper.concat(activeData);
// 		}

// 		if (pending === true) {
// 			checkboxDataHelper = checkboxDataHelper.concat(pendingData);
// 		}

// 		if (inactive === true) {
// 			checkboxDataHelper = checkboxDataHelper.concat(inactiveData);
// 		}

// 		console.log(checkboxDataHelper);

// 		// I need new data immedialtely and the setCheckboxData will not update the data immediately, so I need to return also the data
// 		setCheckboxData(checkboxDataHelper);
// 		return checkboxDataHelper;
// 	};

// 	const checkboxHandler = (
// 		checkState: boolean,
// 		setCheckState: Dispatch<SetStateAction<boolean>>,
// 		status: string
// 	) => {
// 		setFilteredData(
// 			createCheckBoxData(
// 				status === 'Active' ? !checkState : activeChecked,
// 				status === 'Pending' ? !checkState : pendingChecked,
// 				status === 'Inactive' ? !checkState : inactiveChecked,
// 				status,
// 				false
// 			)
// 		);

// 		setCheckState(!checkState);
// 	};

// 	const filterInputOnChangeHandler = (
// 		e: React.ChangeEvent<HTMLInputElement>
// 	) => {
// 		let dataSource: Entity[] = [];

// 		console.log(e.target.value, filterString);
// 		// Case when sellers are deleted from the filter input
// 		if (e.target.value.length < filterString.length) {
// 			dataSource = createCheckBoxData(
// 				activeChecked,
// 				pendingChecked,
// 				inactiveChecked,
// 				'',
// 				true
// 			);
// 		} else {
// 			dataSource = checkboxData;
// 		}

// 		setFilterString(e.target.value);
// 		setFilteredData(
// 			dataSource.filter(
// 				item =>
// 					item.company.toLowerCase().includes(e.target.value.toLowerCase()) ||
// 					item.industry.toLowerCase().includes(e.target.value.toLowerCase()) ||
// 					item.location.toLowerCase().includes(e.target.value.toLowerCase()) ||
// 					item.region.toLowerCase().includes(e.target.value.toLowerCase()) ||
// 					item.sector.toLowerCase().includes(e.target.value.toLowerCase()) ||
// 					item.status.toLowerCase().includes(e.target.value.toLowerCase()) ||
// 					item.employee_count
// 						.toString()
// 						.toLowerCase()
// 						.includes(e.target.value.toLowerCase()) ||
// 					item.id
// 						.toString()
// 						.toLowerCase()
// 						.includes(e.target.value.toLowerCase()) ||
// 					item.year_founded
// 						.toString()
// 						.toLowerCase()
// 						.includes(e.target.value.toLowerCase())
// 			)
// 		);
// 	};

// 	return (
// 		<main className=" flex min-h-screen flex-col items-center justify-between bg-[#09090b] py-16 pl-[320px] pr-16">
// 			<div className="mb-4 w-1/3">
// 				<form
// 					className="flex w-full flex-col items-center gap-4"
// 					onSubmit={e => {
// 						e.preventDefault();
// 					}}
// 				>
// 					<input
// 						type="text"
// 						placeholder="Filter data"
// 						className="w-full rounded-lg border border-[#434343] bg-[#09090b] px-3 py-2 text-white outline-none placeholder:text-[#96969E] focus:border-[#E10075]"
// 						onChange={e => filterInputOnChangeHandler(e)}
// 					/>

// 					<div className="flex flex-row gap-8">
// 						<div className="flex flex-row items-center gap-2">
// 							<Checkbox
// 								id="active"
// 								name="active"
// 								className=" border-[#96969E] hover:border-[#E10075]"
// 								defaultChecked
// 								onCheckedChange={e =>
// 									checkboxHandler(activeChecked, setActiveChecked, 'Active')
// 								}
// 							/>
// 							<label htmlFor="active" className=" text-white">
// 								Active
// 							</label>
// 						</div>
// 						<div className="flex flex-row items-center gap-2">
// 							<Checkbox
// 								id="pending"
// 								name="pending"
// 								className=" border-[#96969E] hover:border-[#E10075]"
// 								defaultChecked
// 								onCheckedChange={e =>
// 									checkboxHandler(pendingChecked, setPendingChecked, 'Pending')
// 								}
// 							/>
// 							<label htmlFor="pending" className=" text-white">
// 								Pending
// 							</label>
// 						</div>
// 						<div className="flex flex-row items-center gap-2">
// 							<Checkbox
// 								id="inactive"
// 								name="inactive"
// 								className=" border-[#96969E] hover:border-[#E10075]"
// 								defaultChecked
// 								onCheckedChange={e =>
// 									checkboxHandler(
// 										inactiveChecked,
// 										setInactiveChecked,
// 										'Inactive'
// 									)
// 								}
// 							/>
// 							<label htmlFor="inactive" className=" text-white">
// 								Inactive
// 							</label>
// 						</div>
// 					</div>
// 				</form>
// 			</div>
// 			<DataTable
// 				columns={column}
// 				data={filteredData.sort((a, b) => a.id - b.id)}
// 			/>
// 		</main>
// 	);
// };

// export default TablePage;
