
import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (categoria) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    
    const getImages = async() => {
        const newImages = await getGifs(categoria);
        setImages(newImages);
        setIsloading(false);
    }
    
    useEffect( () => {
        getImages();
    }, [])


    return {
        images: images,
        isLoading: isLoading
    }
}

