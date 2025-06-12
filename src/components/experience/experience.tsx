"use client";

export function Experience() {
  const experiences = [
    {
      role: "UI Developer",
      company: "Intraedge Technologies",
      period: "May 2022 – Present",
    },
    {
      role: "React.js Developer",
      company: "Byndr Technologies",
      period: "Jan 2021 – Apr 2022",
    },
    {
      role: "Software Developer",
      company: "Synerg Technology",
      period: "Jan 2021 – Dec 2021",
    },
    {
      role: "Associate Professor",
      company: "Jayamukhi Institute",
      period: "Aug 2015 – Jan 2021 (Non-Technical)",
    },
  ];
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Experience</h1>
      <ul className="space-y-4">
        {experiences.map((exp) => (
          <li key={exp.company} className="border-l-4 border-blue-500 pl-4">
            <p className="text-lg font-semibold">
              {exp.role} @ {exp.company}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {exp.period}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
