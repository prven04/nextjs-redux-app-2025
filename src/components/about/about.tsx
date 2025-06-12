"use client";

import { useUserInputSelector } from "@/store/slices/selectors";

export function About() {
  const firstName = useUserInputSelector("firstName");
  const email = useUserInputSelector("email");
  return (
    <>
      <div>
        <h2>First Name: {firstName}</h2>
        <p>Email: {email}</p>
      </div>
    </>
  );
}
