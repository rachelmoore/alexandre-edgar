import {
    AspectRatio,
    Box,
    Circle,
    Flex,
    HStack,
    IconButton,
    Image,
    Skeleton,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react'
  import { useState } from 'react'
  import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
  import { useKeenSlider } from 'keen-slider/react' // using version 6.6.10
  import { images } from './data'
  import beaune from "../../assets/carousel/beaune.jpeg"
  import bwtree from "../../assets/carousel/bwtree.jpeg"
  import crow from "../../assets/carousel/crow.jpg"
  import goldengatebridge from "../../assets/carousel/goldengatebridge.jpeg"
  import kitten from "../../assets/carousel/kitten.jpg"
  import oceanrocks from "../../assets/carousel/oceanrocks.jpg"
  import peacock from "../../assets/carousel/peacock.jpg"
  import ruby from "../../assets/carousel/ruby.jpg"
  import teacup from "../../assets/carousel/teacup.jpg"
  import vichytree from "../../assets/carousel/vichytree.jpg"
  import vineyard from "../../assets/carousel/vineyard.jpg"
  import "keen-slider/keen-slider.min.css"

  const AdaptiveHeight = (slider) => {
    function updateHeight() {
      slider.container.style.height =
        slider.slides[slider.track.details.rel].offsetHeight + "px"
    }
    slider.on("created", updateHeight)
    slider.on("slideChanged", updateHeight)
  }

  function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0)
    // const [ref, slider] = useKeenSlider({
    //     selector: '.chakra-carousel__slide',
    //     slideChanged: (slider) => setCurrentSlide(slider.track.details.rel),
    //   })
    const [ref, slider] = useKeenSlider(
        {
          selector: '.chakra-carousel__slide',
          initial: 0,
          slideChanged: (slider) => setCurrentSlide(slider.track.details.rel),
        },
        // [AdaptiveHeight]
      )
      
    const hasPrevious = currentSlide !== 0
    const hasNext = currentSlide < images.length - 1
    return (
      <Stack spacing="4">
        <Box
          position="relative"
          sx={{
            _hover: {
              '> button': {
                display: 'inline-flex',
              },
            },
          }}
        >

          <Flex
            ref={ref}
            overflow="hidden"
            position="relative"
            userSelect="none"
        >
                {/* <Image src={beaune} fallback={<Skeleton />} />
                <Image src={bwtree} fallback={<Skeleton />} />
                <Image src={crow} fallback={<Skeleton />} /> */}
 
            {images.map((image, i) => (
              <CarouselSlide key={i}>
                <AspectRatio
                  ratio={image.aspectRatio}
                  transition="all 200ms"
                  opacity={currentSlide === i ? 1 : 0.4}
                  _hover={{
                    opacity: 1,
                  }}
                >
                  <Image src={image.src} objectFit={image.objectFit} alt={image.alt} fallback={<Skeleton />} />
                </AspectRatio>
              </CarouselSlide>
            ))}
        </Flex>
          {hasPrevious && (
            <CarouselIconButton
              pos="absolute"
              left="3"
              top="50%"
              transform="translateY(-50%)"
              onClick={() => slider.current?.prev()}
              icon={<IoChevronBackOutline />}
              aria-label="Previous Slide"
            />
          )}
  
          {hasNext && (
            <CarouselIconButton
              pos="absolute"
              right="3"
              top="50%"
              transform="translateY(-50%)"
              onClick={() => slider.current?.next()}
              icon={<IoChevronForwardOutline />}
              aria-label="Next Slide"
            />
          )}
          <HStack position="absolute" width="full" justify="center" bottom="0" py="4">
            {images.map((_, index) => (
              <Circle key={index} size="2" bg={currentSlide === index ? 'white' : 'whiteAlpha.400'} />
            ))}
          </HStack>
         </Box>
       </Stack>
    )
  }
  const CarouselIconButton = (props) => (
    <IconButton
      display="none"
      fontSize="lg"
      isRound
      boxShadow="base"
      bg={useColorModeValue('white', 'gray.800')}
      _hover={{
        bg: useColorModeValue('gray.100', 'gray.700'),
      }}
      _active={{
        bg: useColorModeValue('gray.200', 'gray.600'),
      }}
      _focus={{
        boxShadow: 'inerhit',
      }}
      _focusVisible={{
        boxShadow: 'outline',
      }}
      {...props}
    />
  )

export const CarouselSlide = (props) => (
  <Box
    className="chakra-carousel__slide"
    position="relative"
    overflow="hidden"
    width="100%"
    minH="100%"
    {...props}
  />
)

export default Carousel;