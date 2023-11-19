import React from 'react';
import {
	ValueType,
	NameType
} from 'recharts/types/component/DefaultTooltipContent';
import { TooltipProps } from 'recharts/types/component/Tooltip';

/**
 * CustomTooltip component is used to display the tooltip of the line/bar graph.
 * This component requires the active, payload and label to be passed as a prop with data type of boolean, any and string.
 * @param active: boolean
 * @param payload: any
 * @param label: string
 * @returns CustomTooltip component
 */
const CustomTooltip = ({
	active,
	payload,
	label
}: TooltipProps<ValueType, NameType>) => {
	if (active && payload && payload.length) {
		return (
			<div className=" rounded-xl border border-[#96969E] bg-[#0e0e0e] p-4 opacity-100">
				<p className="label">{`${label}`}</p>
				<p className="text-red-400">{`Expenses: ${payload[0].value}`}</p>
				<p className="text-blue-400">{`Revenue: ${payload[1].value}`}</p>
				<p className="text-green-400">{`Profit: ${payload[2].value}`}</p>
			</div>
		);
	}

	return null;
};

export default CustomTooltip;
