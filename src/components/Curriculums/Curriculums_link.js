import React from 'react'
import {Routes, Route, BrowserRouter, NavLink} from 'react-router-dom'

import './Curriculums.css'

import Curriculums from './Curriculums'
import Curriculums_create from './Curriculums_create/Curriculums_create'

const Curriculums_link = (props) => {
    
    const disciplines = props.disciplines;
    const estimates = props.estimates;
    const curriculums = props.curriculums;

    return (
        <div>
            hi
            <NavLink
                                    exact
                                    to="/create"
                                    className="ui button basic compact"
                                    style={{ marginBottom: "16px" }} >Назад</NavLink>


            <Routes>
                <Route exact path="/" element={<Curriculums disciplines = {disciplines} 
                                                                    estimates = {estimates} curriculums = {curriculums}/>} />
            </Routes>
        </div>
    )
}

export default Curriculums_link;

