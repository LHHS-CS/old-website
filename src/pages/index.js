import React from "react";
import { View } from "react";
import "../style.css";
import { mx } from "../screensizes";
import {
  Heading,
  Flex,
  Column,
  Box,
  Container,
  Link,
  Text,
  Image
} from "rebass";
import {
  Wrapper,
  SmallerWrapper,
  Icon,
  Medium,
  SocialMedia,
  Paragraph,
  Project,
  ProjectTitle,
  ProjectDesc,
  ProjectFinish,
  Footer
} from "../components/components";
import styled from "styled-components";
import Helmet from "react-helmet";

export default () => (
  <React.Fragment>
    <Wrapper>
      <Helmet
        title="LHHS CS Club"
        meta={[
          {
            name: "description",
            content:
              "The Laguna Hills High School Computer Science Club website"
          },
          {
            name: "keywords",
            content: "LHHS, Laguna Hills High School, CS, Computer Science"
          }
        ]}
      />
      <HeaderBlock>
        <Hello>LHHS CS Club</Hello>

        <Flex ml={-10}>
          <SocialMedia href="https://github.com/LHHS-CS" icon="github" />
          {/*<Medium href="https://medium.com/joshkmartinez"/>*/}
          {/*<SocialMedia href="https://twitter.com/joshkmartinez" icon="twitter" />*/}
          <SocialMedia href="https://instagram.com/lhhs.cs" icon="instagram" />
          <SocialMedia href="mailto:joshkmartinez@gmail.com" icon="mail" />
          {/*<Image style={{height: 69, width:69}}src="https://i.imgur.com/fwvtbWL.png" />*/}
        </Flex>
      </HeaderBlock>
      <HeaderBlock>
        <Left flexDirection="column" mt={[null, 60]}>
          <Project
            width={350}
            href="https://lhhs-cs.club"
            title="Laguna Hills High School Computer Science Club"
            desc=" " //
          />

          <Box width={350}>
            <Subhead>Things we do:</Subhead>
          </Box>
          <ProjectFinish //put hackathon website here
            width={350}
            href="lhhs-cs.club"
            title="Hackathon"
            desc="Every year we hold a hackathon as Laguna Hills High School. Our first hackathon was held December 2nd, 2017 9am-9pm. Over 200 people came (for refrence the room capacity is 150)!
            We teach elementary and middle school students (people of any age are welcome to attend) how to code and use industry grade technologies to expose them to the feild of computer science.
            Examples of super cool stuff that happens: We make apps, 3D print stuff, play video games, make websites, build computers, and alot more!"
          />
          {/*
          <Project
            width={350}
            href="http://thewritersblock.tech"
            title="The Writer's Block"
            desc="A decentralized writing platform that allows users to easily reward their favorite authors with Ethereum. Made at Hack Chicago 2018"
          />
          <ProjectFinish
            width={350}
            href="https://sideb-textgen.glitch.me"
            title="Side B Text Gen"
            desc="A pretty title and block quote generator that gives a nice touch to Medium articles"
          />*/}
        </Left>
      </HeaderBlock>
    </Wrapper>
    <Break />
    <SmallerWrapper>
      <CenteredBox>
        <CenteredBlock>
          <HeaderBlock>
            <SmallerHello>About Us</SmallerHello>
            <Paragraph>
              Hello there...
              <br />
              <br />
              We have a{" "}
              <Link
                target="_"
                href="https://github.com/LHHS-CS"
                color="#afaeae"
              >
                Github
              </Link>
              <br />
              <br />
              and an{" "}
              <Link
                target="_"
                href="https://instagram.com/lhhs.cs"
                color="#afaeae"
              >
                Instagram
              </Link>
              <br />
              <br />
            </Paragraph>
          </HeaderBlock>
        </CenteredBlock>
      </CenteredBox>
    </SmallerWrapper>
    <SmallerWrapper>
      <CenteredBox>
        <Box width={[350, 500]}>
          <Subhead>Members</Subhead>
          <ProjectFinish
            width={[350, 500]}
            href="https://instagram.com/joshkmartinez"
            title="President: Joshua Martinez"
            desc="Class of 2021"
          />
          {/*
          <Project
            width={[350, 500]}
            href="http://sideb.media"
            title="Side B President"
            desc="Side B is a new club and student publication at my high school which aims to give every student a voice and become a better writer through a strong local community and the freedom to write whatever they want."
          />
          
          <ProjectFinish
            width={[350, 500]}
            href="https://altheamesh.com"
            title="AltheaMesh West Lafayette Ambassador"
            desc="Althea aims to give local communities the power to provide internet to themselves through a cryptocurrency-powered mesh network. I am in charge of deploying an Althea network in West Lafayette."
          />*/}
        </Box>
      </CenteredBox>
    </SmallerWrapper>
    <SmallerWrapper>
      <CenteredBox>
        <Box width={[350, 500]}>
          <Subhead>Contact</Subhead>

          <CenteredBox>
            
              <Paragraph>
                You can contact us by email. (button at the top of the page)
                
                
              </Paragraph>
           
          </CenteredBox>
        </Box>
      </CenteredBox>
    </SmallerWrapper>
    <Break />
    <Footer>
      <CenteredBlock>
        Created by: Joshua Martinez
        <br />
        <br />
        <CenteredBox>
          <SocialMedia href="https://github.com/joshkmartinez" icon="github" />
          {/*<Medium href="https://medium.com/joshkmartinez"/>*/}
          {/*<SocialMedia href="https://twitter.com/joshkmartinez" icon="twitter" />*/}
          <SocialMedia
            href="https://instagram.com/joshkmartinez"
            icon="instagram"
          />
          <SocialMedia href="mailto:joshkmartinez@gmail.com" icon="mail" />
        </CenteredBox>
      </CenteredBlock>
    </Footer>
  </React.Fragment>
);

const Hello = Heading.extend.attrs({ m: 0, fontSize: 50, textAlign: "left" })`
  position: relative;
  left: -6px;

  ${mx[0]} {
    left: 0px;
  }
  line-height: 1.5;
  color: white;
  font-family: "Averta-Bold";
`;
const SmallerHello = Heading.extend.attrs({
  fontSize: 45,
  mr: 3,
  textAlign: "center"
})`
  line-height: 1.5;
  color: white;
  font-family: "Averta-Bold";
`;
const Subhead = Heading.extend.attrs({
  f: 6,
  m: 0,
  fontSize: 30,
  textAlign: "center"
})`
  line-height: 2;
  color: white;
  font-family: "Averta-Bold";
`;
const Left = Flex.extend.attrs()`
  position: relative;
  left: -25px;
  ${mx[0]} {
    left: -7px;
  }
`;
const CenteredBox = Column.extend.attrs({})`
  display: flex;
  justify-content: center;
`;

export const Break = Flex.extend.attrs({
  flexDirection: ["column", "row"],
  px: 3
})`
  text-align: center;
  ${mx[0]} {
    min-height: 5vh;
    text-align: left;
  }
`;

const HeaderBlock = Column.extend.attrs({ py: 2, pl: [null, 5] })`
  ${mx[0]} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const CenteredBlock = Column.extend.attrs({
  py: 2,
  ml: [-25, 210],
  mr: [-40, 240]
})`
  ${mx[0]} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;