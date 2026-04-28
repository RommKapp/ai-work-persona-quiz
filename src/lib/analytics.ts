"use client";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

type AnalyticsEventName =
  | "quiz_started"
  | "answer_selected"
  | "quiz_completed"
  | "slack_copy_clicked"
  | "result_image_copied"
  | "result_image_downloaded"
  | "learning_link_clicked";

type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let client: SupabaseClient | null = null;
let sessionId: string | null = null;
let deviceType: "mobile" | "desktop" | null = null;

const getClient = (): SupabaseClient | null => {
  if (client) return client;
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return null;
  client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: false },
  });
  return client;
};

const getSessionId = (): string => {
  if (sessionId) return sessionId;
  sessionId =
    globalThis.crypto?.randomUUID?.() ??
    `00000000-0000-4000-8000-${Date.now().toString(16).padStart(12, "0")}`;
  return sessionId;
};

const getDeviceType = (): "mobile" | "desktop" => {
  if (deviceType) return deviceType;
  if (typeof window === "undefined") return "desktop";
  deviceType = window.matchMedia("(max-width: 768px)").matches
    ? "mobile"
    : "desktop";
  return deviceType;
};

export const trackEvent = (
  name: AnalyticsEventName,
  payload: AnalyticsPayload = {},
): Promise<void> => {
  if (typeof window === "undefined") return Promise.resolve();

  const supabase = getClient();
  if (!supabase) return Promise.resolve();

  const { persona, question, option, ...rest } = payload;

  return Promise.resolve(
    supabase.from("quiz_events").insert({
      session_id: getSessionId(),
      event_name: name,
      persona_id: typeof persona === "string" ? persona : null,
      question_id: typeof question === "string" ? question : null,
      option_id: typeof option === "string" ? option : null,
      device_type: getDeviceType(),
      meta: Object.keys(rest).length ? rest : null,
    }),
  ).then(({ error }) => {
    if (error && process.env.NODE_ENV !== "production") {
      console.warn("[analytics] insert failed", error.message);
    }
  });
};
