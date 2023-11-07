import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

type QuestDocument = {
  id: number;
  name: string;
  desc: string;
  issuer: string;
  category: string;
  rewards_endpoint: string;
  logo: string;
  rewards_img: string;
  rewards_title: string;
  img_card: string;
  title_card: string;
  hidden: boolean;
  disabled: boolean;
  expiry_timestamp: string | null;
  mandatory_domain: string | null;
};

type QueryError = { error: string };

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  // const id = params.id
  const id = "16";

  // console.log("parent", parent);

  // const userAgent = context.req.headers["user-agent"] || "";
  // const isFromDiscord = userAgent.toLowerCase().includes("discord");
  // const isFromTwitter = userAgent.toLowerCase().includes("twitter");

  // if (!isFromDiscord && !isFromTelegram && !isFromSlack && !isFromTwitter) {

  // fetch data
  const data = await fetchQuestData(id as string);
  const previousImages = (await parent).openGraph?.images || [];

  if (data?.name) {
    return {
      title: data.name,
      description: data.desc,
      openGraph: {
        title: data.name,
        description: data.desc,
        images: [data.img_card, ...previousImages],
      },
      twitter: {
        card: "summary_large_image",
        title: data.name,
        description: data.desc,
        images: [data.img_card, ...previousImages],
      },
    };
  } else {
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
}

async function fetchQuestData(questId: string) {
  const response = await fetch(
    `https://goerli.api.starknet.quest/get_quest?id=${questId}`
  );
  const data: QuestDocument | QueryError = await response.json();
  return data as QuestDocument;
}

export default function Page({ params, searchParams }: Props) {
  return <h1>Hello, Test Page!</h1>;
}
