# AI Work Persona Quiz — Product & Content Specification

## 1. Project summary

**Working title:** AI Work Persona Quiz
**Simple public title:** What is your AI Work Persona?
**Format:** Short interactive web quiz
**Language:** Simple English
**Primary channel:** Slack announcement with a link to the quiz
**Target platform:** Responsive web app for desktop and mobile

This project is a fun, lightweight quiz that helps employees discover their personal AI work style. It is not an exam and not a knowledge assessment. The main goal is to create curiosity, make people smile, and help them realize that there are AI tools and skills they may not know yet.

At the end of the quiz, each person receives an AI Work Persona, a short explanation, an image/card, and a few recommended skills or tools to try next.

The quiz should feel like a playful internal campaign, not like corporate training.

---

## 2. Why we are doing this

The company is introducing AI tools and AI workflows across many teams. Many employees already use AI in some way, but often only at a basic level. The company wants people to become more confident with AI in everyday work.

The goal of this quiz is to:

1. Make AI learning feel fun and approachable.
2. Show employees that AI is useful not only for developers.
3. Help people discover gaps in their AI habits without feeling judged.
4. Promote internal AI learning topics and tools.
5. Create a viral internal moment that people want to share in Slack.
6. Generate interest in future AI training, workshops, office hours, or learning paths.

This quiz is not designed to measure performance. It is designed to create awareness and motivation.

---

## 3. Target audience

The quiz is for all employees, including:

* Marketing teams
* Sales teams
* Customer-facing teams
* Operations teams
* Finance and BI users
* Product managers
* Team leads and department heads
* Developers and technical employees
* Non-technical office employees

The quiz should not be too technical. However, technical people should still recognize themselves in some personas and answers.

Important audience constraints:

* Most employees work remotely.
* English is not the first language for most employees.
* The quiz must use simple English.
* The quiz must work well on mobile and desktop.
* The quiz must not require paper, physical materials, or live participation.
* The quiz should not feel like a test with obviously right and wrong answers.

---

## 4. Source topics to include

The quiz must be based on the following internal AI skills and tools.

### Skills

* Prompting Basics
* Claude Cowork HTU
* Voice Input
* MCP HTU
* Skills HTU
* Meeting Capture
* Scout, internal chatbot
* Deep Research
* Cron tasks
* GPTs
* Thinking models

### Tools

* ChatGPT
* Claude Cowork / Code
* Outlook & Calendar
* Voice Input
* Krisp / TL;DV
* HubSpot MCP
* Confluence MCP
* Jira MCP
* KB MCP
* BI
* Chrome Extension
* Gcore Deck Skill
* Gcore Brand Guidelines
* Basic Anthropic Plugins
* Connectors: GDrive, Slack

These topics should appear naturally inside questions, answers, result explanations, and recommended next steps.

The quiz should not try to explain every tool in detail. It should make people curious enough to learn more.

---

## 5. Product concept

The user answers 10–12 short scenario-based questions.

Each question describes a normal work situation, for example:

* Preparing a meeting follow-up
* Researching a competitor
* Writing a message or deck
* Searching for information in internal tools
* Working with HubSpot, Jira, Confluence, or KB
* Using meeting transcripts
* Choosing between ChatGPT, Claude, Scout, BI, or MCP
* Automating a repeated task
* Asking AI to reason through a complex problem

Each question has 4 short answer options. The answer options should represent different work styles, not obvious right/wrong choices.

After the final question, the user receives one persona result.

The result page includes:

1. Persona name
2. Persona image or character card
3. Short funny description
4. Strengths
5. Blind spot
6. Recommended AI skills to learn next
7. Recommended tools to try
8. Copy-to-Slack share text
9. Optional link: “Want to learn this? Contact us / join AI office hours / open learning path”

---

## 6. Tone of voice

The quiz should feel:

* Funny
* Friendly
* Light
* Slightly self-ironic
* Smart but not arrogant
* Simple
* Safe
* Useful

The quiz should not feel:

* Like an exam
* Like HR assessment
* Like compliance training
* Like a developer-only tool
* Like a judgment of employee performance
* Too sarcastic
* Too native-English-heavy
* Too full of slang

Recommended tone example:

> You move fast. You try many prompts. Sometimes AI is confused, but somehow you still get results.

Avoid tone like:

> Your prompting skills are bad and you need training.

---

## 7. Language rules

Because English is not native for most employees, the quiz must use simple English.

### Rules

