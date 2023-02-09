import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProDuct from './ProDuct'
import Header from './Header'
import { BsSearch } from "react-icons/bs";
import Footer from './Footer'

//If a user comes to this route then he must be logged In

const Users = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(null);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const atATime = 10;

  function fetchNewRecords(page) {
    setLoading(true);
    fetch(
      search
        ? `https://dummyjson.com/products/search?q=${search}`
        : `https://dummyjson.com/products?limit=${atATime}&skip=${
            (page - 1) * atATime
          }`
    )
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setProducts(json);
      });
  }

  useEffect(() => {
    fetchNewRecords(1);
  }, [search]);

  useEffect(() => {
    if (!localStorage.getItem("login-token")) {
      navigate("/login");
    } else {
      setLoading(true);
      fetchNewRecords(1);
    }
  }, []);

  function getPageArray() {
    const totalRecords = products.total;
    const totalPages = totalRecords / atATime;
    const pageArray = [];
    for (let i = 0; i < totalPages; i++) {
      const pageNumber = i + 1;
      pageArray.push(pageNumber);
    }
    return pageArray;
  }

  return (
    <>
      <Header />
      <div className="search-input">
      <label for='s' style={{fontSize:'18px',paddingLeft:'3px',paddingRight:'3px',}}>Search</label>
      <input
        type="text"
        placeholder="Search Item Here"
        value={search}
        onChange={handleSearch}
        id="s"
      />
      <span style={{paddingLeft:'5px'}}><BsSearch/></span>
      </div>
      {loading === true ? <p className="Loading">Loading...</p> : <></>}

      <div id="product">
        {products.products
          ? products.products.map((product) => {
              return (
                <ProDuct product={product} key={product.id}/>
              );
            })
          : null}
      </div>
      {getPageArray().map((page) => {
        return (
          <>
            <span className="btns">
              <button
                onClick={() => {
                  fetchNewRecords(page);
                }}
                className="btn"
              >
                {page}
              </button>
            </span>
            
          </>
        );
      })}
      <Footer />
    </>
  );
};
export default Users;
