'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Entity } from '../types/interfaces';

export const column: ColumnDef<Entity>[] = [
	{
		accessorKey: 'company',
		header: 'Company'
	},
	{
		accessorKey: 'industry',
		header: 'Industry'
	},
	{
		accessorKey: 'location',
		header: 'Location'
	},
	{
		accessorKey: 'employee_count',
		header: 'Employees'
	},
	{
		accessorKey: 'year_founded',
		header: 'Year of founding'
	},
	{
		accessorKey: 'status',
		header: 'Status'
	},
	{
		accessorKey: 'region',
		header: 'Region'
	},
	{
		accessorKey: 'sector',
		header: 'Sector'
	}
];
