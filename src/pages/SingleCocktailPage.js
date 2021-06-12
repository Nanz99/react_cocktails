import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import { useGlobalContext } from '../context'

export default function SingleCocktailPage() {
    const { id } = useParams()
    const { loading, singleCocktail, getSingleCocktail } = useGlobalContext()

    useEffect(() => {
        getSingleCocktail(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        // eslint-disable-next-line
    }, [id])
    if (loading) {
        return <Loading />
    }
    if (!singleCocktail) {
        return <h2>!!!! No Item</h2>
    } else {
        const {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
        } = singleCocktail
       
        return (
            <section className="section cocktail-section">
                <Link className="btn btn-primary" to="/">back home</Link>
                <h2 className="section-title">{name}</h2>
                <div className="drink">
                    <img src={image} alt={name} />
                    <div className="drink-info">
                        <p><span className="drink-data">name :</span> {name}</p>
                        <p><span className="drink-data">category :</span> {category}</p>
                        <p><span className="drink-data">info :</span> {info}</p>
                        <p><span className="drink-data">glass :</span> {glass}</p>
                        <p><span className="drink-data">instructons :</span> {instructions}</p>
                        <p>
                            <span className="drink-data">ingredients :</span>
                            {ingredients.map((item,index) => {
                                return item ? <span key={index}> {item}</span> : null
                                })
                            }
                        </p>
                    </div>
                </div>
            </section>

        )
    }

}
