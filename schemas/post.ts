export default {
  name: "instagramPost",
  title: "Instagram Post",
  type: "document",
  fields: [
    {
      name: "mediaType",
      title: "Media Type",
      type: "string",
    },
    {
      name: "mediaUrl",
      title: "Media URL",
      type: "url",
    },
    {
      name: "username",
      title: "Username",
      type: "string",
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
      description: "Enter the URL for the article related to this post",
      validation: (Rule: { uri: (arg0: { scheme: string[] }) => any }) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
      // Set default value to null
      initialValue: null,
    },
  ],
};