* Use short sentences.
* Avoid idioms that are hard to understand.
* Avoid long jokes.
* Avoid complex fantasy words unless they are explained clearly.
* Avoid answers longer than one line where possible.
* Keep each quiz card short.
* Use familiar words: task, meeting, notes, customer, report, deck, search, ask, update.
* Use tool names exactly where helpful.

### Recommended card length

Each question card should contain:

* Question: maximum 20–28 words
* Each answer: maximum 8–14 words
* Total visible text per card: ideally under 90 words

### Example of acceptable length

Question:

> You need a meeting follow-up. What do you do first?

Answers:

* Use TL;DV or Krisp transcript
* Ask ChatGPT to clean my notes
* Check Outlook and old messages
* Ask the team what we decided

This is short, clear, and not too obvious.

---

## 8. Question design principles

The questions are the hardest and most important part of the project.

A good question must:

1. Be based on a real work situation.
2. Use tools and skills from the provided list.
3. Avoid obvious correct and incorrect answers.
4. Show different AI work styles.
5. Be short enough to read quickly.
6. Be understandable for non-native English speakers.
7. Work for both technical and non-technical employees.
8. Help scoring distinguish between personas.
9. Create a small “I recognize myself” moment.
10. Avoid making the user feel stupid.

### Bad question pattern

Question:

> You need to summarize a meeting. What do you do?

Answers:

* Use Meeting Capture
* Do nothing
* Forget everything
* Panic

Problem: one answer is clearly correct. Other answers are silly in a bad way.

### Better question pattern

Question:

> You need a meeting follow-up. What do you do first?

Answers:

* Use TL;DV or Krisp transcript
* Ask ChatGPT to clean my notes
* Check Outlook and old messages
* Ask the team what we decided

This is better because all options are plausible. They show different habits.

---

## 9. Rubric for question quality

Each question should be reviewed with this rubric before launch.

Score each item from 1 to 5.

| Criterion      | Description                                               |
| -------------- | --------------------------------------------------------- |
| Short          | The card is quick to read.                                |
| Clear          | A non-native English speaker understands it.              |
| Realistic      | The situation feels like real work.                       |
| Not obvious    | There is no single “correct” answer.                      |
| Tool-linked    | It naturally includes one or more target tools or skills. |
| Persona-linked | Each answer maps clearly to a persona or behavior.        |
| Funny enough   | It has light humor or recognition.                        |
| Not mean       | It does not insult the user.                              |
| Broad          | It works for both technical and non-technical people.     |
| Useful         | It creates curiosity about AI tools or skills.            |

A question should be rewritten if:

* It has a clearly correct answer.
* Two answers mean almost the same thing.
* It requires too much reading.
* It uses complex English.
* It does not connect to any target tool or skill.
* It only works for developers or only for managers.

---

## 10. Personas

The quiz should have 6–8 personas. Fewer personas are easier to understand, balance, and make visually memorable.

Persona names must be simple. They can be funny, but they should not depend on rare English words.

### Recommended persona set

## 10.1 Prompt Goblin

**Simple meaning:** Fast, chaotic, creative prompt user.

**Description:**
You move fast and try many prompts. Sometimes AI understands you. Sometimes it needs a translator.

**Strength:** Speed and experimentation.
**Blind spot:** You may forget to give context, examples, or output format.
**Recommended skills:** Prompting Basics, Thinking models, GPTs.
**Recommended tools:** ChatGPT, Claude Cowork, Gcore Brand Guidelines.

---

## 10.2 Meeting Ghost

Alternative names:

* Meeting Ghost
* Meeting Hacker
* Meeting Ninja

**Recommended name:** Meeting Ghost

**Simple meaning:** Uses AI to survive meetings and follow-ups.

**Description:**
You know that meetings create information. You want AI to catch decisions, owners, and next steps before they disappear.

**Strength:** Turning meetings into action.
**Blind spot:** You may still join too many meetings instead of using recaps better.
**Recommended skills:** Meeting Capture, Voice Input, Prompting Basics.
**Recommended tools:** Krisp, TL;DV, Outlook & Calendar, ChatGPT.

Note: “Meeting Necromancer” is funny but may be too difficult. “Meeting Ghost” is simpler and easier to understand.

---

## 10.3 Research Detective

**Simple meaning:** Uses AI for research, sources, and decisions.

**Description:**
You like finding the real answer. You ask for sources, compare options, and do not trust the first result too quickly.

**Strength:** Better research and stronger arguments.
**Blind spot:** You may research too long before making a decision.
**Recommended skills:** Deep Research, Thinking models, Scout.
**Recommended tools:** ChatGPT Deep Research, Scout, Connectors: GDrive and Slack.

