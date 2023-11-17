'use client';

import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
	SortingState,
	getSortedRowModel
} from '@tanstack/react-table';

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui/table';
import { useState } from 'react';

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
}

export function DataTable<TData, TValue>({
	columns,
	data
}: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = useState<SortingState>([]);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		state: {
			sorting
		}
	});

	return (
		<div className=" h-5/6  max-w-[calc(100%-60px)] rounded-3xl bg-[#0e0e0e] p-8">
			<div className=" h-full w-full overflow-auto bg-[#0e0e0e] ">
				<Table>
					<TableHeader className="sticky top-0">
						{table.getHeaderGroups().map(headerGroup => (
							<TableRow
								key={headerGroup.id}
								className={` border-[#4d4d52] bg-[#0e0e0e] duration-200 hover:bg-[#0e0e0e]`}
								// className={` border-[#4d4d52] hover:bg-[#292929]`}
							>
								{headerGroup.headers.map(header => {
									return (
										<TableHead
											key={header.id}
											className={` sticky top-0 text-[#96969E] hover:text-[#EEEEEE]`}
										>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext()
												  )}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map(row => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && 'selected'}
									className={` border-[#4d4d52] hover:bg-[#292929]`}
								>
									{row.getVisibleCells().map(cell => (
										<TableCell
											key={cell.id}
											className={` text-center text-[#EEEEEE]`}
										>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
