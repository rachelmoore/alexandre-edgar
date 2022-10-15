
import {
    Flex,
    Heading
  } from "@chakra-ui/react"
  import React from "react"
  import { connect, styled, Head } from "frontity"
  import Link from "@frontity/components/link"
  import Loading from "./loading"
  
  const Page = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]
    const Html2React = libraries.html2react.Component
  
    if (data.isFetching) {
      return <Loading />
    }
  
    if (!data.isFetching) {
      return (
        <Flex direction="column" align="center" mb={10}>
          <Head>
            <title>{page.title.rendered}</title>
            <meta name="description" content={page.excerpt.rendered} />
          </Head>
          <PageContainer>
          <Link link={page.link} style={{textDecoration: "none"}}>
            <PageTitle>
              <Heading size="lg" pb={5} pt={5}>
                  <Html2React html={page.title.rendered} />
                </Heading>
            </PageTitle>
          </Link>
            <PageContent>
              <Html2React html={page.content.rendered} />
            </PageContent>
          </PageContainer>
        </Flex>
      )
    }
  }
  
  export default connect(Page)
  
  const PageContainer = styled.div`
    background-color: #FFFFFF;
    color: #000000;
    border-radius: 100px 100px 50px 50px;
    margin-top: 40px;
    margin-bottom: 40px;
    border-radius: 100px 100px 50px 50px;
    h2 {
      font-size: 36px;
      margin: 0px;
    }
    @media (max-width: 800px) {
      width: 780px;
    }
    @media (max-width: 600px) {
      width: 350px;
    }
  `
  
  const PageContent = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 800px;
    background-color: #FFFFFF;
    color: #000000;
    border-radius: 100px 100px 50px 50px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    h2 {
      font-size: 36px;
      margin: 0.5em 0;
    }
  `
  
  const PageTitle = styled.div`
  color: #000000;     
`
