import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import NotFound from "../../pages/NotFound/index.jsx";
import Attraction from "../../services/Attraction.js";
import Header from "../../components/Header/index.jsx";
import Loading from "../../components/Loading/index.jsx";
import Map from "../../components/Map/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

function AttractionDetail() {
  const [attraction, setAttraction] = useState(null);
  const [loading, setLoading] = useState(true);
  const { attraction_name } = useParams();
  
  useEffect(() => {
    Attraction.findByName(attraction_name)
      .then(data => {
        setAttraction(data);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
  }, [attraction_name]);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  if (loading) {
    return <Loading />;
  }

  if (!attraction) {
    return <NotFound />;
  }

  return (
    <>
      <Header />
      <section className="attraction-detail">
        <Slider {...settings}>
          {attraction.attraction_photos.map(item => (
            <img className="image-carousel" key={item.photo_url} src={item.photo_url} alt="attraction" />
          ))}
        </Slider>
        <div className="info">
          <h1>{attraction.name}</h1>
          <p>{attraction.city}</p>
          <p>{attraction.description}</p>
        </div>
        <div className="map-container">
          <h2>Aonde fica?</h2>
          <Map 
            position={[attraction.latitude, attraction.longitude]}
            name={attraction.name}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AttractionDetail;
