import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from '../Layout/Container';

const url = [
    "https://jemi.so/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fjemi-testing.appspot.com%2Fo%2Fuploads%252FROScuygP9UcsPSVR4alsUtNyPk92%252Fegberllkkhkucemsll25q-Beige_2002.jpg%3Falt%3Dmedia%26token%3D51b0f41d-f7dc-4003-819d-8f380d730310&w=1920&q=75",
    "https://jemi.so/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fjemi-testing.appspot.com%2Fo%2Fuploads%252FROScuygP9UcsPSVR4alsUtNyPk92%252Fofn3gj9qc87y8ij8q23a8-Inspirational%2520art%2520work.jpg%3Falt%3Dmedia%26token%3Dc90d2aea-c999-461a-b2f5-d376d3d29399&w=1920&q=75",
    "https://i.pinimg.com/originals/01/f2/9a/01f29a9716b008921886f948b7a0f07f.jpg",
    "https://i.pinimg.com/736x/24/43/52/2443528efe4b63988be24ab5fe5ada1e.jpg"
]

const Carousel = () => {
    const settings = {
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        centerPadding: "0px",
        arrows: false,
        speed: 500,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
    };
    return (
        <div>
            <Container className={"py-14"}>
                <Slider {...settings} >
                    {url.map((val, key) =>
                        <div key={`slider-${key}`} className='py-5 px-8 outline-0'>
                            <img src={val} className="lg:h-80 dark:grayscale h-72 lg:w-80 w-full object-cover" />
                        </div>)}
                </Slider>
            </Container>
        </div>
    )
}

export default Carousel
