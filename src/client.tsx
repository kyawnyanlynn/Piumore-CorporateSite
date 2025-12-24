import { createClient } from "@sanity/client";

const Client = createClient({
  projectId: "vq2na5t2",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

export default Client;
