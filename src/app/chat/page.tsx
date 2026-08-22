import { Suspense } from "react";

import ChatPageClient from "./ChatPageClient";

export default function ChatPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <ChatPageClient />
    </Suspense>
  );
}
