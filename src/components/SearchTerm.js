
import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'

export default function SearchTerm() {
    const searchValue = useRef('')
    const { setSearchTerm } = useGlobalContext()
    useEffect(() => {
        searchValue.current.focus()
    })
    return (
        <section className="section search">
            <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-control">
                    <label htmlFor="name">search your favorite cocktail</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        ref={searchValue}
                        onChange={() => setSearchTerm(searchValue.current.value)}
                    />
                </div>
            </form>
        </section>

    )
}
