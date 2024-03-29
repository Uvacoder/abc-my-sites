import { Row, User, Spacer, Link } from '@geist-ui/react'
import { GitHub } from './icons'

const Author = ({ github = false, ...props }) => (
  <Row justify="center" align="center" className="author" {...props}>
    <User
      src="https://raw.githubusercontent.com/Uvacoder/abc-sites-collection/main/public/horse-neon.WEBP"
      name="Collection of Sites"
      align="left"
    >
      <User.Link href="https://github.com/uvacoder">@uvacoder</User.Link>
    </User>
    {github && (
      <>
        <Spacer x={1} />
        <Link href="https://github.com/uvacoder/sites-collection" block>
          <GitHub width={20} height={20} />
        </Link>
      </>
    )}
    <style jsx global>{`
      .author {
        align-items: center !important;
      }
      .names {
        flex-direction: column-reverse !important;
        line-height: 1.5;
      }
      .author > a {
        color: inherit !important;
        line-height: 0;
      }
    `}</style>
  </Row>
)

export default Author
