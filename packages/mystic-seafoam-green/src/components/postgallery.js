import BlogGallery from "./bloggallery/bloggallery";

function PostGallery({imageArr}) {
  console.log("images PostGallery", imageArr);
  return (
    <BlogGallery images={imageArr} />
  )
}

export default PostGallery;