import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newGifs = await getGifs(category);
        setGifs(newGifs);
        setIsLoading(false);
    }

    useEffect(() => {

        getImages();

        // Opcion valida tambien. Promesas en useEffect
        // getGifs(category)
        //     .then(gifs => setGifs(gifs))

    }, []);




    return {
        gifs,
        isLoading
    }

}
