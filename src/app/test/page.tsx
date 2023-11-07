import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  // const id = params.id

  // console.log("parent", parent);

  // const userAgent = context.req.headers["user-agent"] || "";
  // const isFromDiscord = userAgent.toLowerCase().includes("discord");
  // const isFromTwitter = userAgent.toLowerCase().includes("twitter");

  // if (!isFromDiscord && !isFromTelegram && !isFromSlack && !isFromTwitter) {
  return {
    title: "DEFAULT TITLE MAIN",
    description: "DEFAULT DESCRIPTION MAIN",
    openGraph: {
      title: "DEFAULT TITLE",
      description: "DEFAULT DESCRIPTION",
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
    twitter: {
      card: "summary_large_image",
      title: "DEFAULT TITLE TWITTER",
      description: "DEFAULT DESCRIPTION TWITTER",
    },
    // };
  };

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: "TEST TITLE MAIN",
    description: "TEST DESCRIPTION MAIN",
    openGraph: {
      title: "TEST TITLE",
      description: "TEST DESCRIPTION",
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
    twitter: {
      card: "summary_large_image",
      title: "TEST TITLE TWITTER",
      description: "TEST DESCRIPTION TWITTER",
    },
  };
}

export default function Page({ params, searchParams }: Props) {
  return <h1>Hello, Test Page!</h1>;
}
