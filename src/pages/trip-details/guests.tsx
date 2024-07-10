import { CircleCheck, CircleDashed, UserCog } from 'lucide-react';

export function Guests() {
	return (
		<div className="space-y-6">
			<h2 className="font-semibold text-xl">Convidados</h2>

			<div className="space-y-5">
				<div className="flex items-center justify-between gap-4">
					<div className="space-y-1.5">
						<span className="block font-medium text-zinc-100">Jessica White</span>
						<span className="block text-sm text-zinc-400 truncate">jessica.white44@yahoo.com</span>
					</div>

					<CircleDashed className="text-zinc-400 size-5 shrink-0" />
				</div>

				<div className="flex items-center justify-between gap-4">
					<div className="space-y-1.5">
						<span className="block font-medium text-zinc-100">Dr. Rita Pacocha</span>
						<span className="block text-sm text-zinc-400 truncate">lacy.stiedemann@gmail.com</span>
					</div>

					<CircleCheck className="text-lime-300 size-5 shrink-0" />
				</div>
			</div>

			<button type="button" className="bg-zinc-800 w-full h-11 text-zinc-200 rounded-lg px-5 font-medium flex items-center justify-center gap-2 hover:bg-zinc-700">
				<UserCog className="size-5" />
				Gerenciar convidados
			</button>
		</div>
	);
}
