import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsCart4, BsInfoCircle, BsSearch } from "react-icons/bs";
import { CgLogIn } from "react-icons/cg";
import { MdAssignmentInd } from "react-icons/md";
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
      <div id="mains">
        <div className="logo">
          <span style={{ color: "blue", fontSize: "40px" }}>U</span>niquic
          <span style={{ color: "red" }}>K</span>
        </div>
        <div className="navbar">
          <ul>
            <li>
              Cart{" "}
              <BsCart4
                style={{
                  color: "#ffffff",
                  fontSize: "16px",
                  position: "relative",
                  top: "3px",
                  left:'3px'
                }}
              />
            </li>
            <li>
              Login{" "}
              <span
                style={{
                  color: "#ffffff",
                  fontSize: "20px",
                  textAlign: "center",
                  position: "relative",
                  top: "5px",
                  left:'3px'
                }}
              >
                <CgLogIn />
              </span>
            </li>
            <li>
              SignUp
              <span
                style={{
                  color: "#ffffff",
                  fontSize: "20px",
                  textAlign: "center",
                  position: "relative",
                  top: "5px",
                  left:'3px'
                }}
              >
                <MdAssignmentInd />
              </span>
            </li>
            <li>
              About
              <span
                style={{
                  color: "#ffffff",
                  fontSize: "18px",
                  textAlign: "center",
                  position: "relative",
                  top: "5px",
                  left: "3px",
                }}
              >
                <BsInfoCircle />
              </span>
            </li>
          </ul>
        </div>
      </div>
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
                <>
                  <div>
                    <div key={product.id} className="max">
                      <img
                        src={product.thumbnail}
                        style={{
                          width: "200px",
                          height: "200px",
                          marginTop: "20px",
                        }}
                      />
                      <h1 style={{ fontSize: "1px" }}>{product.title}</h1>
                      <h1 style={{ fontSize: "15px" }}>$ {product.price}</h1>
                    </div>
                  </div>
                </>
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
    </>
  );
};
export default Users;
