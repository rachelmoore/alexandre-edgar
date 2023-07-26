import React, { useState, useEffect } from "react";
import { styled, connect } from "frontity";
import {
  Text,
  Flex,
  Grid,
  GridItem,
  useMediaQuery
} from '@chakra-ui/react';
import { InlineWidget } from "react-calendly";
import Contact from "./contact";
import Loading from "./loading";
import SessionsModal from "./sessionsmodal";

function Sessions({ state, libraries, actions }) {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const acf = post.acf;
    const Html2React = libraries.html2react.Component;

    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    const [fullSize, setFullSize] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        if (isLargerThan768) {
            setFullSize(true);
        }
        if (!isLargerThan768) {
            setFullSize(false);
        }
        setLoading(false);
      }, [isLargerThan768]);

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

                        <GridItem colSpan={{base: 4, md: 3}} rowSpan={2} backgroundImage={acf.image_1} backgroundPosition="center" backgroundRepeat="no-repeat">
                            <SessionsModal image={acf.image_1} />
                        </GridItem>
                        <GridItem colSpan={{base: 4, md: 5}} rowSpan={2} backgroundImage={acf.image_2} backgroundPosition="center" backgroundRepeat="no-repeat">
                            <SessionsModal image={acf.image_2} />
                        </GridItem>

                        <GridItem colSpan={5} rowSpan={1} bg='brand.700'>
                            <Flex height="100%" p={8} direction="column" alignItems="center" justifyContent="center">
                                <Text fontWeight={500} mb={5} fontSize="lg" color="blackAlpha.800">
                                    <Html2React html={acf.main_text} />
                                </Text>
                            </Flex>
                        </GridItem>
                        <GridItem rowSpan={3} colSpan={3} bg='white'>
                            {!acf.show_right_side_text &&
                                <CalendlyWrapper>
                                    <InlineWidget id="calendly-widget" url={acf.calendly_link}/>
                                </CalendlyWrapper>
                            }
                            {acf.show_right_side_text &&
                                <Text fontWeight={500} mb={5} fontSize="lg" color="blackAlpha.800" p={8}>
                                    <Html2React html={acf.right_side_text} />
                                </Text>
                            }
                        </GridItem>

                        <GridItem colSpan={3} rowSpan={2} backgroundImage={acf.image_3} backgroundPosition="center" backgroundRepeat="no-repeat">
                            <SessionsModal image={acf.image_3} />
                        </GridItem>
                        <GridItem colSpan={2} rowSpan={2} backgroundImage={acf.image_4} backgroundPosition="center" backgroundRepeat="no-repeat">
                            <SessionsModal image={acf.image_4} />
                        </GridItem>

                        <GridItem colSpan={3} rowSpan={2} backgroundImage={acf.image_5} backgroundPosition="center" backgroundRepeat="no-repeat">
                            <SessionsModal image={acf.image_5} />
                        </GridItem>
                        <GridItem colSpan={3} rowSpan={2} backgroundImage={acf.image_6} backgroundPosition="center" backgroundRepeat="no-repeat">
                            <SessionsModal image={acf.image_6} />
                        </GridItem>
                        <GridItem colSpan={2} rowSpan={2} backgroundImage={acf.image_7} backgroundPosition="center" backgroundRepeat="no-repeat">
                            <SessionsModal image={acf.image_7} />
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
                                backgroundImage={acf.image_1} 
                                backgroundPosition="center" 
                                backgroundRepeat="no-repeat"
                            >
                                <SessionsModal image={acf.image_1} />
                            </Flex>
                            <Flex 
                                direction="column" 
                                width={{base: "100%", sm: "50%"}} 
                                height="600px"
                                borderTop={{base: "4px solid #000000", sm: "0px solid #000000"}}
                                backgroundImage={acf.image_2} 
                                backgroundPosition="center" 
                                backgroundRepeat="no-repeat"
                            >
                                <SessionsModal image={acf.image_2} />
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
                                        <Html2React html={acf.main_text} />
                                    </Text>
                                </Flex>
                            </Flex>
                            <Flex 
                                direction="column" 
                                width={{base: "100%", sm: "50%"}} 
                                height="900px"
                                borderTop="4px solid #000000"
                            >
                            {!acf.show_right_side_text &&
                                <CalendlyWrapper>
                                    <InlineWidget id="calendly-widget" url={acf.calendly_link}/>
                                </CalendlyWrapper>
                            }
                            {acf.show_right_side_text &&
                                <Text fontWeight={500} mb={5} fontSize="lg" color="blackAlpha.800" p={8}>
                                    <Html2React html={acf.right_side_text} />
                                </Text>
                            }
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
                                backgroundImage={acf.image_3}
                                backgroundPosition="center" 
                                backgroundRepeat="no-repeat"
                            >
                                <SessionsModal image={acf.image_3} />
                            </Flex>
                            <Flex 
                                direction="column" 
                                width={{base: "100%", sm: "50%"}} 
                                height="800px"
                                borderTop="4px solid #000000"
                                backgroundImage={acf.image_4} 
                                backgroundPosition="center" 
                                backgroundRepeat="no-repeat"
                            >
                                <SessionsModal image={acf.image_4} />
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
                                backgroundImage={acf.image_5}
                                backgroundPosition="center" 
                                backgroundRepeat="no-repeat"
                            >
                                <SessionsModal image={acf.image_5} />
                            </Flex>
                            <Flex 
                                direction="column" 
                                width={{base: "100%", sm: "50%"}} 
                                height="500px"
                                borderTop="4px solid #000000"
                                backgroundImage={acf.image_6} 
                                backgroundPosition="center" 
                                backgroundRepeat="no-repeat"
                            >
                                <SessionsModal image={acf.image_6} />
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
                                backgroundImage={acf.image_7}
                                backgroundPosition="center" 
                                backgroundRepeat="no-repeat"
                            >
                                <SessionsModal image={acf.image_7} />
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
