import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import Loading from './Loading'

export default function CocktailList() {
    const { cocktails, loading } = useGlobalContext()
    if (loading) {
        return <Loading />
    }
    return (
        <section className="section">
            <h2 className="section-title">cocktails</h2>
            <div className="cocktails-center">
                {
                    cocktails.map(item => {
                        const { id, name, glass, info, image } = item
                        return (
                            <article key={id} className="cocktail">
                                <div className="img-container"><img src={image} alt={name} />
                                </div>
                                <div className="cocktail-footer">
                                    <h3>{name}</h3>
                                    <h4>{glass}</h4>
                                    <p>{info}</p>
                                    <Link className="btn btn-primary btn-details" to={`/cocktail/${id}`}>details</Link>
                                </div>
                            </article>
                        )
                    })
                }
            </div >
        </section >
    )
}
