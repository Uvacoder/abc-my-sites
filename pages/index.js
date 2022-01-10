import Link from 'next/link'
import Image from 'next/image'
import { Text, Card, Spacer, Row, Col, Grid, Toggle } from '@geist-ui/react'

import Meta from '../components/meta'
//import Video from '../components/mux'
import Author from '../components/author'
import projects from '../data.json'

const Header = () => (
  <Col component="header" className="header" justify="center" align="center">
    
    <Spacer y={2} />
    <Author />
    <Spacer y={1} />
    <Text h1>I make lots of websites.</Text>
    <Text h2>Here is a great collection of them.</Text>
    <Spacer y={4} />
    <style jsx global>{`
      .header {
        position: relative;
        overflow: hidden;
        line-height: 1.125;
        min-height: 384px;
        height: 35vh;
        max-height: 768px;
      }
      .header * {
        z-index: 2;
        color: #6930C3 !important;
        position: relative;
      }
      .header h1,
      .header h2 {
        line-height: 1.125;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25),
          0 2px 4px rgba(0, 0, 0, 0.25);
      }
      .header h1 {
        font-size: clamp(1.5rem, 1rem + 8vw, 4rem);
      }
      .header h2 {
        font-size: clamp(1rem, 1rem + 4vw, 2rem);
        padding: 0 6pt;
        opacity: 0.875;
      }
      .header video {
        z-index: 0;
        position: absolute;
        object-fit: cover;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    `}</style>
  </Col>
)

const Project = ({ slug, month, name }) => (
  <Grid xs={12} md={8} lg={6} style={{ scrollSnapAlign: 'start' }}>
    <Link href={`/${slug}`} passHref>
      <a>
        <Card hoverable style={{ overflow: 'hidden', lineHeight: 0 }}>
          <Card.Content style={{ lineHeight: 1.25 }}>
            <Text type="secondary" small>
              {month}
            </Text>
            <Text h4>{name}</Text>
          </Card.Content>
          <Image
            src={`/sites/${slug}.png`}
            width={2732}
            height={2048}
            alt={`Screenshot of ${name}`}
            sizes="25vw"
          />
        </Card>
      </a>
    </Link>
  </Grid>
)

const Index = () => (
  <>
    <Meta />
    <style jsx global>{`
      body {
        background-image: radial-gradient(#00e0d3 1px, transparent 0),
          radial-gradient(#00e0d3 1px, transparent 0);
        background-position: 0 0, 25px 25px;
        background-attachment: fixed;
        background-size: 50px 50px;
      }
    `}</style>
    <Header />
    <Col>
      <Spacer y={1.5} />
      <Link href={`/${projects[0].slug}`} passHref>
        <Row
          component="a"
          justify="center"
          style={{ alignItems: 'center', color: '#000' }}
        >
          <Toggle size="large" style={{ padding: 0 }} />
          <Spacer x={0.75} />
          View in series
        </Row>
      </Link>
      <Spacer y={1} />
    </Col>
    <Grid.Container
      gap={1}
      style={{
        margin: '0 auto',
        padding: '0 6pt',
        maxWidth: '100%',
        scrollSnapType: 'y proximity'
      }}
    >
      {projects.map(project => (
        <Project key={project.slug} {...project} />
      ))}
    </Grid.Container>
    <Spacer y={1.5} />
    <Text
      type="secondary"
      align="center"
      style={{ maxWidth: '28ch', margin: 'auto' }}
    >
      Me building
      the{' '}
      <Link href="https://hackclub.com/bank/">Hack&nbsp;abcClub Bank site</Link>,
      March 2019.
    </Text>
    <Spacer y={1} />
    <Author github />
    <Spacer y={2} />
  </>
)

export default Index
