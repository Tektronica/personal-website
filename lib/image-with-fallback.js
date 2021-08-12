import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const imgStyle = {
    transition: 'transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s',
};

const ImageWithFallback = (props) => {

    const { fallbackSrc, ...photoObj } = props;
    const { index, photo, margin, direction, top, left, onClick, ...rest } = { ...photoObj };
    const [imgSrc, setImgSrc] = useState(photo.src);

    const cont = {
        backgroundColor: '#eee',
        cursor: 'pointer',
        overflow: 'hidden',
        position: 'relative',
    };

    if (direction === 'column') {
        cont.position = 'absolute';
        cont.left = left;
        cont.top = top;
    }

    return (
        <div className={"image-item"}

            role={"button"}
            tabIndex={0}
            style={{
                width: photo.width,
                height: photo.height,
                margin,
                //the important staff
                position: "absolute",
                left,
                top
            }}
            onClick={() => onClick }
            >
            <Image
                {...photo}
                onError={() => { setImgSrc(fallbackSrc) }}
            />
        </div>
    );
};

export default ImageWithFallback;

