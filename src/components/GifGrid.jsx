
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    // IMPORTANCIA SABER CUANDO TERMINO DE CARGAR

    const { gifs, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                (isLoading) && <h1>Espere...</h1>
            }

            <div className="card-grid">
                {
                    gifs.map(gif => (
                        <GifGridItem
                            key={gif.id}
                            {...gif}
                        />

                    ))
                }
            </div>

        </>
    )

}
