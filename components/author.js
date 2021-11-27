import { Row, User, Spacer, Link } from '@geist-ui/react'
import { GitHub } from './icons'

const Author = ({ github = false, ...props }) => (
  <Row justify="center" align="center" className="author" {...props}>
    <User
      src="https://github.com/lachlanjc.png"
      name="2020 in Review"
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
