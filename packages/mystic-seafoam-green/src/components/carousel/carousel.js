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
  import React, { useState } from 'react'
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
  import "./styles.css"

const AdaptiveHeight = (slider) => {
  function updateHeight() {
    slider.container.style.height =
      slider.slides[slider.track.details.rel].offsetHeight + "px"
  }
  slider.on("created", updateHeight)
  slider.on("slideChanged", updateHeight)
}

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    },
    [AdaptiveHeight]
  )

  return (
    // <>
    //   <div className="navigation-wrapper">
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
        <div ref={sliderRef} className="keen-slider">
          <div 
            className="keen-slider__slide number-slide1"
            style={{ height: 300 }}
          >
            1
          </div>
          <div
            className="keen-slider__slide number-slide2"
            style={{ height: 100 }}
          >
            2
          </div>
          <div
            className="keen-slider__slide number-slide3"
            style={{ height: 150 }}
          >
            3
          </div>
          <div className="keen-slider__slide number-slide4">4</div>
          <div
            className="keen-slider__slide number-slide5"
            style={{ height: 75 }}
          >
            5
          </div>
          <div
            className="keen-slider__slide number-slide6"
            style={{ height: 100 }}
          >
            6
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            {/* <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            /> */}
            <CarouselIconButton
              pos="absolute"
              left="3"
              top="50%"
              transform="translateY(-50%)"
              onClick={() => instanceRef.current?.prev()}
              icon={<IoChevronBackOutline />}
              aria-label="Previous Slide"
            />

            <CarouselIconButton
              pos="absolute"
              right="3"
              top="50%"
              transform="translateY(-50%)"
              onClick={() => instanceRef.current?.next()}
              icon={<IoChevronForwardOutline />}
              aria-label="Next Slide"
            />

            {/* <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            /> */}
          </>
        )}
      {/* </div> */}
      {loaded && instanceRef.current && (
        <HStack position="absolute" width="full" justify="center" bottom="0" py="4">
          {images.map((_, index) => (
            <Circle key={index} size="2" bg={currentSlide === index ? 'white' : 'whiteAlpha.400'} />
          ))}
        </HStack>
        // <div className="dots">
        //   {[
        //     ...Array(instanceRef.current.track.details.slides.length).keys(),
        //   ].map((idx) => {
        //     return (
        //       <button
        //         key={idx}
        //         onClick={() => {
        //           instanceRef.current?.moveToIdx(idx)
        //         }}
        //         className={"dot" + (currentSlide === idx ? " active" : "")}
        //       ></button>
        //     )
        //   })}
        // </div>
      )}
      </Box>
      </Stack>
  )
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

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