import React, { useState, useEffect, useRef } from "react";

import searchIcon from '../../images/search-icon.svg'

import { Wrapper, Content } from "./SearchBar.styles";

export const SearchBar = ({ setSearchTerm }) => {

    const [state, setState] = useState('');
    const initial = useRef(true);



    useEffect(() =>{

        if(initial.current){
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state)
        }, 1000)
        return () => clearTimeout(timer)
    }, [setSearchTerm, setState])

    return(
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input
                type='text'
                placeholder='Search Movie'
                onChange={event => setState(event.currentTarget.value)}
                value={state}
                />
            </Content>
        </Wrapper>
    )
}