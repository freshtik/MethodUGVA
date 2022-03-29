// import "./Curriculums_visualization.css"

import {ourCurriculumEmpty, disciplinesOurCurriculumEmpty} from "../../common/common_values";
import GeneralInformationAboutCurriculum from "../../common/GeneralInformationAboutCurriculum";

import Estimates_table from "../../common/Estimates_table";
import Disciplines_table from "../../common/Disciplines_table";

import Element_modal from "../parts/Element_modal";
import Hidden_content from "../../common/Hidden_content";

const Curriculums_visualization_static_information = (props) => {

    const {valuesGroupsSkills, id, curriculums, disciplines, skills, estimates } = props;


    const ourCurriculum = ourCurriculumEmpty(id, curriculums);
    const disciplinesOurCurriculum = disciplinesOurCurriculumEmpty(id, disciplines);

    let tableValuesGroupsSkills = valuesGroupsSkills.map(el => {
        const estimate = Math.ceil((el.estimate)*100)/100;

        return (
            <tr>
                <td>{el.name}</td>
                <td>{estimate}</td>
                <td>{el.fragment}</td>
                <td>Цвет</td>
            </tr>
        )
    })



    return (
        <div>
            <h2 className="header">Информация об учебном плане "{ourCurriculum.name}"</h2>

            <div>
                <Hidden_content content={<GeneralInformationAboutCurriculum ourCurriculum={ourCurriculum} />}
                                name="Общая информация"
                />

                <div className="Curriculum-visualization_modal-button" >
                    <Element_modal  element={ <Disciplines_table disciplinesOurCurriculum={disciplinesOurCurriculum}/>} 
                                    name="Перечень дисциплин УП" />

                    <Element_modal  element={<Estimates_table    disciplinesOurCurriculum={disciplinesOurCurriculum}
                                            estimates={estimates} skills={skills} />} 
                                    name="Перечень оценок ПУ" />
                </div>
            </div>
        </div>
    )
}

export default Curriculums_visualization_static_information;