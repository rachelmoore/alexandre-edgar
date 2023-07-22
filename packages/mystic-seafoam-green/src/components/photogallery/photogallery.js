import { Box } from '@chakra-ui/react';
import { images } from './data';
import { Gallery } from './gallery';

function PhotoGallery() {
  return (
    <Box
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
      <Box height="250px" />
    </Box>
  )
}

export default PhotoGallery;
