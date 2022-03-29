import { Route, Routes } from "react-router-dom";

import AboutUGVA from '../AboutUGVA/About_UGVA'
import Curriculums from '../Curriculums/Curriculums';
import Visualization from '../Visualization/Visualization';

import Curriculums_create from '../Curriculums/Curriculums_create/Curriculums_create';
import Curriculums_review from "../Curriculums/Curriculums_review/Curriculums_review";
import Curriculums_visualization from "../Curriculums/Curriculums_visualization/Above_curriculums_visualization";


const PageLink = (props) => {
    const disciplines = props.disciplines;
    const estimates = props.estimates;
    const curriculums = props.curriculums;
    const dataForVisualization = props.dataForVisualization;
    const skills = props.skills;
    const {groupSkills, skillsLinkGroupSkills} = props

    return(
    <Routes>
        {/* Главное меню */}
        <Route exact path="/" element={ <AboutUGVA /> } />
        <Route exact path="/aboutugva" element={ <AboutUGVA /> } />
        <Route exact path="/curriculums" element={<Curriculums disciplines = {disciplines} 
                                                                estimates = {estimates} curriculums = {curriculums}/>} />
        <Route exact path="/freevisualization" element={ <Visualization {...dataForVisualization}/> } />

        {/* Curriculums */}
        <Route exact path="/curriculums/create" element={<Curriculums_create/>} />
        {/* <Route exact path="/curriculums/create/disciplines" element={<Curriculums_create/>} /> */}
        <Route exact path="/curriculums/review/:id" element={<Curriculums_review disciplines={disciplines} skills={skills}
                                                                estimates={estimates} curriculums={curriculums}/>} />
        <Route exact path="/curriculums/visualization/:id" element={<Curriculums_visualization disciplines={disciplines} skills={skills}
                                                                estimates={estimates} curriculums={curriculums} groupSkills={groupSkills} 
                                                                skillsLinkGroupSkills={skillsLinkGroupSkills} {...dataForVisualization}
                                                                />} />


    </Routes>)
}

export default PageLink;