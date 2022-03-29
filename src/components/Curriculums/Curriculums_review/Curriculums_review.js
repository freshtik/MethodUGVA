import React from "react";
import { useParams } from "react-router-dom";

import './Curriculums_review.css';

import {Disciplines_table, Estimates_table} from "./parts";
import {ourCurriculumEmpty, disciplinesOurCurriculumEmpty} from "../common/common_values";
import GeneralInformationAboutCurriculum from "../common/GeneralInformationAboutCurriculum";
import {Disciplines_section, Estimates_section} from "./parts";

const Curriculums_review = ({curriculums, disciplines, skills, estimates}) => {
    
    const { id } = useParams();

    const ourCurriculum = ourCurriculumEmpty(id, curriculums);
    const disciplinesOurCurriculum = disciplinesOurCurriculumEmpty(id, disciplines);
    
    return (
        <div className="app_content_table">
            <h2 className="header">Информация об учебном плане "{ourCurriculum.name}"</h2>


            <GeneralInformationAboutCurriculum ourCurriculum={ourCurriculum} />

            <Disciplines_section disciplinesOurCurriculum={disciplinesOurCurriculum} />

            <Estimates_section disciplinesOurCurriculum={disciplinesOurCurriculum} 
                                 skills={skills} estimates={estimates} />
        </div>
    )
}

export default Curriculums_review;