import { Box } from '@chakra-ui/react'
import { Gallery } from './bloggallerygallery'

function BlogGallery({images}) {
  console.log("images BlogGallery", images);
  return (
    <Box
    bg="pink"
      maxW="3xl"
      // height="90vh"
      mx="auto"
      px={{
        base: '4',
        md: '8',
        lg: '12',
      }}
      py={{
        base: '6',
        md: '8',
        lg: '12',
      }}
    >
      <Gallery images={images} />
    </Box>
  )
}

export default BlogGallery;