import React, { useState, useEffect } from "react";
import { styled } from "frontity";
import {
  Text,
  Flex,
  Grid,
  GridItem,
  useMediaQuery
} from '@chakra-ui/react';
import { connect } from "frontity";
import { InlineWidget } from "react-calendly";
import Contact from "./contact";
import Loading from "./loading";
import SessionsModal from "./sessionsmodal";
import rachelmain600 from "../assets/carousel/rachelmain600.jpg";
import rachelpool800 from "../assets/carousel/rachelpool800.jpg";
import rachelbeach800 from "../assets/carousel/rachelbeach800.jpg";
import rachelnoyo800 from "../assets/carousel/rachelnoyo800.jpg";
import rachelbluffs800 from "../assets/carousel/rachelbluffs800.jpg";
import racheljup800 from "../assets/carousel/racheljup800.jpg";
import racheljupiterskirt1000 from "../assets/carousel/racheljupiterskirt1000.jpg";

function Sessions({ state, libraries }) {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const fields = post.acf;
    console.log("post", post);
    console.log("acf", fields);

    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    const [fullSize, setFullSize] = useState(false);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        if (isLargerThan768) {
            setFullSize(true);
        }
        if (!isLargerThan768) {
            setFullSize(false);
        }

        const response = await libraries.source.api.get({
            endpoint: "media",
            params: {
              id: 86,
            },
          });
          console.log("response", response);
          const entitiesAdded = await libraries.source.populate({ response, state });
        //   console.log("source", state.source);
          setImages(entitiesAdded);

        setLoading(false);
        console.log(images);
      }, [isLargerThan768]);

    useEffect(() => {
        console.log("source", state.source);
        console.log("images", images);
    }, [images])

    return (
        <>
        {loading &&
            <Loading />
        }

        {!loading && 
        <>
            <Flex minHeight="85vh" pt={1} pb={1} bg="black" directon="column" alignItems="center" justifyContent="center">
                
                {fullSize &&
                    <Grid
                        minHeight='85vh'
                        templateRows='repeat(6, 1fr)'
                        templateColumns='repeat(8, 1fr)'
                        gap={1}
                        bg="black"
                        maxWidth="1500px"
                    >

                        <GridItem colSpan={{base: 4, md: 3}} rowSpan={2} backgroundImage={rachelmain600} backgroundPosition="center" backgroundRepeat="no-repeat">
                            <SessionsModal image={rachelmain600} />
                        </GridItem>
                        <GridItem colSpan={{base: 4, md: 5}} rowSpan={2} backgroundImage={racheljupiterskirt1000} backgroundPosition="center" backgroundRepeat="no-repeat">
                            <SessionsModal image={racheljupiterskirt1000} />
                        </GridItem>

                        <GridItem colSpan={5} rowSpan={1} bg='brand.700'>
                            <Flex height="100%" p={8} direction="column" alignItems="center" justifyContent="center">
                                <Text fontWeight={500} mb={5} fontSize="lg" color="blackAlpha.800">
                                    Portrait sessions are available for individuals, couples, and families. The shoot lasts for one hour and costs $350.
                                </Text>

                                <Text fontWeight={500} mb={5} fontSize="lg" color="blackAlpha.800">
                                    20 edited photos will be given to you within one week. You can also have all of the unedited photos if you would like them.
                                </Text>

                                <Text fontWeight={500} mb={5} fontSize="lg" color="blackAlpha.800">
                                    Alexandre will email you upon booking to determine where to meet for the shoot. If you are undecided but have a vision for what you hope the photos to capture he can help to select a location.
                                </Text>
                            </Flex>
                        </GridItem>
                        <GridItem rowSpan={3} colSpan={3} bg='white'>
                            <CalendlyWrapper>
                                <InlineWidget id="calendly-widget" url="https://calendly.com/alexandreedgar/portrait-session"/>
                            </CalendlyWrapper>
                        </GridItem>

                        <GridItem colSpan={3} rowSpan={2} backgroundImage={rachelnoyo800} backgroundPosition="center" backgroundRepeat="no-repeat">
                            <SessionsModal image={rachelnoyo800} />
                        </GridItem>
                        <GridItem colSpan={2} rowSpan={2} backgroundImage={rachelbluffs800} backgroundPosition="center" backgroundRepeat="no-repeat">
                            <SessionsModal image={rachelbluffs800} />
                        </GridItem>

                        <GridItem colSpan={3} rowSpan={2} backgroundImage={rachelpool800} backgroundPosition="center" backgroundRepeat="no-repeat">
                            <SessionsModal image={rachelpool800} />
                        </GridItem>
                        <GridItem colSpan={3} rowSpan={2} backgroundImage={racheljup800} backgroundPosition="center" backgroundRepeat="no-repeat">
                            <SessionsModal image={racheljup800} />
                        </GridItem>
                        <GridItem colSpan={2} rowSpan={2} backgroundImage={rachelbeach800} backgroundPosition="center" backgroundRepeat="no-repeat">
                            <SessionsModal image={rachelbeach800} />
                        </GridItem>

                    </Grid>
                }

                {!fullSize &&
                    <Flex direction="column" minHeight="85vh" bg="black">

                        <Flex 
                            direction={{
                                base: "column",
                                sm: "row",
                            }} 
                        >
                            <Flex 
                                direction="column" 
                                width={{base: "100%", sm: "50%"}} 
                                height="600px"
                                borderRight={{base: "0px solid #000000", sm: "4px solid #000000"}}
                                backgroundImage={rachelmain600} 
                                backgroundPosition="center" 
                                backgroundRepeat="no-repeat"
                            >
                                <SessionsModal image={rachelmain600} />
                            </Flex>
                            <Flex 
                                direction="column" 
                                width={{base: "100%", sm: "50%"}} 
                                height="600px"
                                borderTop={{base: "4px solid #000000", sm: "0px solid #000000"}}
                                backgroundImage={racheljupiterskirt1000} 
                                backgroundPosition="center" 
                                backgroundRepeat="no-repeat"
                            >
                                <SessionsModal image={racheljupiterskirt1000} />
                            </Flex>
                        </Flex>

                        <Flex 
                            direction={{
                                base: "column",
                                sm: "row",
                            }} 
                        >
                            <Flex 
                                direction="column" 
                                width={{base: "100%", sm: "50%"}} 
                                height={{base: "fit-content", sm: "900px"}}
                                borderRight={{base: "0px solid #000000", sm: "4px solid #000000"}}
                                borderTop="4px solid #000000"
                                bg="brand.700"
                            >
                                <Flex height="100%" p={8} direction="column" alignItems="center" justifyContent="center">
                                    <Text fontWeight={500} mb={5} fontSize="lg" color="blackAlpha.800">
                                        Portrait sessions are available for individuals, couples, and families. The shoot lasts for one hour and costs $350.
                                    </Text>

                                    <Text fontWeight={500} mb={5} fontSize="lg" color="blackAlpha.800">
                                        20 edited photos will be given to you within one week. You can also have all of the unedited photos if you would like them.
                                    </Text>

                                    <Text fontWeight={500} mb={5} fontSize="lg" color="blackAlpha.800">
                                        Alexandre will email you upon booking to determine where to meet for the shoot. If you are undecided but have a vision for what you hope the photos to capture he can help to select a location.
                                    </Text>
                                </Flex>
                            </Flex>
                            <Flex 
                                direction="column" 
                                width={{base: "100%", sm: "50%"}} 
                                height="900px"
                                borderTop="4px solid #000000"
                            >
                                <CalendlyWrapper>
                                    <InlineWidget id="calendly-widget" url="https://calendly.com/alexandreedgar/portrait-session"/>
                                </CalendlyWrapper>
                            </Flex>
                        </Flex>

                        <Flex 
                            direction={{
                                base: "column",
                                sm: "row",
                            }} 
                        >
                            <Flex 
                                direction="column" 
                                width={{base: "100%", sm: "50%"}} 
                                height="800px"
                                borderRight={{base: "0px solid #000000", sm: "4px solid #000000"}}
                                borderTop="4px solid #000000"
                                backgroundImage={rachelnoyo800}
                                backgroundPosition="center" 
                                backgroundRepeat="no-repeat"
                            >
                                <SessionsModal image={rachelnoyo800} />
                            </Flex>
                            <Flex 
                                direction="column" 
                                width={{base: "100%", sm: "50%"}} 
                                height="800px"
                                borderTop="4px solid #000000"
                                backgroundImage={rachelbluffs800} 
                                backgroundPosition="center" 
                                backgroundRepeat="no-repeat"
                            >
                                <SessionsModal image={rachelbluffs800} />
                            </Flex>
                        </Flex>

                        <Flex 
                            direction={{
                                base: "column",
                                sm: "row",
                            }} 
                        >
                            <Flex 
                                direction="column" 
                                width={{base: "100%", sm: "50%"}} 
                                height="500px"
                                borderRight={{base: "0px solid #000000", sm: "4px solid #000000"}}
                                borderTop="4px solid #000000"
                                backgroundImage={rachelpool800}
                                backgroundPosition="center" 
                                backgroundRepeat="no-repeat"
                            >
                                <SessionsModal image={rachelpool800} />
                            </Flex>
                            <Flex 
                                direction="column" 
                                width={{base: "100%", sm: "50%"}} 
                                height="500px"
                                borderTop="4px solid #000000"
                                backgroundImage={racheljup800} 
                                backgroundPosition="center" 
                                backgroundRepeat="no-repeat"
                            >
                                <SessionsModal image={racheljup800} />
                            </Flex>
                        </Flex>

                        <Flex 
                            direction="row" 
                        >
                            <Flex 
                                direction="column" 
                                width="100%" 
                                height="500px"
                                borderTop="4px solid #000000"
                                backgroundImage={rachelbeach800}
                                backgroundPosition="center" 
                                backgroundRepeat="no-repeat"
                            >
                                <SessionsModal image={rachelbeach800} />
                            </Flex>
                        </Flex>

                    </Flex>
                }
            </Flex>
            <Flex direction="column" align="center" bg="black">
                <Contact />
            </Flex>
        </>
    }
    </>
    )
  }

  export default connect(Sessions);
  
  const CalendlyWrapper = styled.div`
    height: 85vh;
    overflow: scroll;
    background-color: #FFFFFF;
  iframe {
    border-radius: 170px;
  }
  @media (max-width: 768px) {
    height: 900px;
  }
`