---

## 10.4 Automation Wizard

Alternative names:

* Automation Wizard
* Task Automator
* Workflow Builder

**Recommended name:** Automation Wizard

**Simple meaning:** Wants repeated work to happen automatically.

**Description:**
You see repeated tasks and think: “Why am I doing this manually again?”

**Strength:** Saving time and building repeatable workflows.
**Blind spot:** You may automate something before the process is clear.
**Recommended skills:** Cron tasks, GPTs, Skills HTU, Prompting Basics.
**Recommended tools:** ChatGPT, Chrome Extension, Gcore Deck Skill, Basic Anthropic Plugins.

---

## 10.5 Tool Connector

Alternative names:

* Tool Connector
* System Connector
* MCP Connector
* Data Connector

**Recommended name:** Tool Connector

**Simple meaning:** Connects AI with real company tools and data.

**Description:**
You do not want to copy-paste from ten tabs. You want AI to work with HubSpot, Jira, Confluence, KB, Slack, or GDrive directly.

**Strength:** Connecting systems and reducing manual work.
**Blind spot:** You may assume everyone understands MCP already.
**Recommended skills:** MCP HTU, Connectors, Skills HTU.
**Recommended tools:** HubSpot MCP, Jira MCP, Confluence MCP, KB MCP, GDrive and Slack Connectors.

Note: “MCP Summoner” is too complex for simple English. “Tool Connector” is clearer.

---

## 10.6 Context Builder

Alternative names:

* Context Builder
* Context DJ
* Context Master

**Recommended name:** Context Builder

**Simple meaning:** Good at giving AI the right background and constraints.

**Description:**
You know that AI works better when it gets the right context, files, examples, and rules.

**Strength:** Better outputs because you prepare better inputs.
**Blind spot:** You may spend too much time preparing context.
**Recommended skills:** Prompting Basics, Skills HTU, Gcore Brand Guidelines.
**Recommended tools:** ChatGPT, Claude Cowork, Connectors, Gcore Brand Guidelines.

---

## 10.7 Thinking Partner

Alternative names:

* Thinking Partner
* Reasoning Monk
* Complex Task Solver

**Recommended name:** Thinking Partner

**Simple meaning:** Uses AI to think through complex problems.

**Description:**
You do not only ask AI to write text. You ask it to compare options, find risks, and reason through hard decisions.

**Strength:** Better decisions and clearer thinking.
**Blind spot:** You may overthink simple tasks.
**Recommended skills:** Thinking models, Deep Research, Prompting Basics.
**Recommended tools:** ChatGPT thinking models, Claude Cowork, BI.

---

## 10.8 Tool Explorer

Alternative names:

* Tool Explorer
* AI Collector
* Plugin Explorer

**Recommended name:** Tool Explorer

**Simple meaning:** Tries many AI tools and experiments with new workflows.

**Description:**
You like trying new tools. You may have more AI experiments than finished workflows, but you learn fast.

**Strength:** Curiosity and fast learning.
**Blind spot:** You may switch tools before building a strong habit.
**Recommended skills:** GPTs, Skills HTU, Claude Cowork HTU, Basic Anthropic Plugins.
**Recommended tools:** ChatGPT, Claude Cowork / Code, Chrome Extension, Gcore Deck Skill.

---

## 11. Persona naming guidance

Avoid persona names that are too hard for non-native English speakers.

### Avoid or use carefully

* Necromancer
* Summoner
* Hoarder
* Monk
* Sorcerer
* Prophet

These names can be funny, but they may be unclear.

### Prefer simpler names

* Ghost
* Detective
* Wizard
* Connector
* Builder
* Partner
* Explorer
* Goblin

“Goblin” is still a joke word, but it is common enough in internet culture and can be explained visually.

---

## 12. Scoring model

Each answer should add points to one or more personas.

Recommended scoring:

* Each answer gives +2 points to one main persona.
* It may also give +1 point to one secondary persona.
* Each answer may also tag one or more recommended skills.
* Final persona is the persona with the highest score.
* If there is a tie, use a tie-breaker based on the most recent high-value answer or show a hybrid result.

Example:

Question:

> You need a meeting follow-up. What do you do first?

Answers:

1. Use TL;DV or Krisp transcript

   * +2 Meeting Ghost
   * Tags: Meeting Capture, Krisp, TL;DV

2. Ask ChatGPT to clean my notes

   * +2 Context Builder
   * +1 Prompt Goblin
   * Tags: Prompting Basics, ChatGPT

