import React from 'react';
import { Carousel } from 'react-carousel-minimal';
const ImgCarosel = (props) => {
    const tour = props.tourData
    const { slider1, slider2, slider3, slider4, caption1, caption2, caption3, caption4 } = tour
    const data = [
        {
            image: slider1,
            caption: caption1
        },
        {
            image: slider2,
            caption: caption2
        },
        {
            image: slider3,
            caption: caption3
        },
        {
            image: slider4,
            caption: caption4
        }
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }

    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <div style={{
                    padding: "0 20px"
                }}>
                    <Carousel
                        data={data}
                        time={2000}
                        width="100%"
                        // height="500px"
                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={true}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        style={{
                            // textAlign: "center",
                            // maxWidth: "850px",
                            // maxHeight: "500px",
                            // margin: "40px auto",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ImgCarosel;