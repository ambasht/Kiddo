import { stories } from "@/data/stories";

export function searchStories(
  query: string,
  selectedAge: string
) {
  return stories.filter((story) => {

    // combine searchable text
    const searchableText = `
      ${story.title}
      ${story.desc}
      ${story.category}
      ${story.tags.join(" ")}
    `.toLowerCase();

    // search match
    const matchesSearch =
      searchableText.includes(query.toLowerCase());

    // age filter match
    const matchesAge =
      selectedAge === "" ||
      story.age === selectedAge;

    return matchesSearch && matchesAge;
  });
}