3. Check Outlook and old messages

   * +2 Research Detective
   * Tags: Outlook & Calendar, Deep Research

4. Ask the team what we decided

   * +2 Meeting Ghost
   * +1 Context Builder
   * Tags: Meeting Capture, Prompting Basics

Important: avoid making one answer clearly better than the others. The scoring should classify style, not correctness.

---

## 13. Recommended quiz structure

The quiz should have 10–12 questions.

Recommended structure:

1. Warm-up: general AI work style
2. Prompting scenario
3. Meeting / transcript scenario
4. Research scenario
5. Internal knowledge search scenario
6. Tool choice scenario
7. Automation scenario
8. Customer / CRM / HubSpot scenario
9. Project / Jira / Confluence scenario
10. Deck / brand / communication scenario
11. Complex decision / thinking model scenario
12. Final personality-style question

Not every question needs to mention every tool. Across the full quiz, all important skills and tools should appear at least once.

---

## 14. Example question style

These are examples of the desired style. They are not final questions yet.

### Example 1 — Meeting follow-up

Question:

> You need a meeting follow-up. What do you do first?

Answers:

* Use TL;DV or Krisp transcript
* Ask ChatGPT to clean my notes
* Check Outlook and old messages
* Ask the team what we decided

### Example 2 — Competitor research

Question:

> Your manager asks for a quick competitor update. Your first move?

Answers:

* Start Deep Research with sources
* Ask Scout for internal context
* Search Slack and GDrive first
* Ask AI for a quick summary

### Example 3 — Repeated weekly task

Question:

> You do the same report every Friday. What sounds best?

Answers:

* Create a cron task
* Build a reusable GPT
* Ask AI each Friday again
* Improve the report template

### Example 4 — Tool confusion

Question:

> You need company-specific information. Where do you start?

Answers:

* Scout
* GDrive or Slack connector
* Confluence MCP or KB MCP
* I ask a teammate first

### Example 5 — Customer data

Question:

> You need account context before a customer call. What helps most?

Answers:

* HubSpot MCP
* Previous emails and notes
* A quick AI summary
* Ask the account owner

These examples are intentionally short. Final questions should follow this style.

---

## 15. Result page structure

Each result page should follow the same structure.

### Template

**You are: [Persona Name]**

**Short description:**
2–3 simple sentences. Funny but clear.

**Your superpower:**
One sentence.

**Your blind spot:**
One sentence. Should be gentle, not insulting.

**Try next:**
3 recommended skills.

**Tools to explore:**
3–5 recommended tools.

**Share in Slack:**
One short copyable sentence.

**Want to learn this?**
Contact the AI enablement team / join office hours / open learning path.

### Example result

**You are: Research Detective**

You like finding the real answer. You ask for sources, compare options, and do not trust the first result too quickly.

**Your superpower:** You make better decisions because you check the facts.

**Your blind spot:** You may spend too long researching before taking action.

**Try next:** Deep Research, Thinking models, Scout.

**Tools to explore:** ChatGPT Deep Research, Scout, GDrive and Slack Connectors.

**Share in Slack:**
I got Research Detective. I came for a quiz and left with sources.

---

## 16. Visual design direction

The result should include a character image/card for each persona.

### Style direction

* Fun internal campaign style
* Clean, modern, lightweight
* Works well in Slack preview
* Looks good on mobile
* Uses simple character illustrations
* Not too childish
* Not too corporate

### Character image requirements

Each persona should have:

1. Square image for result page
2. Share card image for Slack
3. Optional small avatar/icon

### Suggested visual themes

* Prompt Goblin: small chaotic creature with laptop and many prompt bubbles
* Meeting Ghost: friendly ghost holding meeting notes
* Research Detective: detective with magnifying glass and sources
* Automation Wizard: wizard with calendar and automation gears
* Tool Connector: person connecting many app icons with cables
* Context Builder: person building a stack of documents and rules
* Thinking Partner: calm person with thought map
* Tool Explorer: explorer with backpack full of AI tools

Important: images should make the persona understandable even if the name is new.

---

## 17. Web app requirements

### Core user flow

1. User opens quiz link.
2. Landing page explains the quiz in simple English.
3. User clicks Start.
4. User answers 10–12 questions.
5. App calculates persona.
6. User sees result page.
7. User can copy result to Slack.
8. User can open recommended learning links or contact the AI team.

### Landing page copy draft

**What is your AI Work Persona?**

12 questions. 3 minutes. No grades.
Find your AI work style and get a few tools to try next.

