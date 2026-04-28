import type { AnswerOption, PersonaId, Question, Tool } from "./types";

type OptionInput = [
  id: string,
  text: string,
  scores: Partial<Record<PersonaId, number>>,
  tools: Tool[],
];

const option = ([id, text, scores, tools]: OptionInput): AnswerOption => ({
  id,
  text,
  scores,
  tools,
});

const q = (id: string, prompt: string, options: OptionInput[]): Question => ({
  id,
  prompt,
  options: options.map(option),
});

export const questions = [
  q("work-style", "A new AI tool appears in Slack. How do you greet it?", [
    ["try-now", "Test it before the hype cools", { "tool-explorer": 2, "prompt-goblin": 1 }, ["ChatGPT", "Chrome Extension"]],
    ["ask-context", "Read the guide like a responsible adult", { "context-builder": 2, "thinking-partner": 1 }, ["Claude Cowork / Code", "Gcore Brand Guidelines"]],
    ["find-use-case", "Ask who already broke it nicely", { "research-detective": 2, "meeting-ghost": 1 }, ["Connectors: GDrive, Slack"]],
    ["connect-tools", "Check which tools it can bother", { "tool-connector": 2, "automation-wizard": 1 }, ["HubSpot MCP", "Jira MCP"]],
  ]),
  q("prompting", "ChatGPT gives a weak answer. What is your polite revenge?", [
    ["rapid-retry", "Rewrite fast and pretend it was planned", { "prompt-goblin": 2, "tool-explorer": 1 }, ["ChatGPT"]],
    ["add-context", "Add examples and a clear format", { "context-builder": 2, "prompt-goblin": 1 }, ["ChatGPT", "Gcore Brand Guidelines"]],
    ["ask-reasoning", "Ask it to compare the choices", { "thinking-partner": 2, "research-detective": 1 }, ["ChatGPT", "Claude Cowork / Code"]],
    ["switch-model", "Try Claude and avoid eye contact", { "tool-explorer": 2, "context-builder": 1 }, ["Claude Cowork / Code"]],
  ]),
  q("meeting-follow-up", "A meeting just ended. Where do the decisions hide?", [
    ["transcript", "Ask TL;DV or Krisp for evidence", { "meeting-ghost": 2, "context-builder": 1 }, ["Krisp / TL;DV"]],
    ["voice-notes", "Record notes before memory melts", { "meeting-ghost": 2, "prompt-goblin": 1 }, ["Voice Input", "ChatGPT"]],
    ["calendar-check", "Check Teams and old messages", { "research-detective": 2, "meeting-ghost": 1 }, ["Outlook & Calendar", "Connectors: GDrive, Slack"]],
    ["action-template", "Use a template, because mercy exists", { "automation-wizard": 2, "context-builder": 1 }, ["ChatGPT", "Gcore Deck Skill"]],
  ]),
  q("competitor-research", "Your manager asks for competitor news. The clock is judging you.", [
    ["deep-research", "Start Deep Research with sources", { "research-detective": 2, "thinking-partner": 1 }, ["ChatGPT"]],
    ["scout-context", "Ask Scout what we already know", { "research-detective": 2, "tool-connector": 1 }, ["Connectors: GDrive, Slack"]],
    ["quick-summary", "Ask ChatGPT for a fast first draft", { "prompt-goblin": 2, "tool-explorer": 1 }, ["ChatGPT"]],
    ["decision-table", "Make a table, because tables calm people", { "thinking-partner": 2, "context-builder": 1 }, ["BI", "Claude Cowork / Code"]],
  ]),
  q("internal-search", "You need info on a potential client. The answer is somewhere. Naturally.", [
    ["scout", "Ask Scout before opening twelve tabs", { "research-detective": 2, "tool-connector": 1 }, ["Connectors: GDrive, Slack"]],
    ["connectors", "Run external research before the tabs multiply", { "research-detective": 2, "thinking-partner": 1 }, ["ChatGPT"]],
    ["kb-mcp", "Try Confluence or Knowledge Base MCP", { "tool-connector": 2, "context-builder": 1 }, ["Confluence MCP", "Knowledge Base MCP"]],
    ["ask-team", "Ask a teammate and hope gently", { "meeting-ghost": 2, "context-builder": 1 }, ["Outlook & Calendar"]],
  ]),
  q("tool-choice", "You need a clean first draft. Which setup sounds best?", [
    ["brand-context", "Pure ChatGPT", { "context-builder": 2, "prompt-goblin": 1 }, ["ChatGPT", "Gcore Brand Guidelines"]],
    ["claude-files", "Claude Cowork with filesand brand rules", { "context-builder": 2, "thinking-partner": 1 }, ["Claude Cowork / Code"]],
    ["custom-gpt", "A reusable GPTs", { "automation-wizard": 2, "tool-explorer": 1 }, ["ChatGPT"]],
    ["plugin-test", "Try a plugin workflow in Claude", { "tool-explorer": 2, "automation-wizard": 1 }, ["Basic Anthropic Plugins", "Chrome Extension"]],
  ]),
  q("weekly-report", "The same report returns every Friday. It has confidence.", [
    ["cron-task", "Create a cron task", { "automation-wizard": 2, "tool-connector": 1 }, ["ChatGPT", "BI"]],
    ["reusable-gpt", "Build a reusable GPTs", { "automation-wizard": 2, "context-builder": 1 }, ["ChatGPT"]],
    ["ask-again", "Ask AI again and call it tradition", { "prompt-goblin": 2, "tool-explorer": 1 }, ["ChatGPT"]],
    ["template", "Improve the template so future-you smiles", { "context-builder": 2, "thinking-partner": 1 }, ["Gcore Brand Guidelines", "BI"]],
  ]),
  q("customer-call", "You need account context before a customer call. What helps most?", [
    ["hubspot", "HubSpot MCP", { "tool-connector": 2, "research-detective": 1 }, ["HubSpot MCP"]],
    ["emails-notes", "Previous emails and notes", { "research-detective": 2, "meeting-ghost": 1 }, ["Outlook & Calendar", "Connectors: GDrive, Slack"]],
    ["quick-ai", "A quick AI summary", { "prompt-goblin": 2, "context-builder": 1 }, ["ChatGPT"]],
    ["call-plan", "Open HubSpot and read the actual story", { "research-detective": 2, "thinking-partner": 1 }, ["HubSpot"]],
  ]),
  q("project-update", "A project update is messy. The dots refuse to connect.", [
    ["jira-mcp", "Ask Jira MCP what is real", { "tool-connector": 2, "automation-wizard": 1 }, ["Jira MCP"]],
    ["confluence", "Ask Confluence MCP for the backstory", { "context-builder": 2, "tool-connector": 1 }, ["Confluence MCP"]],
    ["decision-risks", "Ask what could go wrong", { "thinking-partner": 2, "research-detective": 1 }, ["ChatGPT", "Claude Cowork / Code"]],
    ["recap-meeting", "Ask: wait, what is MCP again?", { "tool-explorer": 2, "context-builder": 1 }, ["Confluence MCP"]],
  ]),
  q("deck", "You need a small deck by tomorrow. Your first helper?", [
    ["deck-skill", "Gcore Deck Skill in Cowork", { "automation-wizard": 2, "context-builder": 1 }, ["Gcore Deck Skill"]],
    ["brand-guide", "Brand guidelines skills", { "context-builder": 2, "research-detective": 1 }, ["Gcore Brand Guidelines", "Connectors: GDrive, Slack"]],
    ["fast-draft", "Fast draft in PowerPoint, fix later", { "prompt-goblin": 2, "tool-explorer": 1 }, ["ChatGPT"]],
    ["storyline", "Ask for storyline options", { "thinking-partner": 2, "context-builder": 1 }, ["Claude Cowork / Code"]],
  ]),
  q("complex-decision", "A decision has many trade-offs. How do you use AI?", [
    ["reasoning-model", "Use a thinking model", { "thinking-partner": 2, "research-detective": 1 }, ["ChatGPT", "Claude Cowork / Code"]],
    ["source-check", "Run Deep Research, then distrust it politely", { "research-detective": 2, "thinking-partner": 1 }, ["ChatGPT"]],
    ["ask-team-voice", "Ask MCPs for the system gossip", { "tool-connector": 2, "context-builder": 1 }, ["Jira MCP", "Confluence MCP", "Knowledge Base MCP"]],
    ["prototype-workflow", "Ask colleagues before AI gets dramatic", { "meeting-ghost": 2, "context-builder": 1 }, ["Outlook & Calendar", "Connectors: GDrive, Slack"]],
  ]),
  q("personality", "If your AI workspace had a desk, what would be on it?", [
    ["many-prompts", "Many prompts and a tiny fire", { "prompt-goblin": 2, "tool-explorer": 1 }, ["ChatGPT"]],
    ["clean-system", "Rules, examples, and calm folders", { "context-builder": 2, "thinking-partner": 1 }, ["Gcore Brand Guidelines", "Claude Cowork / Code"]],
    ["connected-map", "Connected tools with no lonely tabs", { "tool-connector": 2, "automation-wizard": 1 }, ["HubSpot MCP", "Jira MCP", "Knowledge Base MCP"]],
    ["notes-sources", "Notes, sources, and meeting ghosts", { "research-detective": 2, "meeting-ghost": 1 }, ["Krisp / TL;DV", "Connectors: GDrive, Slack"]],
  ]),
] satisfies Question[];
