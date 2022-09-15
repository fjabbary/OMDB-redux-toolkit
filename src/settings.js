export const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        }
    ],
}