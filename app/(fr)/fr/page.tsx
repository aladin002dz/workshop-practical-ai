import type { Metadata } from "next";
import Slideshow from "@/components/Slideshow";
import { getDeck } from "@/lib/content";
import JsonLd from "@/components/JsonLd";
import { buildJsonLd, buildMetadata } from "@/lib/metadata";

const deck = getDeck("fr");

export const metadata: Metadata = buildMetadata(deck);

export default function Page() {
  return (
    <>
      <JsonLd data={buildJsonLd(deck)} />
      <Slideshow deck={deck} />
    </>
  );
}
