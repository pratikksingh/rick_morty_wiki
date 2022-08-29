import React, { useState, useEffect } from "react";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Filters, Characters, Pagination, Navbar, Search } from "./components";
import { api } from "./api";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episode from "./components/NavbarItems/Episode";
import Location from "./components/NavbarItems/Location";
import CardDetails from "./components/CardDetails";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episode" element={<Episode />} />
        <Route path="/episode/:id" element={<CardDetails />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

export const Home = () => {
  const [page, setPage] = useState(1);
  const [characterData, setCharacterData] = useState({
    info: null,
    results: []
  });
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    (async function () {
      let data = await fetch(
        api.getCharactersUrl({
          page,
          name: name.toLowerCase(),
          status: status.toLowerCase(),
          species: species.toLowerCase(),
          gender: gender.toLowerCase()
        })
      ).then((res) => res.json());
      setCharacterData(() => ({
        info: data.info,
        results: data.results
      }));
    })();
  }, [name, page, status, species, gender]);

  function clear() {
    setStatus("");
    setSpecies("");
    setGender("");
    setPage(1);
  }

  return (
    <div className="App">
      <Search setName={setName} />
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12 mb-5">
            <div className="text-center fw-bold fs-4 mb-2">Filters</div>
            <div className="text-center mb-3">
              <a
                onClick={clear}
                href="/"
                className="link-primary text-center mb-3"
              >
                Clear Filters
              </a>
            </div>
            <Filters
              setStatus={setStatus}
              setSpecies={setSpecies}
              setGender={setGender}
              setPage={setPage}
            />
          </div>
          <div className="col-lg-8 col-12">
            <div className="row">
              <Characters characters={characterData.results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination setPage={setPage} page={page} info={characterData.info} />
    </div>
  );
};
