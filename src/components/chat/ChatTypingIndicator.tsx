import { LoaderCircle, Sparkles } from "lucide-react";

export default function ChatTypingIndicator() {
	return (
		<div className="flex items-center gap-3 text-sm text-zinc-400">
			<span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 text-sky-500">
				<Sparkles className="h-4 w-4" />
			</span>
			<span className="flex items-center gap-2">
				Thinking about Abdul&apos;s work
				<LoaderCircle className="h-3.5 w-3.5 animate-spin" />
			</span>
		</div>
	);
}
