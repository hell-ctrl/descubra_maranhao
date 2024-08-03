import { useState, useEffect } from 'react';
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate
import Slider from "react-slick";
import Attraction from "../../services/Attraction.js";
import Header from "../../components/Header/index.jsx";
import Card from "../../components/Card/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./index.css"

function Home() {
  const [recomendeds, setRecomendeds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Inicializa o hook useNavigate

  useEffect(() => {
    Attraction.getRecomendeds().then(data => {
      setRecomendeds(data);
    });
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/discovery?q=${searchTerm.trim()}`);
    }
  };

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

  return (
    <>
      <Header />
      <section className="search">
        <h1>Para aonde vamos?</h1>
        <div className="input-container">
          <input 
            placeholder="O que deseja conhecer?" 
            type="search" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()} // Permite busca com Enter
          />
          <div onClick={handleSearch}>
            <IoSearch className="search-icon" />
          </div>
        </div>
      </section>
      <section className="recomended">
        <h2>Recomendações para você</h2>
        <Slider {...settings}>
          {recomendeds.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              city={item.city}
              photo_url={item.attraction_photos[0].photo_url}
            />
          ))}
        </Slider>
      </section>
      <Footer />
    </>
  );
}

export default Home;
