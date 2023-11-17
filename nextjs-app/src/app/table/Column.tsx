'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Entity } from '../types/interfaces';
import { ArrowUpDown } from 'lucide-react';

export const column: ColumnDef<Entity>[] = [
	{
		accessorKey: 'id',
		header: ({ column }) => {
			return (
				<button
					className=" flex flex-row flex-nowrap items-center justify-center rounded-md px-3 py-2 hover:bg-[#E10075]"
					// className=" flex flex-row flex-nowrap items-center justify-center rounded-md px-3 py-2 hover:bg-[#292929]"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Company ID
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		}
	},
	{
		accessorKey: 'company',
		header: ({ column }) => {
			return (
				<button
					className=" flex flex-row flex-nowrap items-center justify-center rounded-md px-3 py-2 hover:bg-[#E10075]"
					// className=" flex flex-row flex-nowrap items-center justify-center rounded-md px-3 py-2 hover:bg-[#292929]"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Company
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		}
	},
	{
		accessorKey: 'industry',
		header: ({ column }) => {
			return (
				<button
					className=" flex flex-row flex-nowrap items-center justify-center rounded-md px-3 py-2 hover:bg-[#E10075]"
					// className=" flex flex-row flex-nowrap items-center justify-center rounded-md px-3 py-2 hover:bg-[#292929]"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Industry
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		}
	},
	{
		accessorKey: 'location',
		header: ({ column }) => {
			return (
				<button
					className=" flex flex-row flex-nowrap items-center justify-center rounded-md px-3 py-2 hover:bg-[#E10075]"
					// className=" flex flex-row flex-nowrap items-center justify-center rounded-md px-3 py-2 hover:bg-[#292929]"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Location
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		}
	},
	{
		accessorKey: 'employee_count',
		header: ({ column }) => {
			return (
				<button
					className=" flex flex-row flex-nowrap items-center justify-center rounded-md px-3 py-2 hover:bg-[#E10075]"
					// className=" flex flex-row flex-nowrap items-center justify-center rounded-md px-3 py-2 hover:bg-[#292929]"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Employees
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		}
	},
	{
		accessorKey: 'year_founded',
		header: ({ column }) => {
			return (
				<button
					className=" flex flex-row flex-nowrap items-center justify-center rounded-md px-3 py-2 hover:bg-[#E10075]"
					// className=" flex flex-row flex-nowrap items-center justify-center rounded-md px-3 py-2 hover:bg-[#292929]"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Year of founding
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		}
	},
	{
		accessorKey: 'status',
		header: ({ column }) => {
			return (
				<button
					className=" flex flex-row flex-nowrap items-center justify-center rounded-md px-3 py-2 hover:bg-[#E10075]"
					// className=" flex flex-row flex-nowrap items-center justify-center rounded-md px-3 py-2 hover:bg-[#292929]"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Status
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		}
	},
	{
		accessorKey: 'region',
		header: ({ column }) => {
			return (
				<button
					className=" flex flex-row flex-nowrap items-center justify-center rounded-md px-3 py-2 hover:bg-[#E10075]"
					// className=" flex flex-row flex-nowrap items-center justify-center rounded-md px-3 py-2 hover:bg-[#292929]"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Region
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		}
	},
	{
		accessorKey: 'sector',
		header: ({ column }) => {
			return (
				<button
					className=" flex flex-row flex-nowrap items-center justify-center rounded-md px-3 py-2 hover:bg-[#E10075]"
					// className=" flex flex-row flex-nowrap items-center justify-center rounded-md px-3 py-2 hover:bg-[#292929]"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Sector
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</button>
			);
		}
	}
];
