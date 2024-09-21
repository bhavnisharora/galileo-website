import PromoVideo from "../components/PromoVideo";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import VideoReview from "../components/VideoReview";
import PrizeAmount from "../components/PrizeAmount";
import Criteria from "../components/Criteria";
const Home = () => {
  return (
    <>
      <Navbar />
      <VideoReview />
      <PrizeAmount />
      <Criteria />
      <PromoVideo />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
