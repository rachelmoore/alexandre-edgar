import React, { useState, useEffect } from 'react'
import { connect } from "frontity";
import { AspectRatio, HStack, Image, Skeleton, Stack, useBreakpointValue } from '@chakra-ui/react'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import { Carousel, CarouselIconButton, CarouselSlide, useCarousel } from './carousel'
import Loading from "../loading";

function Gallery({ state, rootProps }) {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const [index, setIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [galleryImages, setGalleryImages] = useState([]);
  const slidesPerView = useBreakpointValue({
    base: 3,
    md: 5,
  })
  const [ref, slider] = useCarousel({
    slides: {
      perView: slidesPerView,
      spacing: useBreakpointValue({
        base: 16,
        md: 24,
      }),
    },
    slideChanged: (slider) => setCurrentSlide(slider.track.details.rel),
  })

  useEffect(() => {
    const wpImages = post._embedded;
    const wpImagesValues = Object.values(wpImages)[0];
    console.log("galleryImages", wpImagesValues);
    setGalleryImages(wpImagesValues);
  }, []);

  useEffect(() => {
    if (galleryImages.length !== 0) {
      setLoading(false);
    }
  }, [galleryImages])

  if (loading === true) {
    return <Loading />
  }

  if (loading === false) {
    return (
      <Stack spacing="4" {...rootProps} p={10} bg="brand.700" minHeight="85vh">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={galleryImages[index].source_url}
            objectFit="scale-down !important"
            alt={galleryImages[index].source_url}
            fallback={<Skeleton />}
          />
        </AspectRatio>
        <HStack spacing="4">
          <CarouselIconButton
            onClick={() => slider.current?.prev()}
            icon={<IoChevronBackOutline />}
            aria-label="Previous slide"
            disabled={currentSlide === 0}
          />
          <Carousel ref={ref} direction="row" width="full">
            {galleryImages.map((image, i) => (
              <CarouselSlide key={i} onClick={() => setIndex(i)} cursor="pointer">
                <AspectRatio
                  ratio={4 / 3}
                  transition="all 200ms"
                  opacity={index === i ? 1 : 0.4}
                  _hover={{
                    opacity: 1,
                  }}
                >
                  <Image src={image.media_details.sizes.large.source_url} objectFit="cover" alt={image.media_details.sizes.large.alt_text} fallback={<Skeleton />} />
                </AspectRatio>
              </CarouselSlide>
            ))}
          </Carousel>
          <CarouselIconButton
            onClick={() => slider.current?.next()}
            icon={<IoChevronForwardOutline />}
            aria-label="Next slide"
            disabled={currentSlide + Number(slidesPerView) === galleryImages.length}
          />
        </HStack>
      </Stack>
    )
  }
}

export default connect(Gallery);
