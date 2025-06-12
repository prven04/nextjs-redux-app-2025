"use client";
type Props = {
  t: {
    title?: string;
    description?: string;
  };
};

export function Welcome({ t }: any) {
  return (
    <>
      Welcome Here...!{t.title}
      <div className="bg-white dark:bg-black text-xl p-4 rounded-md shadow">
        Tailwind working!
      </div>
    </>
  );
}
