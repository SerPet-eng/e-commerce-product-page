import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { usePageContext } from '../utils/PageContext';

export default function Navs() {
  const { windowSize } = usePageContext();

  return (
    <>
      <div className="nav">
        {windowSize.width < 760 ? <MobileNav /> : <DesktopNav />}
      </div>
    </>
  );
}
