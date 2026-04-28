"use client";

import { useMemo, useState } from "react";

import { questions } from "@/data/questions";
import type { SelectedAnswer } from "@/data/types";
import { calculateResult } from "@/lib/scoring";
import { trackEvent } from "@/lib/analytics";
import { ResultCard } from "./ResultCard";

type View = "landing" | "question" | "result";

export function QuizApp() {
  const [view, setView] = useState<View>("landing");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<SelectedAnswer[]>([]);
  const currentQuestion = questions[questionIndex];
  const selectedOptionId = answers.find(
    (answer) => answer.questionId === currentQuestion?.id,
  )?.optionId;
  const result = useMemo(() => calculateResult(answers), [answers]);

  const startQuiz = () => {
    setView("question");
    setQuestionIndex(0);
    setAnswers([]);
    trackEvent("quiz_started");
  };

  const selectAnswer = (optionId: string) => {
    const nextAnswers = [
      ...answers.filter((answer) => answer.questionId !== currentQuestion.id),
      { questionId: currentQuestion.id, optionId },
    ];

    setAnswers(nextAnswers);
    const answerTracked = trackEvent("answer_selected", {
      question: currentQuestion.id,
      option: optionId,
      step: questionIndex + 1,
    });

    if (questionIndex === questions.length - 1) {
      setView("result");
      const finalResult = calculateResult(nextAnswers);
      void answerTracked.then(() =>
        trackEvent("quiz_completed", {
          persona: finalResult.personaId,
          questions: questions.length,
        }),
      );
      return;
    }

    setQuestionIndex((index) => index + 1);
  };

  const goBack = () => {
    if (questionIndex === 0) {
      setView("landing");
      return;
    }

    setQuestionIndex((index) => index - 1);
  };

  if (view === "result") {
    return <ResultCard result={result} onRestart={startQuiz} />;
  }

  if (view === "question") {
    const progress = ((questionIndex + 1) / questions.length) * 100;

    return (
      <section className="mx-auto w-full max-w-3xl rounded-[2rem] border border-[#251b29]/10 bg-[var(--brand-polar)] p-5 shadow-xl shadow-[#251b29]/5 sm:p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm font-semibold text-[var(--brand-ink)]/60">
            <span>
              Question {questionIndex + 1} of {questions.length}
            </span>
            <span>No grades. Very scientific.</span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-[var(--brand-cloud)]">
            <div
              className="h-full rounded-full bg-[var(--brand-orange)] transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <h1 className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold tracking-tight text-[var(--brand-ink)] sm:text-4xl">
          {currentQuestion.prompt}
        </h1>

        <div className="mt-8 grid gap-3">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedOptionId === option.id;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => selectAnswer(option.id)}
                className={`rounded-2xl border p-4 text-left text-base font-semibold transition sm:p-5 ${
                  isSelected
                    ? "border-[var(--brand-orange)] bg-[var(--brand-orange-soft)] text-[var(--brand-ink)]"
                    : "border-[#251b29]/12 bg-[var(--brand-polar)] text-[var(--brand-ink)] hover:border-[var(--brand-orange)]/60 hover:bg-[var(--brand-orange-soft)]/40"
                }`}
              >
                {option.text}
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            onClick={goBack}
            className="rounded-full px-4 py-2 font-semibold text-[var(--brand-ink)]/70 transition hover:bg-[var(--brand-cloud)] hover:text-[var(--brand-ink)]"
          >
            Back
          </button>
          <p className="text-sm text-[var(--brand-ink)]/60">Pick your honest chaos.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--brand-orange-soft)] px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand-orange-deep)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-orange)]" />
          Internal Gcore quiz
        </p>
        <h1 className="font-[family-name:var(--font-montserrat)] text-5xl font-extrabold tracking-tight text-[var(--brand-ink)] sm:text-6xl">
          What is your AI Work Persona?
        </h1>
        <p className="mt-6 max-w-xl text-xl leading-8 text-[var(--brand-ink)]/80">
          12 questions. 3 minutes. No grades, no manager dashboard, no deep
          judgment from a spreadsheet. Find your AI work style and a few tools
          to try next.
        </p>
        <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--brand-ink)]/60">
          This quiz is for fun and learning. It is not a performance assessment,
          even if the button looks confident. We collect anonymous responses to
          improve the program — no names, no emails.
        </p>
        <button
          type="button"
          onClick={startQuiz}
          className="mt-8 rounded-full bg-[var(--brand-orange)] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-[#ff4c00]/25 transition hover:-translate-y-0.5 hover:bg-[#e64500]"
        >
          Start the very serious quiz
        </button>
      </div>

      <div className="rounded-[2rem] border border-[#251b29]/10 bg-[var(--brand-polar)] p-4 shadow-xl shadow-[#251b29]/5">
        <div className="rounded-[1.5rem] bg-[var(--brand-ink)] p-6 text-[var(--brand-cloud)]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-orange)]">
            Possible results, allegedly
          </p>
          <div className="mt-6 grid gap-3">
            {[
              "Prompt Goblin",
              "Meeting Ghost",
              "Research Detective",
              "Automation Wizard",
              "Tool Connector",
              "Context Builder",
              "Thinking Partner",
              "Tool Explorer",
            ].map((name) => (
              <div
                key={name}
                className="rounded-2xl bg-white/5 p-3 font-bold ring-1 ring-white/10 backdrop-blur-sm"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
