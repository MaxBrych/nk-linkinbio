export default {
  name: "instagramPost",
  title: "Instagram Post",
  type: "document",
  fields: [
    {
      name: "instagramId",
      title: "Instagram Identifier",
      type: "string",
    },
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
    },
  ],
};
