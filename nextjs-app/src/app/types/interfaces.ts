import { Sector, Status } from './types';

export interface MonthlyData {
	date: string;
	Revenue: number;
	Expenses: number;
	Profit: number;
}

export interface Entity {
	id: number;
	company: string;
	industry: string;
	location: string;
	employee_count: number;
	year_founded: number;
	status: Status;
	region: string;
	sector: Sector;
	monthlyData: MonthlyData[];
}
