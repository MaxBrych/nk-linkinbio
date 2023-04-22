// convertWebpToJpeg.ts
export const convertWebpToJpeg = (url: string) => {
  const baseUrl = "https://res.cloudinary.com/demo/image/fetch/f_jpg/";
  return `${baseUrl}${encodeURIComponent(url)}`;
};
