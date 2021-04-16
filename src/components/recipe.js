import React,{useEffect, useState} from 'react'
import style from './recipe.module.css'
import Loader from 'react-loader-spinner'

const Recipe = ({ title, image, calorie,load ,ingredients}) => {
    const getIngredients = () => {
        console.log("ingredieints are here my firend");
        
    }
    return (
        
        <div className={style.recipe}>
            <div className={style.container}>
                {!load ?
                    <Loader color="lightgrey" type="Bars" rotate={1 }className ={style.loader}>
                        <img id={style.img} src={image} alt="" /> 
                        <h1 className={ style.foodname}>  {title}</h1>
                        <p className={style.calorie}>Calorie:{calorie}</p>
                    </Loader> :
                    <div>
                        <img onClick={getIngredients} id={style.img} src={image} alt="loading" />
                        <h1 className={ style.foodname}>  {title}</h1>
                        <p className={style.calorie}>Calorie:{calorie}</p>
                        <ul id ={style.ingredients}>
                            {ingredients.map((ingredient,index) => (
                                <li key={index}>{ingredient.text}</li>
                            ))}
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default Recipe;