import React, { useState } from 'react'
import { AddCategory, GifGrid} from './components'


export const GifApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball'])

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }


  return (
    <>
        {/* Titulo */}
        <h1>GifApp</h1>

        {/* Input */}
        <AddCategory onNewCategory={onAddCategory}/>

        {/* Listado de gifs */}
        {
          categories.map( (category) => (
            <GifGrid 
              key={category}
              categoria={category}
            />
            ))
        }
    </>
  )
}
