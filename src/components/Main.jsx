import Navbar from '../navs/Navbar';
import ImageSection from './ImageSection';
import HeroSection from './HeroSection';

export default function Main() {
  return (
    <>
      <div className="app">
        <Navbar />
        <div className="main">
          <ImageSection />
          <HeroSection />
        </div>
      </div>
    </>
  );
}
