import type { Persona } from "./types";

export const personas = [
  {
    id: "prompt-goblin",
    name: "Prompt Goblin",
    meaning: "Fast, chaotic, creative prompt user.",
    description:
      "You move fast and try many prompts. Sometimes AI answers perfectly. Sometimes it politely invents a small weather system.",
    superpower: "You turn messy first ideas into useful drafts before the second coffee.",
    blindSpot: "Context can arrive a bit late, usually after the AI has guessed the plot.",
    recommendedTools: ["ChatGPT", "Claude Cowork / Code", "Gcore Brand Guidelines"],
    shareText:
      "I got Prompt Goblin. Fast prompts, tiny chaos, surprisingly useful output.",
    imagePath: "/personas/prompt-goblin.png",
    accent: "from-lime-200 to-emerald-300",
  },
  {
    id: "meeting-ghost",
    name: "Meeting Ghost",
    meaning: "Uses AI to survive meetings and follow-ups.",
    description:
      "You know meetings create decisions, owners, and five versions of what people think happened. You want AI to catch the useful parts before they fade.",
    superpower: "You turn meeting fog into clear next steps.",
    blindSpot: "It is easy to attend the meeting and the recap of the meeting. Very advanced meeting behavior.",
    recommendedTools: ["Krisp / TL;DV", "Outlook & Calendar", "ChatGPT"],
    shareText:
      "I got Meeting Ghost. I haunt calendars, but in a helpful way.",
    imagePath: "/personas/meeting-ghost.png",
    accent: "from-sky-200 to-indigo-300",
  },
  {
    id: "research-detective",
    name: "Research Detective",
    meaning: "Uses AI for research, sources, and decisions.",
    description:
      "You like finding the real answer. You ask for sources, compare options, and give the first answer a healthy side-eye.",
    superpower: "You make better decisions because facts get invited to the meeting.",
    blindSpot: "Research can become a very elegant way to delay sending the message.",
    recommendedTools: ["ChatGPT", "BI", "Connectors: GDrive, Slack"],
    shareText:
      "I got Research Detective. I brought sources to a personality quiz.",
    imagePath: "/personas/research-detective.png",
    accent: "from-amber-200 to-orange-300",
  },
  {
    id: "automation-wizard",
    name: "Automation Wizard",
    meaning: "Wants repeated work to happen automatically.",
    description:
      "You see repeated tasks and quietly take it personally. If a button gets clicked every Friday, you are already suspicious.",
    superpower: "You save time by teaching boring tasks to behave.",
    blindSpot: "Sometimes the process needs cleaning before it gets a tiny robot hat.",
    recommendedTools: ["ChatGPT", "Chrome Extension", "Basic Anthropic Plugins"],
    shareText:
      "I got Automation Wizard. My favorite task is the one that stops asking for me.",
    imagePath: "/personas/automation-wizard.png",
    accent: "from-purple-200 to-fuchsia-300",
  },
  {
    id: "tool-connector",
    name: "Tool Connector",
    meaning: "Connects AI with real company tools and data.",
    description:
      "You do not want to copy-paste from ten tabs like it is 2014. You want AI to work with HubSpot, Jira, Confluence, KB, Slack, or GDrive directly.",
    superpower: "You connect systems so work stops living in browser tabs.",
    blindSpot: "MCP makes sense to you. This is wonderful, and also not true for everyone yet.",
    recommendedTools: ["HubSpot MCP", "Jira MCP", "Confluence MCP", "Knowledge Base MCP"],
    shareText:
      "I got Tool Connector. I believe tabs should talk to each other and leave me alone.",
    imagePath: "/personas/tool-connector.png",
    accent: "from-cyan-200 to-blue-300",
  },
  {
    id: "context-builder",
    name: "Context Builder",
    meaning: "Gives AI the right background and constraints.",
    description:
      "You know AI works better with context, files, examples, and rules. You are the person who brings receipts to a prompt.",
    superpower: "You get better outputs because the input is not a mystery novel.",
    blindSpot: "Sometimes preparing the context becomes the task. The AI waits politely.",
    recommendedTools: ["ChatGPT", "Claude Cowork / Code", "Gcore Brand Guidelines"],
    shareText:
      "I got Context Builder. I bring files, rules, and a suspiciously organized prompt.",
    imagePath: "/personas/context-builder.png",
    accent: "from-stone-200 to-slate-300",
  },
  {
    id: "thinking-partner",
    name: "Thinking Partner",
    meaning: "Uses AI to think through complex problems.",
    description:
      "You do not only ask AI to write text. You ask it to compare options, find risks, and think until the simple task starts wearing glasses.",
    superpower: "You make complex choices clearer before they become calendar drama.",
    blindSpot: "A small task may not need a three-act reasoning journey.",
    recommendedTools: ["ChatGPT", "Claude Cowork / Code", "BI"],
    shareText:
      "I got Thinking Partner. I asked AI to think, then questioned the thinking.",
    imagePath: "/personas/thinking-partner.png",
    accent: "from-violet-200 to-indigo-300",
  },
  {
    id: "tool-explorer",
    name: "Tool Explorer",
    meaning: "Tries many AI tools and experiments with new workflows.",
    description:
      "You like trying new tools. Your browser history looks like a small AI trade show, but you learn fast.",
    superpower: "You bring new ideas before the rest of us find the settings page.",
    blindSpot: "A tool can be exciting and still not deserve a permanent tab.",
    recommendedTools: ["ChatGPT", "Claude Cowork / Code", "Gcore Deck Skill"],
    shareText:
      "I got Tool Explorer. My browser has many tabs, and at least three are important.",
    imagePath: "/personas/tool-explorer.png",
    accent: "from-rose-200 to-pink-300",
  },
] satisfies Persona[];

export const personaById = Object.fromEntries(
  personas.map((persona) => [persona.id, persona]),
) as Record<Persona["id"], Persona>;
