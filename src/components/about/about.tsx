"use client";

import { useUserInputSelector } from "@/store/slices/selectors";

export function About() {
  const firstName = useUserInputSelector("firstName");
  const email = useUserInputSelector("email");
  return (
    <>
      <div>
        <section className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I’m a Front-End Developer with 4+ years of experience in building
            accessible, high-performance web interfaces using HTML5, CSS3,
            JavaScript, Angular, React, and Next.js. I specialize in
            transforming design systems into responsive, pixel-perfect user
            experiences that are cross-browser and cross-device compatible.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I'm passionate about performance, usability, and creating intuitive
            user interactions. My background includes collaborating closely with
            designers, back-end developers, and testers to deliver robust and
            scalable web solutions.
          </p>
        </section>
      </div>
    </>
  );
}
