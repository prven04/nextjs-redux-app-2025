"use client";
type Props = {
  t: {
    title?: string;
    description?: string;
  };
};

export function Welcome({ t }: Props) {
  console.log("T", t);
  return (
    <>
      Welcome Here...!{t.title}
      <div className="bg-white dark:bg-black text-xl p-4 rounded-md shadow">
        Tailwind working!
      </div>
    </>
  );
}
