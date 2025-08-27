import { FC, useRef } from 'react';
import { Details } from './views/details';
import { Download } from './views/download';
import { General } from './views/general';
import { Hobbies } from './views/hobbies';
import { Languages } from './views/languages';
import { Links } from './views/links';
import {
  SectionContent,
  SectionList,
  SectionName,
  SectionSubTitle,
  SectionTitle,
  SectionWrapper,
} from './views/section';
import { Skills } from './views/skills';
import { ContentWrapper } from './wrappers/content.wrapper';
import { MainWrapper } from './wrappers/main.wrapper';
import { PageWrapper } from './wrappers/page.wrapper';
import { Sidebar } from './wrappers/sidebar.wrapper';

export const Resume: FC = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  return (
    <PageWrapper>
      <ContentWrapper ref={contentRef}>
        <Sidebar>
          <General firstName="Vladyslav" lastName="Koliesnikov" job="Full Stack Developer" photo="photo.png" />
          <Details country="Ukraine" phone="380664448780" email="appako2603@gmail.com" />
          <Links links={['https://github.com/appako', 'https://linkedin.com/in/vkoliesnikov']} />
          <Skills
            skills={[
              { name: 'TypeScript', level: 5 },
              { name: 'React', level: 5 },
              { name: 'Material UI', level: 5 },
              { name: 'Node.js', level: 4 },
              { name: 'React Native', level: 4 },
              { name: 'NestJS', level: 4 },
              { name: 'MongoDB', level: 5 },
              { name: 'PostgreSQL', level: 4 },
              { name: 'Docker', level: 4 },
            ]}
          />
          <Languages
            languages={[
              { name: 'Ukrainian', level: 5 },
              { name: 'Russian', level: 5 },
              { name: 'English', level: 2 },
            ]}
          />
          <Hobbies>Travel, Snowboarding, Hiking, Automotive & Motorcycling</Hobbies>
        </Sidebar>
        <MainWrapper>
          <SectionWrapper>
            <SectionName>Profile</SectionName>
            <SectionContent>
              Experienced Software Developer skilled in designing, implementing, and maintaining software systems.
              Proficient at managing independent projects as well as collaborating effectively within a team. A creative
              problem solver with strong expertise in software development and working with diverse data structures.
            </SectionContent>
          </SectionWrapper>
          <SectionWrapper>
            <SectionName>Education</SectionName>
            <SectionTitle>Master, Oles Honchar Dnipro National University, Dnipro</SectionTitle>
            <SectionSubTitle>September 2010 — February 2016</SectionSubTitle>
            <SectionContent>
              Faculty of Physics, Electronics and Computer Systems, specialty Telecommunications and radio electronic
              devices
            </SectionContent>
          </SectionWrapper>

          <SectionWrapper>
            <SectionName>Projects</SectionName>
            <SectionTitle>Timeko, CodeTiburon, Full Stack Developer</SectionTitle>
            <SectionSubTitle>August 2022 — Present</SectionSubTitle>
            <SectionContent>
              All-in-one platform for recruitment and HR management, streamlines messaging, interview scheduling,
              contact management, and analytics to boost efficiency and productivity.
            </SectionContent>
            <SectionList>
              <li>React, Material UI, Tailwind, MobX, TypeDI, Redux, Webpack, Vite</li>
              <li>NestJS, MongoDB, PostgreSQL, Redis, BullMQ, Jest, Docker, AWS</li>
              <li>Google Maps Platform, WhatsApp Business Platform, Vonage APIs</li>
            </SectionList>
          </SectionWrapper>

          <SectionWrapper>
            <SectionTitle>Help-Ukr, Frontend Developer</SectionTitle>
            <SectionSubTitle>March 2022 — April 2022</SectionSubTitle>
            <SectionContent>
              A small open-source Next.js web application for collecting donations for Ukraine in Europe. Features an
              interactive map and donation tracking. <a href="http://github.com/help-ukr">github.com/help-ukr</a>
            </SectionContent>
            <SectionList>
              <li>React, Next.js, React Leaflet, OpenStreetMap, Geolib, MobX, Material-UI</li>
            </SectionList>
          </SectionWrapper>

          <SectionWrapper>
            <SectionTitle>SWS, Frontend Developer</SectionTitle>
            <SectionSubTitle>November 2021 — February 2022</SectionSubTitle>
            <SectionContent>
              Online banking help desk platform providing customer support and issue resolution.
            </SectionContent>
            <SectionList>
              <li>React, MobX, Material UI, OpenAPI, Swagger, Webpack, Docker</li>
            </SectionList>
          </SectionWrapper>

          <SectionWrapper>
            <SectionTitle>World I Love, Full Stack Developer</SectionTitle>
            <SectionSubTitle>September 2021 — January 2022</SectionSubTitle>
            <SectionContent>
              The World I Love is a mobile social networking app for messaging, creating group chats, and sharing photos
              with friends and followers.
            </SectionContent>
            <SectionList>
              <li>React Native, MobX, GraphQL</li>
              <li>Node.js, NestJS, MongoDB, Apollo, Docker</li>
            </SectionList>
          </SectionWrapper>

          <SectionWrapper>
            <SectionTitle>FeedMe Bot, SoftDrive, Full Stack Developer</SectionTitle>
            <SectionSubTitle>March 2020 — December 2020</SectionSubTitle>
            <SectionContent>
              A Telegram bot @ksedpubunchbot for food delivery featuring an interactive web menu, customizable delivery
              zones, and order history with ratings and feedback.
            </SectionContent>
            <SectionList>
              <li>Node.js, Koa, MongoDB, Docker, Telegram Bot API</li>
              <li>React, Material-UI</li>
            </SectionList>
          </SectionWrapper>
          <div className="my-2" />
          <SectionWrapper>
            <SectionTitle>Poster Debit Card, SoftDrive, Full Stack Developer</SectionTitle>
            <SectionSubTitle>April 2018 — May 2019</SectionSubTitle>
            <SectionContent>
              A multi-POS frontend system that enables cashless payment solutions for festivals, food courts, and beach
              zones.
            </SectionContent>
            <SectionList>
              <li>React, MobX, Material-UI, SSR, Webpack</li>
              <li>Node.js, Express, MongoDB, Redis, Apollo, i18Next</li>
            </SectionList>
          </SectionWrapper>

          <SectionWrapper>
            <SectionTitle>Arendator, SoftDdrive, Full Stack Developer</SectionTitle>
            <SectionSubTitle>April 2016 — November 2017</SectionSubTitle>
            <SectionContent>
              A single-page application for finding available spaces and rental opportunities in shopping malls.
            </SectionContent>
            <SectionList>
              <li>Node.js, Express, Keystone, Socket.io</li>
              <li>React 15, Gulp, SCSS</li>
              <li>Google Maps API</li>
            </SectionList>
          </SectionWrapper>
        </MainWrapper>
      </ContentWrapper>
      <Download contentRef={contentRef} />
    </PageWrapper>
  );
};
