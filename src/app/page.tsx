// src/app/page.tsx
"use client";
import { redirect } from "next/navigation";

export default function RootRedirect() {
  redirect("/en-US/dashboard"); // You can set this to any default locale
}
