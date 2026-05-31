"use client";

export default function TestPage() {
  return (
    <button
      onClick={() => alert("WORKS")}
      className="bg-red-500 text-white p-10"
    >
      TEST BUTTON
    </button>
  );
}