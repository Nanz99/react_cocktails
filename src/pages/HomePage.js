import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchTerm from '../components/SearchTerm'

export default function HomePage() {
    return (
        <>
            <SearchTerm />
            <CocktailList />
        </>
    )
}
