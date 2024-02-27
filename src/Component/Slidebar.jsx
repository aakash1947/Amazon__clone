import React, { useRef } from "react";

import './Slidebar.css'
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function App() {
    const sliderRef = useRef(null);
    const scrollAmount = 100;
    const images = [
        {
            id: 1,
            url: "https://m.media-amazon.com/images/I/41tXGqoTsmL._AC_SY200_.jpg"
        },
        {
            id: 2,
            url: "https://m.media-amazon.com/images/I/61AM3f2Lu4L._AC_SY200_.jpg"
        },
        {
            id: 3,
            url: "https://m.media-amazon.com/images/I/51HIfdWmZEL._AC_SY200_.jpg"
        },
        {
            id: 4,
            url: "https://m.media-amazon.com/images/I/51HIfdWmZEL._AC_SY200_.jpg"
        },
        {
            id: 5,
            url: "https://m.media-amazon.com/images/I/51BaFSr-PLL._AC_SY200_.jpg"
        },
        {
            id: 6,
            url:
                "https://m.media-amazon.com/images/I/51HIfdWmZEL._AC_SY200_.jpg"
        },
        {
            id: 7,
            url: "https://m.media-amazon.com/images/I/516oKuGsePL._AC_SY200_.jpg"
        },
        {
            id: 8,
            url: "https://m.media-amazon.com/images/I/51BT8hgnqFL._AC_SY200_.jpg"
        },
        {
            id: 9,
            url: "https://m.media-amazon.com/images/I/51tuA+NpL-L._AC_SY200_.jpg"
        },
        {
            id: 10,
            url:
                "https://m.media-amazon.com/images/I/51OZs8i3CzL._AC_SY200_.jpg"
        },
        {
            id: 11,
            url: "https://m.media-amazon.com/images/I/51Y-fw9a7DL._AC_SY200_.jpg"
        },
        {
            id: 12,
            url: "https://m.media-amazon.com/images/I/51RHO22AB2L._AC_SY200_.jpg"
        },
        {
            id: 13,
            url: "https://m.media-amazon.com/images/I/51CpQWTUn8L._AC_SY200_.jpg"
        },
        {
            id: 14,
            url:
                "https://m.media-amazon.com/images/I/51HIfdWmZEL._AC_SY200_.jpg"
        },
        {
            id: 15,
            url:
                "https://m.media-amazon.com/images/I/51UQUhwwOYL._AC_SY200_.jpg"
        },
        {
            id: 16,
            url:
                "https://m.media-amazon.com/images/I/51HIfdWmZEL._AC_SY200_.jpg"
        }
    ];

    return (
        <div className="App">
            <button
                className="nav-btn"
                onClick={() => {
                    const container = sliderRef.current;
                    container.scrollLeft -= scrollAmount;
                }}
            >
                {/* <ChevronLeftIcon /> */}
            </button>
            <div className="images-container" ref={sliderRef}>
                {images.map((image) => {
                    return (
                        <img
                            className="image"
                            alt="sliderImage"
                            key={image?.id}
                            src={image?.url}
                        />
                    );
                })}
            </div>
            <button
                className="nav-btn"
                onClick={() => {
                    const container = sliderRef.current;
                    container.scrollLeft += scrollAmount;
                }}
            >

            </button>
        </div>
    );
}
