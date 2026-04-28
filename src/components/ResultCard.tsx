"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { toBlob, toPng } from "html-to-image";

import type { ScoreResult } from "@/lib/scoring";
import { trackEvent } from "@/lib/analytics";
import { withBasePath } from "@/lib/asset-path";

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
      <div className="rounded-[2rem] border border-[#251b29]/10 bg-[var(--brand-polar)] p-4 shadow-xl shadow-[#251b29]/5">
        <div
          ref={shareCardRef}
          className={`flex aspect-square flex-col justify-between overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${persona.accent} p-6 text-slate-950`}
          data-image-path={persona.imagePath}
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff4c00]" />
            Gcore · AI Work Persona
          </span>
          <Image
            src={withBasePath(persona.imagePath)}
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

      <div className="rounded-[2rem] border border-[#251b29]/10 bg-[var(--brand-polar)] p-6 shadow-xl shadow-[#251b29]/5 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-orange-deep)]">
          You are
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-montserrat)] text-4xl font-extrabold tracking-tight text-[var(--brand-ink)] sm:text-5xl">
          {persona.name}
        </h1>
        <p className="mt-3 text-lg font-medium text-[var(--brand-ink)]/80">{persona.meaning}</p>
        <p className="mt-5 text-base leading-7 text-[var(--brand-ink)]/70">{persona.description}</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <InfoBlock title="Your superpower" text={persona.superpower} />
          <InfoBlock title="Your blind spot" text={persona.blindSpot} />
        </div>

        <div className="mt-6">
          <TagList title="Tools to explore" items={result.recommendedTools} />
        </div>

        <div className="mt-8 rounded-2xl bg-[var(--brand-cloud)] p-4">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand-ink)]/60">
            Share in Slack
          </p>
          <p className="mt-2 text-[var(--brand-ink)]">{persona.shareText}</p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={copyShareText}
            className="rounded-full bg-[var(--brand-orange)] px-6 py-3 font-semibold text-white shadow-lg shadow-[#ff4c00]/20 transition hover:bg-[#e64500]"
          >
            {copied ? "Copied for Slack" : "Copy Slack text"}
          </button>
          <button
            type="button"
            onClick={copyResultImage}
            className="rounded-full border border-[#251b29]/15 bg-[var(--brand-polar)] px-6 py-3 font-semibold text-[var(--brand-ink)] transition hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)]"
          >
            {imageCopied ? "Image copied" : "Copy result image"}
          </button>
          <button
            type="button"
            onClick={downloadResultImage}
            className="rounded-full border border-[#251b29]/15 bg-[var(--brand-polar)] px-6 py-3 font-semibold text-[var(--brand-ink)] transition hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)]"
          >
            {imageSaved ? "Image saved" : "Download image"}
          </button>
          <button
            type="button"
            onClick={onRestart}
            className="rounded-full px-6 py-3 font-semibold text-[var(--brand-ink)]/60 transition hover:text-[var(--brand-ink)]"
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
    <div className="rounded-2xl border border-[#251b29]/12 p-4">
      <h3 className="font-bold text-[var(--brand-ink)]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[var(--brand-ink)]/70">{text}</p>
    </div>
  );
}

function TagList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-bold text-[var(--brand-ink)]">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-[var(--brand-orange-soft)] px-3 py-1 text-sm font-semibold text-[var(--brand-orange-deep)]"
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
