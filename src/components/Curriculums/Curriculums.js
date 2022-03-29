import { Button, Input, Icon } from 'semantic-ui-react';
import {BrowserRouter, Switch, Route, Link, NavLink} from 'react-router-dom';

import "./Curriculums.css";

import CurriculumsList from "./CurriculumsList/CurriculumsList";

function Curriculums (props) {
    return (
            <div className='curriculums_content app_content_text'>
                <h2 className='header'>Список учебных планов</h2>
                <div  className='curriculums_btn'>
                    <Button>
                        <a href='/curriculums/create'>Добавить УП</a>
                    </Button>
                </div> 
                {/* <div className='curriculums_placeholder'>
                    <Input type='text' className='curriculums_placeholder_input' placeholder='Search...' action>
                        <input />
                        <Button type='submit'>Поиск</Button>
                    </Input>
                </div> */}
                <div className='curriculums_table'>
                    <CurriculumsList curriculums = {props.curriculums} 
                    disciplines = {props.disciplines}
                    estimates = {props.estimates} />
                </div>
            </div>
    )
}

export default Curriculums;