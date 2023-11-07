import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata, ResolvingMetadata } from "next";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  // const id = params.id

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
