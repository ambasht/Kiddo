import { printables } from "@/data/printables";

export function searchPrintables(
  query: string,
  selectedAge: string
) {
  return printables.filter((printables) => {

    // combine searchable text
    const searchableText = `
      ${printables.title}
      ${printables.desc}
      ${printables.category}
      ${printables.tag.join(" ")}
    `.toLowerCase();

    // search match
    const matchesSearch =
      searchableText.includes(query.toLowerCase());

    // age filter match
    const matchesAge =
      selectedAge === "" ||
      printables.age === selectedAge;

    return matchesSearch && matchesAge;
  });
}