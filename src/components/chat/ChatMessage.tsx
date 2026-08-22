import { Sparkles } from "lucide-react";

import type { Message } from "./types";

export default function ChatMessage({ message }: { message: Message }) {
	const isUser = message.role === "user";

	return (
		<div className={isUser ? "flex justify-end" : "flex gap-3"}>
			{!isUser && (
				<span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-500">
					<Sparkles className="h-4 w-4" />
				</span>
			)}
			<div
				className={
					isUser
						? "max-w-[85%] rounded-2xl rounded-br-sm bg-zinc-900 px-4 py-3 text-sm leading-6 text-white dark:bg-white dark:text-zinc-950"
						: "max-w-[85%] pt-1 text-[15px] leading-7 text-zinc-700 dark:text-zinc-300"
				}
			>
				{message.content}
			</div>
		</div>
	);
}
