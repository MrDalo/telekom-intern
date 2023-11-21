'use client';
import data from '@/app/data/data';
import { Entity } from '@/app/types/interfaces';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Checkbox } from '../ui/checkbox';

type Props = {
	filteredData: Entity[];
	setFilteredData: React.Dispatch<React.SetStateAction<Entity[]>>;
};

/**
 * TableFilters component is used to filter the data.
 * It contains the filter input and the checkboxes for filtering the data by status.
 * The filter input is used to filter the data by any value in the row.
 * The checkboxes are used to filter the data by status.
 * This component requires the filteredData and setFilteredData to be passed as a prop with data type of Entity[].
 * @param filteredData: Entity[]
 * @param setFilteredData: React.Dispatch<React.SetStateAction<Entity[]>>
 * @returns TableFilters component
 */
const TableFilters = ({ filteredData, setFilteredData }: Props) => {
	// Move this into a custom hook like useFilters
	const [checkboxData, setCheckboxData] = useState<Entity[]>(data);

	const [activeChecked, setActiveChecked] = useState<boolean>(true);
	const [pendingChecked, setPendingChecked] = useState<boolean>(true);
	const [inactiveChecked, setInactiveChecked] = useState<boolean>(true);

	const [filterString, setFilterString] = useState<string>('');

	const filterFunction = (item: Entity, comparision: string) => {
		return (
			item.company.toLowerCase().includes(comparision.toLowerCase()) ||
			item.industry.toLowerCase().includes(comparision.toLowerCase()) ||
			item.location.toLowerCase().includes(comparision.toLowerCase()) ||
			item.region.toLowerCase().includes(comparision.toLowerCase()) ||
			item.sector.toLowerCase().includes(comparision.toLowerCase()) ||
			item.status.toLowerCase().includes(comparision.toLowerCase()) ||
			item.employee_count
				.toString()
				.toLowerCase()
				.includes(comparision.toLowerCase()) ||
			item.id.toString().toLowerCase().includes(comparision.toLowerCase()) ||
			item.year_founded
				.toString()
				.toLowerCase()
				.includes(comparision.toLowerCase())
		);
	};

	const createCheckBoxData = (
		active: boolean,
		pending: boolean,
		inactive: boolean,
		status: string,
		filteringByFilterInput: boolean
	): Entity[] => {
		let checkboxDataHelper: Entity[] = [];

		// When all checboxes are unchecked, I will show all data
		if (active === false && pending === false && inactive === false) {
			setCheckboxData(data);
			return data;
		}

		// This looks like it count be unified. Most of the code is the same but only Active/Pending/Inactive etc is different
		const activeData: Entity[] =
			// Case when filter input is set (deleting letter from the filter input) and checkbox is checked -> I have to load all data and filter it by status and then by filter input
			filterString.length !== 0 &&
			status === 'Active' &&
			active === true &&
			!filteringByFilterInput
				? data
						.filter(item => item.status === 'Active')
						.filter(item => filterFunction(item, filterString))
				: // Case when filter input is empty and I want to find all occurence of the status
				  filterString.length === 0 ||
				    (status === 'Active' && active === true) ||
				    filteringByFilterInput
				  ? data.filter(item => item.status === 'Active')
				  : // Case when I want to filter over the filtered data byt filter input (when adding new letters to the filter input)
				    filteredData.filter(item => item.status === 'Active');
		const pendingData: Entity[] =
			// Case when filter input is set (deleting letter from the filter input) and checkbox is checked -> I have to load all data and filter it by status and then by filter input
			filterString.length !== 0 &&
			status === 'Pending' &&
			pending === true &&
			!filteringByFilterInput
				? data
						.filter(item => item.status === 'Pending')
						.filter(item => filterFunction(item, filterString))
				: // Case when filter input is empty and I want to find all occurence of the status
				  filterString.length === 0 ||
				    (status === 'Pending' && pending === true) ||
				    filteringByFilterInput
				  ? data.filter(item => item.status === 'Pending')
				  : // Case when I want to filter over the filtered data byt filter input (when adding new letters to the filter input)
				    filteredData.filter(item => item.status === 'Pending');

		const inactiveData: Entity[] =
			// Case when filter input is set (deleting letter from the filter input) and checkbox is checked -> I have to load all data and filter it by status and then by filter input
			filterString.length !== 0 &&
			status === 'Inactive' &&
			inactive === true &&
			!filteringByFilterInput
				? data
						.filter(item => item.status === 'Inactive')
						.filter(item => filterFunction(item, filterString))
				: // Case when filter input is empty and I want to find all occurence of the status
				  filterString.length === 0 ||
				    (status === 'Inactive' && inactive === true) ||
				    filteringByFilterInput
				  ? data.filter(item => item.status === 'Inactive')
				  : // Case when I want to filter over the filtered data byt filter input (when adding new letters to the filter input)
				    filteredData.filter(item => item.status === 'Inactive');

		// Handle each checkbox and concat data into final data array
		if (active === true) {
			checkboxDataHelper = checkboxDataHelper.concat(activeData);
		}

		if (pending === true) {
			checkboxDataHelper = checkboxDataHelper.concat(pendingData);
		}

		if (inactive === true) {
			checkboxDataHelper = checkboxDataHelper.concat(inactiveData);
		}

		// I need new data immedialtely and the setCheckboxData will not update the data immediately, so I need to return also the data
		setCheckboxData(checkboxDataHelper);
		return checkboxDataHelper;
	};

	// Move till here

	const checkboxHandler = (
		checkState: boolean,
		setCheckState: Dispatch<SetStateAction<boolean>>,
		status: string
	) => {
		setFilteredData(
			createCheckBoxData(
				status === 'Active' ? !checkState : activeChecked,
				status === 'Pending' ? !checkState : pendingChecked,
				status === 'Inactive' ? !checkState : inactiveChecked,
				status,
				false
			)
		);

		setCheckState(!checkState);
	};

	const filterInputOnChangeHandler = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		let dataSource: Entity[] = [];

		// Case when sellers are deleted from the filter input
		if (e.target.value.length < filterString.length) {
			dataSource = createCheckBoxData(
				activeChecked,
				pendingChecked,
				inactiveChecked,
				'',
				true
			);
		} else {
			dataSource = checkboxData;
		}

		setFilterString(e.target.value);
		setFilteredData(
			dataSource.filter(item => filterFunction(item, e.target.value))
		);
	};
	// I would separate this into 2 components. One for the input and one for the select box
	return (
		<div className="mb-6 w-4/5 lg:w-1/3">
			<form
				className="flex w-full flex-col items-center gap-4"
				onSubmit={e => {
					e.preventDefault();
				}}
			>
				<input
					type="text"
					placeholder="Filter data"
					className="w-4/5 rounded-lg border border-[#434343] bg-[#09090b] px-3 py-2 text-white outline-none placeholder:text-[#96969E] focus:border-[#E10075] md:w-full"
					onChange={e => filterInputOnChangeHandler(e)}
				/>

				<div className="flex flex-row gap-8">
					<div className="flex flex-row items-center gap-2">
						<Checkbox
							id="active"
							name="active"
							className=" border-[#96969E] hover:border-[#E10075]"
							defaultChecked
							onCheckedChange={e =>
								checkboxHandler(activeChecked, setActiveChecked, 'Active')
							}
						/>
						<label htmlFor="active" className=" text-white">
							Active
						</label>
					</div>
					<div className="flex flex-row items-center gap-2">
						<Checkbox
							id="pending"
							name="pending"
							className=" border-[#96969E] hover:border-[#E10075]"
							defaultChecked
							onCheckedChange={e =>
								checkboxHandler(pendingChecked, setPendingChecked, 'Pending')
							}
						/>
						<label htmlFor="pending" className=" text-white">
							Pending
						</label>
					</div>
					<div className="flex flex-row items-center gap-2">
						<Checkbox
							id="inactive"
							name="inactive"
							className=" border-[#96969E] hover:border-[#E10075]"
							defaultChecked
							onCheckedChange={e =>
								checkboxHandler(inactiveChecked, setInactiveChecked, 'Inactive')
							}
						/>
						<label htmlFor="inactive" className=" text-white">
							Inactive
						</label>
					</div>
				</div>
			</form>
		</div>
	);
};

export default TableFilters;
