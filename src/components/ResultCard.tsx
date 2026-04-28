"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { toBlob, toPng } from "html-to-image";

import type { ScoreResult } from "@/lib/scoring";
import { trackEvent } from "@/lib/analytics";

type ResultCardProps = {
  result: ScoreResult;
  onRestart: () => void;
};

export function ResultCard({ result, onRestart }: ResultCardProps) {
  const [copied, setCopied] = useState(false);
  const [imageCopied, setImageCopied] = useState(false);
  const [imageSaved, setImageSaved] = useState(false);
  const shareCardRef = useRef<HTMLDivElement>(null);
  const { persona } = result;

  const copyShareText = async () => {
    await copyToClipboard(persona.shareText);
    setCopied(true);
    trackEvent("slack_copy_clicked", { persona: persona.id });
  };

  const downloadResultImage = async () => {
    if (!shareCardRef.current) {
      return;
    }

    const dataUrl = await toPng(shareCardRef.current, { pixelRatio: 2 });
    const link = document.createElement("a");
    link.download = `${persona.id}-result-card.png`;
    link.href = dataUrl;
    link.click();
    setImageSaved(true);
    trackEvent("result_image_downloaded", { persona: persona.id });
  };

  const copyResultImage = async () => {
    if (!shareCardRef.current || !navigator.clipboard?.write) {
      await downloadResultImage();
      return;
    }

    const blob = await toBlob(shareCardRef.current, { pixelRatio: 2 });

    if (!blob) {
      return;
    }

    try {
      await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
      setImageCopied(true);
      trackEvent("result_image_copied", { persona: persona.id });
    } catch {
      await downloadResultImage();
    }
  };

  return (
    <section className="mx-auto grid w-full max-w-5xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-xl shadow-slate-200/70">
        <div
          ref={shareCardRef}
          className={`flex aspect-square flex-col justify-between overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${persona.accent} p-6 text-slate-950`}
          data-image-path={persona.imagePath}
        >
          <span className="w-fit rounded-full bg-white/70 px-3 py-1 text-sm font-semibold">
            AI Work Persona
          </span>
          <Image
            src={persona.imagePath}
            alt={`${persona.name} character`}
            width={224}
            height={224}
            unoptimized
            className="mx-auto h-56 w-56 rounded-[2rem] object-cover shadow-2xl shadow-slate-700/20"
          />
          <div className="rounded-3xl bg-white/75 p-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-600">
              My result
            </p>
            <h2 className="text-4xl font-black tracking-tight">{persona.name}</h2>
            <p className="mt-3 text-base font-semibold text-slate-700">
              {persona.meaning}
            </p>
            <p className="mt-5 text-sm leading-6 text-slate-700">
              {persona.shareText}
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          You are
        </p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
          {persona.name}
        </h1>
        <p className="mt-3 text-lg font-medium text-slate-700">{persona.meaning}</p>
        <p className="mt-5 text-base leading-7 text-slate-600">{persona.description}</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <InfoBlock title="Your superpower" text={persona.superpower} />
          <InfoBlock title="Your blind spot" text={persona.blindSpot} />
        </div>

        <div id="try-next" className="mt-6 grid gap-4 sm:grid-cols-2">
          <TagList title="Try next" items={result.recommendedSkills} />
          <TagList title="Tools to explore" items={result.recommendedTools} />
        </div>

        <div className="mt-8 rounded-2xl bg-slate-100 p-4">
          <p className="text-sm font-semibold text-slate-500">Share in Slack</p>
          <p className="mt-2 text-slate-800">{persona.shareText}</p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={copyShareText}
            className="rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            {copied ? "Copied for Slack" : "Copy Slack text"}
          </button>
          <button
            type="button"
            onClick={copyResultImage}
            className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-800 transition hover:border-slate-950"
          >
            {imageCopied ? "Image copied" : "Copy result image"}
          </button>
          <button
            type="button"
            onClick={downloadResultImage}
            className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-800 transition hover:border-slate-950"
          >
            {imageSaved ? "Image saved" : "Download image"}
          </button>
          <a
            href="#try-next"
            onClick={() => trackEvent("learning_link_clicked", { persona: persona.id })}
            className="rounded-full border border-slate-300 px-6 py-3 text-center font-semibold text-slate-800 transition hover:border-slate-950"
          >
            See learning ideas
          </a>
          <button
            type="button"
            onClick={onRestart}
            className="rounded-full px-6 py-3 font-semibold text-slate-600 transition hover:text-slate-950"
          >
            Retake quiz
          </button>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4">
      <h3 className="font-bold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}

function TagList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-bold text-slate-950">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

async function copyToClipboard(text: string) {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Some embedded browser contexts expose Clipboard API but block writes.
    }
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
}
