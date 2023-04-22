import ImagePreview from "../src/components/ImagePreview";
import { format } from "date-fns";

export default {
  name: "instagramPost",
  title: "📷 Instagram Post",
  type: "document",
  fields: [
    {
      name: "instagramId",
      title: "Instagram Identifier",
      type: "string",
    },

    {
      name: "mediaUrl",
      title: "Media URL",
      type: "url",
    },

    {
      name: "timestamp",
      title: "Timestamp",
      type: "datetime",
    },
    {
      name: "articleLink",
      type: "url",
      title: "Article Link",
      description: "Fügen sie hier die URL des zugehörigen Artikels ein",
    },
  ],
  preview: {
    select: {
      timestamp: "timestamp",
      username: "username",
      mediaUrl: "mediaUrl",
    },
    prepare(selection: any) {
      const { username, timestamp } = selection;
      const formattedTimestamp = format(
        new Date(timestamp),
        "dd.MM.yyyy HH:mm"
      );
      return {
        ...selection,
        title: formattedTimestamp,
        subtitle: `vom Nordkurier`,
      };
    },
    components: {
      preview: ImagePreview,
    },
  },
};
