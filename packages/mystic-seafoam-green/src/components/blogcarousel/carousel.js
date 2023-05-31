import { Box, Flex, IconButton, useColorModeValue } from '@chakra-ui/react'
import { useKeenSlider } from 'keen-slider/react' // using version 6.6.10
import { forwardRef } from 'react'
import "keen-slider/keen-slider.min.css"

export const Carousel = forwardRef(function Carousel(props, ref) {
  return (
    <Flex
      ref={ref}
      className="chakra-carousel"
      overflow="hidden"
      position="relative"
      userSelect="none"
      {...props}
    />
  )
})
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
export const CarouselIconButton = (props) => (
  <IconButton
    variant="unstyled"
    boxSize="auto"
    minW="auto"
    display="inline-flex"
    fontSize="2xl"
    color={useColorModeValue('gray.600', 'gray.400')}
    _hover={{
      color: useColorModeValue('blue.500', 'blue.300'),
      _disabled: {
        color: useColorModeValue('gray.600', 'gray.400'),
      },
    }}
    _active={{
      color: useColorModeValue('blue.600', 'blue.400'),
    }}
    _focus={{
      boxShadow: 'none',
    }}
    _focusVisible={{
      boxShadow: 'outline',
    }}
    {...props}
  />
)

// const AdaptiveHeight = (slider) => {
//   function updateHeight() {
//     slider.container.style.height =
//       slider.slides[slider.track.details.rel].offsetHeight + "px"
//   }
//   slider.on("created", updateHeight)
//   slider.on("slideChanged", updateHeight)
//   console.log("I TRIED")
// }

export const useCarousel = (options) => {
  const defaultOptions = {
    selector: '.chakra-carousel__slide',
    widthOrHeight: 100
  }
  return useKeenSlider({
    ...defaultOptions,
    ...options,
  })
}
