import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ info, page, setPage }) {
  const onPageChange = (data) => {
    setPage(data.selected + 1);
  };

  let [width, setWidth] = useState(window.innerWidth);
  let updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .next,
            .previous {
              display: none;
            }
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center gap-4 my-4"
        forcePage={page === 1 ? 0 : page - 1}
        nextLabel="Next"
        previousLabel="Prev"
        nextClassName="btn btn-outline-primary next"
        previousClassName="btn btn-outline-primary previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        onPageChange={onPageChange}
        pageCount={info?.pages}
      />
    </>
  );
}
