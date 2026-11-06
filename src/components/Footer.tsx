import { D } from '../data/portfolio'
import { Icon, Logo } from './common'

export default function Footer() {
  return (
    <footer className="footer invert">
      <div className="wrap">
        <div className="footer__in">
          <div className="footer__id">
            <Logo className="brand__mark brand__mark--sm" />
            <span>
              © {new Date().getFullYear()} {D.identity.name}
            </span>
          </div>
          <a href="#top" className="tlink">
            Back to top
            <Icon name="arrow-up" size={12} />
          </a>
        </div>
      </div>
    </footer>
  )
}
