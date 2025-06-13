"use client";

export function Contact() {
  return (
    <div>
      <section className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Contact</h1>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Feel free to reach out for freelance work, collaborations or job
          opportunities.
        </p>
        <ul className="space-y-3 text-lg text-gray-800 dark:text-gray-200">
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:prven04@gmail.com"
              className="text-blue-600 hover:underline hover:text-blue-800 transition"
            >
              prven04@gmail.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+918374423442"
              className="text-blue-600 hover:underline hover:text-blue-800 transition"
            >
              +91 83744 23442
            </a>
          </li>
          <li>
            <strong>Location:</strong> Hyderabad, India
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/prven04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline hover:text-blue-800 transition"
            >
              linkedin.com/in/prven04
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/prven04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline hover:text-blue-800 transition"
            >
              github.com/prven04
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
