import { useEffect, useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Attraction from "../../services/Attraction.js";
import Header from "../../components/Header/index.jsx";
import Loading from "../../components/Loading/index.jsx";
import Card from "../../components/Card/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import "./index.css";

function useQuery() {
  const location = useLocation();
  return useMemo(() => new URLSearchParams(location.search), [location]);
}

function Discovery() {
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const query = useQuery();
  const navigate = useNavigate();
  
  useEffect(() => {
    const q = query.get("q");
    const page = query.get("page");
    const per_page = query.get("per_page");

    if (!q) navigate("/");

    Attraction.findAll(q, page, per_page).then(data => {
      setAttractions(data.attractions);
      setLoading(false);
    })
    .catch(error => {
      setLoading(false);
    });
  }, [query]);

  if (loading) {
    return <Loading />;
  }
  
  return (
    <>
      <Header />
      <section className="discovery">
        {attractions.length > 0 ? (
          <>
            <h1>Aqui estão os resultados de sua busca:</h1>
            <div className="grid-container">
              {attractions.map((item, index) => (
                <Card
                  key={index}
                  name={item.name}
                  city={item.city}
                  photo_url={item.attraction_photos[0].photo_url}
                />
              ))}
            </div>
          </>
        ) : (
          <p>Atração não encontrada.</p>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Discovery;
