import Link from "next/link";
import Newsletter from "@/components/sections/Newsletter";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { stories } from "@/data/stories";

export default async function StoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const story = stories.find(
    (item) => item.slug === slug
  );


  const relatedStories = stories
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fffaf7] px-5 text-center">
        <div>
          <h1 className="text-5xl font-bold text-slate-800">
            Story Not Found
          </h1>

          <p className="mt-5 text-slate-600 text-lg">
            The magical story you are looking for does not exist.
          </p>

          <div className="mt-8">
            <Link href="/stories">
              <Button>Back to Stories</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fffaf7] overflow-hidden">

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#dbeafe] via-[#fdf2f8] to-[#fef3c7] py-20 md:py-28">

        {/* Decorative Blur Shapes */}
        <div className="absolute top-10 left-10 w-56 h-56 bg-pink-200/40 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 text-5xl opacity-30">
          ✨
        </div>

        <div className="absolute bottom-20 left-20 text-4xl opacity-30">
          ☁️
        </div>

        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold text-slate-700 shadow-sm">
                  {story.age}
                </span>

                <span className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold text-slate-700 shadow-sm">
                  {story.time}
                </span>

                <span className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold text-slate-700 shadow-sm">
                  {story.category}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-slate-800">
                {story.title} ✨
              </h1>

              <p className="mt-7 text-xl leading-relaxed text-slate-600 max-w-xl">
                {story.desc}
              </p>

              <div className="hidden mt-10">
                <Button>
                  Start Reading ✨
                </Button>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="relative">
              <div className="bg-white/70 backdrop-blur-xl rounded-[40px] p-5 shadow-2xl border border-white overflow-hidden">
                <div className="aspect-[4/5] rounded-[32px] bg-slate-100 overflow-hidden flex items-center justify-center">
                  <img
                    src={story.heroImage}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Audio Section */}
      <section className="hidden py-10">
        <Container>
          <div className="bg-white rounded-[32px] shadow-lg border border-orange-100 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">

            <button className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-3xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform">
              ▶
            </button>

            <div className="flex-1 w-full">
              <div className="flex items-center justify-between mb-3">
                <p className="font-semibold text-slate-700">
                  Listen to Story
                </p>

                <p className="text-sm text-slate-500">
                  {story.time}
                </p>
              </div>

              <div className="h-3 rounded-full bg-orange-100 overflow-hidden">
                <div className="w-1/3 h-full bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Story Content */}
      <section className="py-10 md:py-20 relative">

        <div className="absolute top-20 left-10 w-52 h-52 bg-pink-100 rounded-full blur-3xl opacity-50"></div>

        <div className="absolute bottom-20 right-10 w-52 h-52 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

        <Container>
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-[40px] p-8 md:p-14 shadow-xl border border-orange-100 relative overflow-hidden">

            {/* Decorative */}
            <div className="absolute top-6 right-6 text-4xl opacity-10">
              ✨
            </div>

            <div className="space-y-10">

              {story.content.map((paragraph, index) => (
                <div key={index}>

                  {/* Decorative Illustration Every 3 Paragraphs */}
                  {index !== 0 && index % 3 === 0 && (
                    <div className="my-12">
                      <div className="aspect-[16/9] rounded-[32px] bg-slate-100 overflow-hidden shadow-lg flex items-center justify-center">
                        <img
                          src={story.thumbnail}
                          alt={story.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {/* Decorative Separator */}
                  {index !== 0 && index % 5 === 0 && (
                    <div className="flex items-center justify-center py-6 text-4xl opacity-40">
                      ✨ 🌙 ✨
                    </div>
                  )}

                  <p className="text-xl md:text-2xl leading-loose text-slate-700 font-medium">
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Moral Box */}
      <section className="py-6">
        <Container>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-100 to-orange-100 border border-orange-200 rounded-[36px] p-8 md:p-10 shadow-lg">
            <div className="flex items-start gap-5">

              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-3xl shadow-md shrink-0">
                🌟
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                  Moral of the Story
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-slate-700">
                  {story.moral}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Stories */}
      <section className="py-20">
        <Container>

          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
              Related Stories ✨
            </h2>

            <Link
              href="/stories"
              className="text-primary font-semibold"
            >
              View All
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {relatedStories.map((relatedStory, i) => (
              <div
                key={i}
                className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-orange-100 hover:-translate-y-2 transition-all duration-300"
              >

                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={relatedStory.thumbnail}
                    alt={relatedStory.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-7">

                  <span className="inline-block bg-orange-100 text-orange-500 text-sm px-4 py-2 rounded-full font-medium mb-5">
                    {relatedStory.age}
                  </span>

                  <h3 className="text-2xl font-bold text-slate-800">
                    {relatedStory.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-relaxed">
                    {relatedStory.desc}
                  </p>

                  <div className="mt-6">
                    <Link href={`/stories/${relatedStory.slug}`}>
                      <Button>
                        Read Story
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
