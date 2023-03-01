import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProDuct from "./ProDuct";
import Header from "./Header";
import { BsSearch } from "react-icons/bs";
import Footer from "./Footer";
import "./Users.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";


//If a user comes to this route then he must be logged In

const Users = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
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
  console.log(products);
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
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <BsSearch />
          </InputGroup.Text>
          <Form.Control
            placeholder="Enter product name here"
            aria-label=""
            aria-describedby="basic-addon1"
            value={search}
            onChange={handleSearch}
          />
        </InputGroup>
      </div>
      {loading === true ? <p className="Loading">Loading...</p> : <></>}

      <div id="product">
        {products.products
          ? products.products.map((product) => {
              return (
                <ProDuct
                  product={product}
                  key={product.id}
                />
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
