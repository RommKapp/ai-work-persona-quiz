export type PersonaId =
  | "prompt-goblin"
  | "meeting-ghost"
  | "research-detective"
  | "automation-wizard"
  | "tool-connector"
  | "context-builder"
  | "thinking-partner"
  | "tool-explorer";

export type Skill =
  | "Prompting Basics"
  | "Claude Cowork HTU"
  | "Voice Input"
  | "MCP HTU"
  | "Skills HTU"
  | "Meeting Capture"
  | "Scout, internal chatbot"
  | "Deep Research"
  | "Cron tasks"
  | "GPTs"
  | "Thinking models";

export type Tool =
  | "ChatGPT"
  | "Claude Cowork / Code"
  | "Outlook & Calendar"
  | "Voice Input"
  | "Krisp / TL;DV"
  | "HubSpot"
  | "HubSpot MCP"
  | "Confluence MCP"
  | "Jira MCP"
  | "KB MCP"
  | "BI"
  | "Chrome Extension"
  | "Gcore Deck Skill"
  | "Gcore Brand Guidelines"
  | "Basic Anthropic Plugins"
  | "Connectors: GDrive, Slack";

export type Persona = {
  id: PersonaId;
  name: string;
  meaning: string;
  description: string;
  superpower: string;
  blindSpot: string;
  recommendedSkills: Skill[];
  recommendedTools: Tool[];
  shareText: string;
  imagePath: string;
  accent: string;
};

export type AnswerOption = {
  id: string;
  text: string;
  scores: Partial<Record<PersonaId, number>>;
  skills: Skill[];
  tools: Tool[];
};

export type Question = {
  id: string;
  prompt: string;
  options: AnswerOption[];
};

export type SelectedAnswer = {
  questionId: string;
  optionId: string;
};
