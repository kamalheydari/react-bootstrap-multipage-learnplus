import React from "react";

import './pagination.css'

const Pagination = () => {
  return (
    <section className="pagination justify-content-around">
      <nav aria-label="Page navigation ">
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" aria-label="Previous">
              <i className="fas fa-chevron-left"></i>
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              1
            </a>
          </li>
          <li className="page-item active">
            <a href="#" className="page-link">
              2
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              3
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link ">
              4
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link disabled">
              ...
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              40
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link" aria-label="Next">
              <i className="fas fa-chevron-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Pagination;
