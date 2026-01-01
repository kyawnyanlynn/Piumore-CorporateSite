import { createImageUrlBuilder } from "@sanity/image-url";
import Client from "../client";

const builder = createImageUrlBuilder(Client);

export const urlFor = (source: any) => builder.image(source);
