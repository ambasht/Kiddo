import Link from "next/link";

export default function Home() {
  return (
    <div>
        <img src="/images/banner.jpg" />
      <h1>Kiddo</h1>

      <Link href="/stories">
        Stories
      </Link>
    </div>
  );
}