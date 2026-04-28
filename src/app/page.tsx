import { QuizApp } from "@/components/QuizApp";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-128px)] bg-[radial-gradient(circle_at_top_right,_#ffe5d6_0%,_transparent_38rem),linear-gradient(180deg,_#fff3eb_0%,_#fffef8_100%)] px-4 py-8 sm:px-6 sm:py-12">
      <QuizApp />
    </main>
  );
}
