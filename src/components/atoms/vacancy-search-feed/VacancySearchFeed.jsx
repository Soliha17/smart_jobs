import React from "react";

import "./vacancySearchFeed.css";

const VacancySearchFeed = ({ style }) => {
  return (
    <div className="vacancy-result">
      <div className="left__vacancy-result">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2_1653)">
            <path
              d="M5 5H7V6C7 7.1 7.9 8 9 8H15C16.1 8 17 7.1 17 6V5H19V10H21V5C21 3.9 20.1 3 19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H10V19H5V5ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3Z"
              fill="#1C1917"
            />
            <path
              d="M22.2997 20.8995L20.2997 18.8995C20.8797 17.8895 21.2497 16.6695 20.8097 15.2495C20.2797 13.5295 18.7697 12.1995 16.9697 12.0295C14.0997 11.7495 11.7397 14.0995 12.0197 16.9795C12.1997 18.7695 13.5197 20.2895 15.2397 20.8195C16.6697 21.2595 17.8797 20.8895 18.8897 20.3095L20.8897 22.3095C21.2797 22.6995 21.8997 22.6995 22.2897 22.3095C22.6797 21.9195 22.6897 21.2895 22.2997 20.8995ZM16.4997 18.9995C15.0997 18.9995 13.9997 17.8995 13.9997 16.4995C13.9997 15.0995 15.0997 13.9995 16.4997 13.9995C17.8997 13.9995 18.9997 15.0995 18.9997 16.4995C18.9997 17.8995 17.8997 18.9995 16.4997 18.9995Z"
              fill="#1C1917"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_1653">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p>
          Qidiruvlar natijasi:{" "}
          <span className="number__vacancy-result">285</span>
        </p>
      </div>
      <div className="right__vacancy-result" style={style}>
        <button>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2_1645)">
              <path
                d="M3.33333 15H6.66667C7.125 15 7.5 14.625 7.5 14.1667C7.5 13.7083 7.125 13.3333 6.66667 13.3333H3.33333C2.875 13.3333 2.5 13.7083 2.5 14.1667C2.5 14.625 2.875 15 3.33333 15ZM2.5 5.83333C2.5 6.29167 2.875 6.66667 3.33333 6.66667H16.6667C17.125 6.66667 17.5 6.29167 17.5 5.83333C17.5 5.375 17.125 5 16.6667 5H3.33333C2.875 5 2.5 5.375 2.5 5.83333ZM3.33333 10.8333H11.6667C12.125 10.8333 12.5 10.4583 12.5 10C12.5 9.54167 12.125 9.16667 11.6667 9.16667H3.33333C2.875 9.16667 2.5 9.54167 2.5 10C2.5 10.4583 2.875 10.8333 3.33333 10.8333Z"
                fill="#1C1917"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_1645">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Saralash
        </button>
      </div>
    </div>
  );
};

export default VacancySearchFeed;
