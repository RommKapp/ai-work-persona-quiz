import { personaById, personas } from "@/data/personas";
import { questions } from "@/data/questions";
import type {
  AnswerOption,
  Persona,
  PersonaId,
  SelectedAnswer,
  Tool,
} from "@/data/types";

export type ScoreResult = {
  personaId: PersonaId;
  persona: Persona;
  scores: Record<PersonaId, number>;
  recommendedTools: Tool[];
};

const initialScores = (): Record<PersonaId, number> =>
  Object.fromEntries(personas.map((persona) => [persona.id, 0])) as Record<
    PersonaId,
    number
  >;

const findOption = (selection: SelectedAnswer): AnswerOption | undefined => {
  const question = questions.find((item) => item.id === selection.questionId);
  return question?.options.find((option) => option.id === selection.optionId);
};

const uniqueTopItems = <T extends string>(items: T[], limit: number): T[] => {
  const counts = items.reduce(
    (accumulator, item) => accumulator.set(item, (accumulator.get(item) ?? 0) + 1),
    new Map<T, number>(),
  );

  return [...counts.entries()]
    .sort((first, second) => second[1] - first[1] || first[0].localeCompare(second[0]))
    .slice(0, limit)
    .map(([item]) => item);
};

export const calculateResult = (answers: SelectedAnswer[]): ScoreResult => {
  const scores = initialScores();
  const toolTags: Tool[] = [];
  let latestHighValuePersona: PersonaId | undefined;

  answers.forEach((answer) => {
    const option = findOption(answer);

    if (!option) {
      return;
    }

    option.tools.forEach((tool) => toolTags.push(tool));

    Object.entries(option.scores).forEach(([personaId, value]) => {
      const typedPersonaId = personaId as PersonaId;
      scores[typedPersonaId] += value ?? 0;

      if ((value ?? 0) >= 2) {
        latestHighValuePersona = typedPersonaId;
      }
    });
  });

  const highestScore = Math.max(...Object.values(scores));
  const tiedPersonas = personas
    .map((persona) => persona.id)
    .filter((personaId) => scores[personaId] === highestScore);
  const personaId =
    latestHighValuePersona && tiedPersonas.includes(latestHighValuePersona)
      ? latestHighValuePersona
      : tiedPersonas[0];

  return {
    personaId,
    persona: personaById[personaId],
    scores,
    recommendedTools: uniqueTopItems(toolTags, 5),
  };
};
