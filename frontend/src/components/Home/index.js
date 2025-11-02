import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { FaChevronDown, FaChevronUp, FaRegHeart } from "react-icons/fa";
import { TailSpin } from "react-loader-spinner";

import "./index.css";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [sortMenu, setSortMenu] = useState(false);
  const [products, setProducts] = useState([]);
  const [favId, setFavId] = useState(0);

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const toggleSortMenu = () => setSortMenu(!sortMenu);

  const getAllProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      if (response.ok) {
        setProducts(data.products || []);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addToFav = (id) => {
    setFavId(id);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="home">
      <div className="home-header">
        <h2>DISCOVER OUR PRODUCTS</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>

      <div className="home-toolbar">
        <div className="toolbar-left">
          <span>{products.length} ITEMS</span>
          <button className="filter-toggle" onClick={toggleSidebar}>
            {showSidebar ? "HIDE FILTER" : "SHOW FILTER"}
          </button>
        </div>

        <div className="toolbar-right">
          <button className="sort-btn" onClick={toggleSortMenu}>
            RECOMMENDED {sortMenu ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {sortMenu && (
            <div className="sort-dropdown">
              <ul>
                <li>RECOMMENDED</li>
                <li>NEWEST FIRST</li>
                <li>POPULAR</li>
                <li>PRICE : HIGH TO LOW</li>
                <li>PRICE : LOW TO HIGH</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="home-content">
        {showSidebar && <Sidebar />}
        <div className="product-grid">
          {products.length > 0 ? (
            products.map((p) => (
              <div className="product-card" key={p.id}>
                <div className="product-image">
                  <img src={p.thumbnail} alt={p.title} />
                  {p.stock === 0 && <span className="tag">OUT OF STOCK</span>}
                  {p.rating > 4.5 && <span className="tag">HOT ITEM</span>}
                </div>
                <div className="product-info">
                  <div className="product-title-para">
                    <h4>{p.title}</h4>
                    <p>Sign in or Create an account to see pricing</p>
                  </div>
                  <div className="fav-icon-container">
                    <FaRegHeart
                      onClick={() => addToFav(p.id)}
                      className={p.id === favId ? "fav-icon" : ""}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="tail-spin-container">
              <TailSpin
                visible={true}
                height="40"
                width="40"
                color="black"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