Button: **Start quiz**

### Required features

* Responsive design
* Works on desktop and mobile
* One question per screen
* Progress indicator
* Back button
* Result page
* Copy-to-Slack button
* Optional analytics
* Optional result share card

### Nice-to-have features

* Animated transitions
* Persona image generation or pre-made images
* Result distribution dashboard
* Department-level analytics if privacy rules allow
* “Send me learning links” button
* “Join AI office hours” button

---

## 18. Analytics requirements

The quiz should collect lightweight analytics if allowed.

Useful metrics:

* Number of quiz starts
* Number of quiz completions
* Completion rate
* Persona distribution
* Most selected answers
* Most recommended skills
* Most common skill gaps
* Device type: mobile vs desktop
* Clicks on learning links
* Copy-to-Slack clicks

Avoid presenting this as employee evaluation. Analytics should be used to improve learning programs and understand interest areas.

Recommended reporting for leadership:

* Total participants
* Completion rate
* Top personas
* Top recommended skills
* Top interest areas
* Suggested next training topics

---

## 19. Privacy and safety

The quiz should be positioned as fun and educational.

Recommended rules:

* Do not show individual scores to managers.
* Do not call results “skill level.”
* Do not rank employees.
* Do not store unnecessary personal data.
* If collecting names or emails, explain why.
* Prefer anonymous or aggregated analytics where possible.

Recommended disclaimer:

> This quiz is for fun and learning. It is not a performance assessment.

---

## 20. Launch plan

### Phase 1 — Content architecture

Deliverables:

* Final persona list
* Persona descriptions
* Skills/tools mapping
* Scoring model
* Draft question list

### Phase 2 — Question writing

Deliverables:

* 10–12 final questions
* 4 short answers per question
* Scoring for each answer
* Skill/tool tags for each answer
* Rubric review for each question

### Phase 3 — Internal test

Test with 10–15 employees:

* Developers
* Marketing
* Sales or customer-facing roles
* Managers
* Operations or BI users

Ask only a few feedback questions:

1. Did your result feel like you?
2. Which question was unclear?
3. Which answer felt too obvious?
4. Was the English simple enough?
5. Would you share your result in Slack?

### Phase 4 — Web app MVP

Build a simple responsive quiz app.

MVP scope:

* Landing page
* 10–12 questions
* Scoring logic
* Result pages
* Copy-to-Slack text
* Basic analytics

### Phase 5 — Visual polish

Add:

* Character images
* Better result cards
* Share card previews
* Small animations
* Brand styling

### Phase 6 — Slack launch

Launch as an internal campaign.

Example Slack launch copy:

> We made a very serious and deeply scientific quiz.
> It will tell you your AI Work Persona.
> 12 questions. 3 minutes. No grades.
> Are you a Prompt Goblin, Research Detective, or Tool Connector?

### Phase 7 — Follow-up

After launch, share aggregated results:

* Most common personas
* Most popular tools
* Top skills people should learn next
* Invitation to AI training or office hours

---

## 21. Success criteria

The project is successful if:

* People complete the quiz.
* People share results in Slack.
* People comment, joke, or compare personas.
* Employees discover tools they did not know.
* Employees click learning links or ask for follow-up sessions.
* Leadership sees clear engagement and useful learning insights.

Suggested target metrics:

* Completion rate: 70%+
* Slack sharing or comments: visible organic activity
* Learning link clicks: meaningful follow-up interest
* At least 5 departments represented
* At least 10–15 qualitative feedback comments

---

## 22. Open decisions

Before production, decide:

1. Final persona names.
2. Whether the quiz is anonymous or connected to user identity.
3. Whether results are stored.
4. Where learning links point.
5. Who owns follow-up training.
6. Whether to build custom web app immediately or prototype in Microsoft Forms / Typeform first.
7. Final visual style for persona images.
8. Whether to include department-level analytics.

---

## 23. Recommended next step

Start with the content, not the web app.

Recommended next deliverable:

1. Finalize 6–8 personas.
2. Create persona-to-skills mapping.
3. Write 12 short questions.
4. Review each question with the rubric.
5. Test with a small mixed group.
6. Only then build the web app.

The hardest part is not the interface. The hardest part is making the questions short, funny, useful, and not obvious.

---

## 24. Final product outcome

The final output should be a simple web app where employees can quickly discover their AI Work Persona, laugh a little, share the result, and see what AI skills and tools they should try next.

The quiz should help the company turn AI training from “another corporate learning topic” into a fun internal moment that creates curiosity and momentum.
