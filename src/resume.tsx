import { FC } from 'react';
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
import { ContentWrapper } from './wrappers/content.wrapper';
import { MainWrapper } from './wrappers/main.wrapper';
import { PageWrapper } from './wrappers/page.wrapper';
import { Sidebar } from './wrappers/sidebar.wrapper';

export const Resume: FC = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <Sidebar>
          <General firstName="Vladyslav" lastName="Koliesnikov" job="Full Stack Developer" photo="photo.png" />
          <Details country="Ukraine" phone="380664448780" email="appako2603@gmail.com" />
          <Links
            links={['https://appako.github.io', 'https://github.com/appako', 'https://linkedin.com/in/vkoliesnikov']}
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
              Senior Full Stack Developer with 10+ years of commercial experience building production web and mobile
              applications with <strong>TypeScript, Node.js, React</strong>.
            </SectionContent>
            <SectionContent>
              Experienced across the full development lifecycle, from frontend and backend development to architecture,
              infrastructure and third-party integrations. Currently responsible for backend architecture and technical
              decisions while actively developing React Native applications.
            </SectionContent>
          </SectionWrapper>

          <SectionWrapper>
            <SectionName>Core Skills</SectionName>
            <SectionContent>
              <strong>Backend:</strong> Node.js, NestJS, Express, PostgreSQL, MongoDB, Redis, BullMQ
            </SectionContent>
            <SectionContent>
              <strong>Frontend:</strong> React, React Native, Next.js, MobX, React Query, Leaflet
            </SectionContent>
            <SectionContent>
              <strong>Infrastructure & Testing:</strong> Docker, CI/CD, AWS, Jest, Webpack, OpenAPI
            </SectionContent>
          </SectionWrapper>

          <SectionWrapper>
            <SectionName>Projects</SectionName>
            <SectionTitle>Aromoshelf, Full Stack Developer</SectionTitle>
            <SectionSubTitle>September 2025 — Present</SectionSubTitle>
            <SectionContent>
              Mobile application for managing and sharing personal fragrance collections, allowing users to create
              virtual shelves, track usage and connect with other fragrance enthusiasts.
            </SectionContent>
            <SectionList>
              <li>
                • <strong>Sole backend developer</strong>, responsible for backend architecture and technical decisions.
              </li>
              <li>
                • Develop and maintain backend services with <strong>TypeScript</strong> and <strong>NestJS</strong>,
                using <strong>PostgreSQL</strong> and <strong>Redis</strong>.
              </li>
              <li>
                • Actively develop the React Native application, implementing user-facing features alongside backend
                functionality.
              </li>
              <li>
                • Design and implement features across the full stack, from database and API design to mobile UI and
                client-side state management.
              </li>
            </SectionList>
            <SectionContent>
              <strong>Stack:</strong> TypeScript, NestJS, PostgreSQL, Redis, React Native, React, React Query, MobX,
              Tsyringe, Webpack, Jest, Docker, AWS, Firebase, Sentry, Amplitude
            </SectionContent>
          </SectionWrapper>
          <SectionWrapper>
            <SectionTitle>Timeko, CodeTiburon, Full Stack Developer</SectionTitle>
            <SectionSubTitle>August 2022 — September 2025</SectionSubTitle>
            <SectionContent>
              All-in-one recruitment and HR management platform covering messaging, interview scheduling, contact
              management and analytics.
            </SectionContent>
            <SectionList>
              <li>
                • Developed and maintained <strong>React</strong> web applications and <strong>React Native </strong>
                mobile applications.
              </li>
              <li>
                • Developed <strong>Node.js</strong> and <strong>NestJS</strong> backend services within a{' '}
                <strong>microservices</strong> architecture.
              </li>
              <li>
                • Worked with both <strong>PostgreSQL</strong> and <strong>MongoDB</strong> across the platform.
              </li>
              <li>
                • Implemented asynchronous processing using <strong>Redis</strong> and <strong>BullMQ</strong>.
              </li>
              <li>• Integrated third-party services including WhatsApp Business Platform, and Google Maps Platform.</li>
              <li>
                • Worked with <strong>Docker</strong> and <strong>AWS</strong> as part of the application
                infrastructure.
              </li>
            </SectionList>
            <SectionContent>
              <strong>Stack:</strong> TypeScript, React, React Native, NestJS, PostgreSQL, MongoDB, Redis, BullMQ, MobX,
              Redux, TypeDI, Material UI, Webpack, Vite, Jest, Docker, AWS
            </SectionContent>
          </SectionWrapper>

          <SectionWrapper>
            <SectionTitle>Help-Ukr, Frontend Developer</SectionTitle>
            <SectionSubTitle>March 2022 — April 2022</SectionSubTitle>
            <SectionContent>
              Open-source Next.js application for collecting donations for Ukraine in Europe, featuring an interactive
              map and donation tracking.
            </SectionContent>
            <SectionList>
              <li>
                • Developed frontend functionality using <strong>React</strong> and <strong>Next.js</strong>.
              </li>
              <li>
                • Implemented interactive maps using <strong>React Leaflet</strong> and <strong>OpenStreetMap</strong>.
              </li>
              <li>• Worked with geographic data and distance calculations.</li>
            </SectionList>
            <SectionContent>
              <strong>Stack:</strong> React, Next.js, React Leaflet, OpenStreetMap, Geolib, MobX, Material UI
            </SectionContent>
            <SectionContent>
              <strong>Source code:</strong>{' '}
              <a href="http://github.com/help-ukr/donations-management-app" className="underline">
                github.com/help-ukr
              </a>
            </SectionContent>
          </SectionWrapper>

          <SectionWrapper>
            <SectionTitle>SWS, Frontend Developer</SectionTitle>
            <SectionSubTitle>November 2021 — February 2022</SectionSubTitle>
            <SectionContent>
              Online banking help desk platform for customer support and issue resolution.
            </SectionContent>
            <SectionList>
              <li>
                • Developed frontend features using <strong>React</strong> and <strong>Next.js</strong>.
              </li>
              <li>
                • Worked with <strong>MobX</strong>, <strong>Tailwind</strong> and <strong>ISR</strong>.
              </li>
              <li>
                • Implemented and maintained automated tests with <strong>Jest</strong>.
              </li>
            </SectionList>
            <SectionContent>
              <strong>Stack:</strong> React, Next.js, MobX, Tailwind, ISR, Jest, OpenAPI, Swagger, Webpack, Docker
            </SectionContent>
          </SectionWrapper>

          <SectionWrapper>
            <SectionTitle>World I Love, Full Stack Developer</SectionTitle>
            <SectionSubTitle>September 2021 — January 2022</SectionSubTitle>
            <SectionContent>
              Mobile social networking application for messaging, group chats and photo sharing.
            </SectionContent>
            <SectionList>
              <li>
                • Developed mobile application functionality using <strong>React Native</strong>.
              </li>
              <li>
                • Developed backend services using <strong>Node.js</strong> and <strong>NestJS</strong>.
              </li>
              <li>
                • Worked with MongoDB, <strong>GraphQL</strong> and <strong>Apollo</strong>.
              </li>
              <li>
                • Containerized application components using <strong>Docker</strong>.
              </li>
            </SectionList>
            <SectionContent>
              <strong>Stack:</strong> React Native, MobX, GraphQL, Node.js, NestJS, MongoDB, Apollo, Docker
            </SectionContent>
          </SectionWrapper>

          {/* <div className="divide bg-gray-200 w-full h-0.25 mb-8" /> */}

          <SectionWrapper>
            <SectionTitle>FeedMe Bot, SoftDrive, Full Stack Developer</SectionTitle>
            <SectionSubTitle>March 2020 — December 2020</SectionSubTitle>
            <SectionContent>
              Telegram food delivery application with an interactive web menu, delivery zones, order history, ratings
              and feedback.
            </SectionContent>
            <SectionList>
              <li>
                • Developed backend functionality using <strong>Node.js</strong> and <strong>Koa</strong>.
              </li>
              <li>
                • Developed the web interface using <strong>React</strong> and <strong>Material UI</strong>.
              </li>
              <li>
                • Integrated the application with the <strong>Telegram Bot API</strong>.
              </li>
              <li>
                • Worked with <strong>MongoDB</strong> and <strong>Docker</strong>.
              </li>
            </SectionList>
            <SectionContent>
              <strong>Stack:</strong> Node.js, Koa, MongoDB, React, Material UI, Docker, Telegram Bot API
            </SectionContent>
          </SectionWrapper>

          <SectionWrapper>
            <SectionTitle>Poster Debit Card, SoftDrive, Full Stack Developer</SectionTitle>
            <SectionSubTitle>April 2018 — May 2019</SectionSubTitle>
            <SectionContent>
              Multi-POS frontend system providing cashless payment solutions for festivals, food courts and beach zones.
            </SectionContent>
            <SectionList>
              <li>
                • Developed frontend applications using <strong>React</strong> and <strong>MobX</strong>.
              </li>
              <li>
                • Worked with <strong>Node.js</strong> and <strong>Express</strong> backend services.
              </li>
              <li>• Implemented server-side rendering and application infrastructure.</li>
              <li>
                • Worked with <strong>MongoDB</strong>, <strong>Redis</strong> and <strong>GraphQL</strong>.
              </li>
            </SectionList>
            <SectionContent>
              <strong>Stack:</strong> React, MobX, Material UI, SSR, Webpack, Node.js, Express, MongoDB, Redis, Apollo,
              i18Next
            </SectionContent>
          </SectionWrapper>

          <SectionWrapper>
            <SectionTitle>Arendator, SoftDdrive, Full Stack Developer</SectionTitle>
            <SectionSubTitle>April 2016 — November 2017</SectionSubTitle>
            <SectionContent>
              Single-page application for finding available spaces and rental opportunities in shopping malls.
            </SectionContent>
            <SectionList>
              <li>
                • Developed frontend functionality using <strong>React</strong>.
              </li>
              <li>
                • Developed backend services using <strong>Node.js</strong> and <strong>Express</strong>.
              </li>
              <li>
                • Implemented interactive functionality using <strong>Google Maps API</strong>.
              </li>
            </SectionList>
            <SectionContent>
              <strong>Stack:</strong> Node.js, Express, Keystone, Socket.io, React 15, Gulp, SCSS, Google Maps API
            </SectionContent>
          </SectionWrapper>
          <SectionWrapper>
            <SectionTitle>Electronics & Embedded Experience — SoftDrive</SectionTitle>
            <SectionSubTitle>2012 — 2016 · Part-time, alongside university studies</SectionSubTitle>
            <SectionContent>
              Started with PCB assembly and soldering, later progressing to <strong>PCB</strong> design in{' '}
              <strong>Altium Designer</strong> and small-batch PCB manufacturing. Designed and prototyped custom boards
              and developed basic <strong>C firmware for Arduino, STM32 and ESP</strong> platforms to test and validate
              custom hardware. Worked with <strong>UART, I²C and SPI</strong> communication between microcontrollers and
              peripheral devices.
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
        </MainWrapper>
      </ContentWrapper>
      <Download />
    </PageWrapper>
  );
};
