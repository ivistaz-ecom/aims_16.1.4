import HomeComponents from "@/components/HomeComponents";
import Seo from "@/components/shared/Seo/Seo";

export default function Home() {
  const seoField = {
    title: "Top Colleges in Bangalore | AIMS Institutes",
    description: "Looking for the top colleges in Bangalore? AIMS is a trusted choice, ranked among the best business colleges and best hospitality colleges in Bangalore.",
    path: "/",
    metaImage: "/home/banner-003.webp",
  }

  return (
    <>
      <Seo {...seoField} />
      <HomeComponents />
    </>
  );
}
