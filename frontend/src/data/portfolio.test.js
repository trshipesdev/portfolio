import {
  PROFILE,
  SKILLS,
  PROJECTS,
  EXPERIENCE,
  EDUCATION,
  CERTS,
  CAREER_ARC,
  HATS_PROOF,
} from "./portfolio";

const PLACEHOLDER = /lorem ipsum|todo|tbd|xxx|placeholder|foo bar/i;

test("profile has the fields the pages render", () => {
  for (const key of ["name", "title", "tagline", "professionalSummary", "email", "github", "linkedin"]) {
    expect(typeof PROFILE[key]).toBe("string");
    expect(PROFILE[key].length).toBeGreaterThan(0);
  }
  expect(PROFILE.email).toMatch(/@/);
});

test("every project is renderable", () => {
  const actions = new Set(["open", "password-reveal", "image-open", "coming-soon", "info"]);
  const ids = new Set();
  for (const p of PROJECTS) {
    expect(p.id && p.name && p.blurb).toBeTruthy();
    expect(actions.has(p.action)).toBe(true);
    expect(Array.isArray(p.stack)).toBe(true);
    expect(ids.has(p.id)).toBe(false);
    ids.add(p.id);
    if (p.action === "open") expect(p.href).toMatch(/^https?:\/\//);
    if (p.action === "password-reveal") expect(p.password).toBeTruthy();
  }
});

test("hidden projects are filtered out of the exported list", () => {
  expect(PROJECTS.every((p) => !p.hidden)).toBe(true);
});

test("experience entries are complete", () => {
  for (const job of EXPERIENCE) {
    expect(job.role && job.company && job.period).toBeTruthy();
    expect(Array.isArray(job.highlights) && job.highlights.length).toBeTruthy();
  }
});

test("no placeholder copy slipped into the content", () => {
  const blob = JSON.stringify({ PROFILE, PROJECTS, EXPERIENCE, CAREER_ARC, HATS_PROOF });
  expect(blob).not.toMatch(PLACEHOLDER);
});

test("supporting lists are non-empty", () => {
  expect(SKILLS.length).toBeGreaterThan(0);
  expect(EDUCATION.length).toBeGreaterThan(0);
  expect(CERTS.length).toBeGreaterThan(0);
  expect(CAREER_ARC.length).toBeGreaterThan(0);
});
