import { format } from 'date-fns';
import { ArrowRight, Calendar, MapPin, Settings2, X } from 'lucide-react';
import { useState } from 'react';
import { DateRange, DayPicker } from 'react-day-picker';
import { Button } from '../../../components/button';

import 'react-day-picker/dist/style.css';

interface DestinationAndDateStepProps {
	isGuestsInputOpen: boolean;
	closeGuestsInput: () => void;
	openGuestsInput: () => void;
}

export function DestinationAndDateStep({ closeGuestsInput, isGuestsInputOpen, openGuestsInput }: DestinationAndDateStepProps) {
	const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
	const [eventStartAndEndDates, setEventStartAndEndDates] = useState<DateRange | undefined>();

	function openDatePicker() {
		setIsDatePickerOpen(true);
	}

	function closeDatePicker() {
		setIsDatePickerOpen(false);
	}

	const displayedDate = eventStartAndEndDates && eventStartAndEndDates.from && eventStartAndEndDates.to
		? format(eventStartAndEndDates.from, 'd\' de \'LLL\'').concat(' até ').concat(format(eventStartAndEndDates.to, 'd\' de \'LLL\''))
		: null;

	return (
		<div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
			<div className="flex items-center gap-2 flex-1">
				<MapPin className="size-5 text-zinc-400" />
				<input type="text" placeholder="Para onde você vai?" disabled={isGuestsInputOpen} className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
			</div>

			<button onClick={openDatePicker} disabled={isGuestsInputOpen} className="flex items-center gap-2 text-left w-60">
				<Calendar className="size-5 text-zinc-400" />
				<span className="text-lg text-zinc-400 w-40 flex-1">
					{displayedDate || 'Quando?'}
				</span>
			</button>

			{isDatePickerOpen && (
				<div className="fixed inset-0 bg-black/60 flex items-center justify-center">
					<div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<h2 className="text-lg font-semibold">Selecione a data</h2>

								<button type="button" onClick={closeDatePicker}>
									<X className="size-5 text-zinc-400" />
								</button>
							</div>
						</div>

						<DayPicker
							mode="range"
							selected={eventStartAndEndDates}
							onSelect={setEventStartAndEndDates}
						/>
					</div>
				</div>
			)}

			<div className="w-px h-6 bg-zinc-800" />

			{isGuestsInputOpen ? (
				<Button type="button" onClick={closeGuestsInput} variant="secondary">
					Alterar local/data
					<Settings2 className="size-5" />
				</Button>
			) : (
				<Button type="button" onClick={openGuestsInput}>
					Continuar
					<ArrowRight className="size-5" />
				</Button>
			)}
		</div>
	);
}
