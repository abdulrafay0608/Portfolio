import Image from "next/image";

export default function HeroProfile() {
  return (
    <div className="relative mb-8">
      {/* Soft glow */}
      <div
        className="
          absolute
          inset-0
            scale-110
            rounded-full
            bg-sky-400/20
            blur-[120px]
            dark:bg-sky-500/15
        "
      />

      <div
        className="
          relative
          h-36
          w-36
          overflow-hidden
          rounded-full
          border
          border-zinc-200
          bg-zinc-100
          shadow-xl
          shadow-zinc-900/10
          ring-4
          ring-white
          dark:border-white/10
          dark:bg-zinc-900
          dark:ring-zinc-950
          sm:h-40
          sm:w-40
        "
      >
        <Image
          src="/images/profile.png"
          alt="Abdul Rafay"
          fill
          priority
          sizes="160px"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
