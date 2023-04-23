export const introduction: string[] = [
  "I am a frontend engineer intern at DOT Indonesia.I have experience as a junior web developer. I have an interest in having a career as a frontend engineer (typescript). I'm a fast learner and self-taught, and I've learned a lot of new technologies in recent years on my own from the Internet.",
  `I live in Malang, Indonesia. I'm ${calculateAge(
    new Date("2005-06-09")
  )} years old. I'm a Computer Science Student from Vocational School.`,
  "Coding has been my passion and hobby.",
];

function calculateAge(birthday: Date) {
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
