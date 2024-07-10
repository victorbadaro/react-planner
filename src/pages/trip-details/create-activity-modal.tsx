import { Calendar, Tag, X } from 'lucide-react';

interface CreateActivityModalProps {
	closeCreateActivityModal: () => void;
}

export function CreateActivityModal({ closeCreateActivityModal }: CreateActivityModalProps) {
	return (
		<div className="fixed inset-0 bg-black/60 flex items-center justify-center">
			<div className="w-[540px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<h2 className="text-lg font-semibold">Cadastrar atividade</h2>

						<button type="button" onClick={closeCreateActivityModal}>
							<X className="size-5 text-zinc-400" />
						</button>
					</div>

					<p className="text-sm text-zinc-400">
						Todos convidados podem visualizar as atividades.
					</p>
				</div>

				<form className="space-y-3">
					<div className="px-4 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
						<Tag className="text-zinc-400 size-5" />

						<input
							type="text"
							name="title"
							placeholder="Qual a atividade?"
							className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
						/>
					</div>

					<div className="px-4 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex flex-1 items-center gap-2">
						<Calendar className="text-zinc-400 size-5" />

						<input
							type="datetime-local"
							name="occurs_at"
							placeholder="Data e horário da atividade"
							className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
						/>
					</div>

					<button type="button" className="bg-lime-300 w-full h-11 text-lime-950 rounded-lg px-5 font-medium flex items-center justify-center gap-2 hover:bg-lime-400">
						Salvar atividade
					</button>
				</form>
			</div>
		</div>
	);
}
