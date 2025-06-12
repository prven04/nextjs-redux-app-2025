"use client";

export function Projects() {
  const projects = [
    {
      title: "Snap Finance",
      duration: "3+ Years",
      technologies: [
        "Angular",
        "React",
        "Next.js",
        "Amplitude",
        "GraphQL",
        "Jest",
      ],
      description: `Developed multiple functionalities, analytics, performance improvements, 
      and implemented event tracking and bug monitoring.`,
    },
    {
      title: "Bench Mark Education",
      duration: "4 Months",
      technologies: ["React", "Next.js", "Redux", "LESS"],
      description: `Created reusable components, integrated Redux, and contributed to CI/CD deployment process.`,
    },
    {
      title: "PLANCK Finance",
      duration: "11 Months",
      technologies: ["Angular", "PrimeNG", "TypeScript"],
      description: `Used Angular Dynamic Forms, developed custom UI components, and supported legacy system transformation.`,
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-4 border rounded-lg shadow-md bg-white dark:bg-gray-900"
          >
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              {project.title}
            </h2>
            <p className="text-sm text-gray-500">{project.duration}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
