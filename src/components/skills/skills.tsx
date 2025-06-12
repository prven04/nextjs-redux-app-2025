"use client";

export function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "SASS",
    "Bootstrap",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Angular",
    "Redux",
    "Jest",
    "Responsive Design",
    "Git",
    "PrimeNG",
    "Angular Material",
  ];
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Skills</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg text-gray-800 dark:text-gray-200">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-gray-100 dark:bg-gray-800 p-3 rounded shadow"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
