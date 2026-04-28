import { QuizApp } from "@/components/QuizApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#e0e7ff,_transparent_34rem),linear-gradient(180deg,_#f8fafc_0%,_#eef2ff_100%)] px-4 py-8 sm:px-6 sm:py-12">
      <QuizApp />
    </main>
  );
}
