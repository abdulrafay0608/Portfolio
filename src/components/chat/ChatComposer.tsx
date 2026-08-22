import { Send } from "lucide-react";
import React, { FormEvent } from "react";

export const ChatComposer = ({
  inputId,
  value,
  onChange,
  onSubmit,
  placeholder,
}: {
  inputId: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  placeholder: string;
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="mt-9 w-full rounded-2xl border border-zinc-200 bg-white/80 p-2 shadow-xl shadow-zinc-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/75"
    >
      <label className="sr-only" htmlFor={inputId}>
        Ask anything about Abdul Rafay
      </label>
      <div className="flex items-center gap-2">
        <input
          id={inputId}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent p-3 text-sm outline-none placeholder:text-zinc-400"
        />
        <button
          type="submit"
          aria-label="Send question"
          className="rounded-xl bg-sky-500 p-3 text-white transition hover:bg-sky-600 shrink-0"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
};
