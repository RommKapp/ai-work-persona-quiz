import { describe, expect, it } from "vitest";

import { calculateResult } from "./scoring";

describe("calculateResult", () => {
  it("selects the persona with the highest score", () => {
    const result = calculateResult([
      { questionId: "meeting-follow-up", optionId: "transcript" },
      { questionId: "internal-search", optionId: "ask-team" },
    ]);

    expect(result.personaId).toBe("meeting-ghost");
    expect(result.scores["meeting-ghost"]).toBe(4);
  });

  it("counts secondary persona points", () => {
    const result = calculateResult([
      { questionId: "prompting", optionId: "add-context" },
    ]);

    expect(result.scores["context-builder"]).toBe(2);
    expect(result.scores["prompt-goblin"]).toBe(1);
  });

  it("uses the most recent high-value answer as a tie breaker", () => {
    const result = calculateResult([
      { questionId: "prompting", optionId: "rapid-retry" },
      { questionId: "prompting", optionId: "switch-model" },
      { questionId: "prompting", optionId: "add-context" },
    ]);

    expect(result.scores["prompt-goblin"]).toBe(3);
    expect(result.scores["tool-explorer"]).toBe(3);
    expect(result.scores["context-builder"]).toBe(3);
    expect(result.personaId).toBe("context-builder");
  });

  it("returns top recommended skills and tools from selected answers", () => {
    const result = calculateResult([
      { questionId: "weekly-report", optionId: "cron-task" },
      { questionId: "project-update", optionId: "jira-mcp" },
      { questionId: "personality", optionId: "connected-map" },
    ]);

    expect(result.recommendedSkills).toContain("MCP HTU");
    expect(result.recommendedTools).toContain("Jira MCP");
    expect(result.recommendedTools.length).toBeLessThanOrEqual(5);
  });

  it("ignores unknown answer ids without failing", () => {
    const result = calculateResult([
      { questionId: "unknown", optionId: "missing" },
      { questionId: "deck", optionId: "deck-skill" },
    ]);

    expect(result.personaId).toBe("automation-wizard");
  });
});
