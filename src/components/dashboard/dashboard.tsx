"use client";

import { AppDispatch, RootState } from "@/store";
import { useStorePersistence } from "@/store/slices/persistence";

export function Dashboard() {
  const { persistInput } = useStorePersistence();

  const handleSave = () => {
    persistInput({
      firstName: "Praveen-134",
      email: "test@gmail.com",
    });
  };

  return (
    <>
      Dashboard Here...!
      <div>
        {/* <p>{user.name}</p> */}
        <button onClick={handleSave}>Save Input</button>
      </div>
    </>
  );
}
