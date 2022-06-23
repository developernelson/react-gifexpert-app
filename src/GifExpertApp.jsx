import { useState } from "react";

import { AddCategory, GifGrid } from './components'


export const GifExpertApp = () => {

  // para gestionar las categorias
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {

    if (categories.map(category => category.toUpperCase()).includes(newCategory.toUpperCase())) return;

    setCategories([newCategory, ...categories]);

  }

  return (
    <>
      <h1> Gif Expert App</h1>

      <AddCategory
        onNewCategory={value => onAddCategory(value)}
      />

      {
        categories.map(category => (
          <GifGrid
            key={category}
            category={category}
          />
        ))
      }
    </>
  )
}
