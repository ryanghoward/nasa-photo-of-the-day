import React from 'react';
import { useState, useEffect } from 'react';

function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=MkhbUiVgpaT5zbapm2sAtydg9lwQTQsPLvGonkyr`
            );
            const data = await res.json();
            setPhotoData(data);
        }
    }, []);

    if (!photoData) return <div />;

    return (
        <div>
            <img 
                src={photoData.url}
                alt={photoData.title}
            />
        </div>
    )
}

export default NasaPhoto;
