import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        const inputV  = inputValue.trim();
        if(inputV.length <= 1) return;

        // setCategories(categories => [...categories, inputValue])
        setInputValue(''); 
        onNewCategory(inputV);
    }

    return (

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={handleInputChange}
            ></input>
        </form>

    )
}
