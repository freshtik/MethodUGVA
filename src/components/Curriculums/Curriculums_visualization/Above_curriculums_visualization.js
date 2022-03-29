import "./Curriculums_visualization.css"
import { useParams } from "react-router-dom";
import Curriculums_visualization from "./Curriculums_visualization";

import { disciplinesOurCurriculumEmpty } from "../common/common_values";

const Above_curriculums_visualization = (props) => {

    const { id } = useParams();

    const { skills, estimates, curriculums, 
            disciplines, groupSkills, skillsLinkGroupSkills } = props;

    const disciplinesOurCurriculum = disciplinesOurCurriculumEmpty(id, disciplines);

    let totalHoursDisciplinesOurCurriculum = 0;
    
    const ugvaData = props.proportions.Zero;
    const max = props.proportions.Maximum  
    const min = props.proportions.Minimum  
    const colors = props.colors

    disciplinesOurCurriculum.forEach(el => {
        totalHoursDisciplinesOurCurriculum += el.audit_hours;
    })

    //Расчет оценок базовой и вариативной частей с учетом вида оценивания и времени
    const sumEstimates = skills.map(skill => {
        let sum_base = 0;
        let sum_variable = 0;
        let sum_calc_base = 0;
        let sum_calc_variable = 0;

        disciplinesOurCurriculum.forEach(el =>{
            const koef_exam = 1;
            const koef_offset = 0.75;
            estimates.forEach(est => {
                if (est.discipline_id == el.id && est.skill_id == skill.id) {
                    const hoursProcent = 100 * el.audit_hours / totalHoursDisciplinesOurCurriculum;
                    const interimEstimate = est.estimate * hoursProcent;

                    if (el.part_id == 0) {
                        sum_base += est.estimate;
                        sum_calc_base += (el.control_id == 0)   ? interimEstimate * koef_exam 
                                                                : interimEstimate * koef_offset;
                    }
                    else {
                        sum_variable += est.estimate;
                        sum_calc_variable += (el.control_id == 0)   ? interimEstimate * koef_exam 
                                                                    : interimEstimate * koef_offset;
                    }
                }
            })
        })
        return (
            {
                skill_id: skill.id,
                sum_base: sum_base,
                sum_variable: sum_variable,
                sum_calc_base: sum_calc_base,
                sum_calc_variable: sum_calc_variable
            }     
        )
    })

    let totalSumEstimates = 0;
    sumEstimates.forEach (el => totalSumEstimates += el.sum_calc_base + el.sum_calc_variable);

    //Рассчитываем данные для отрисовки
    let calcData =  sumEstimates.map(el => {
        const koef_variable = 0.5;
        const base = el.sum_calc_base;
        const variable = el.sum_calc_variable * koef_variable;
        return(
            {
                skill_id: el.skill_id,
                base: base,
                variable: variable,
                sum: base + variable
            }
        )
    })

//Распределенные по группам ПУ и рассчитанные данные
    const calcDataForVisualization = groupSkills.map (gr => {
        let estimate = 0;

        skillsLinkGroupSkills.forEach(el => {
            if(gr.id == el.groupSkills_id) {
                calcData.forEach(elData => {
                    if(el.skills_id == elData.skill_id) {
                        estimate += (gr.part_id == 0) ? elData.base : elData.variable;
                    }
                })
            }
        })
        return ({
            id_groupSkills: gr.id,
            fragment: gr.fragment,
            name: gr.name,
            estimate: estimate,
            rus_fragment: gr.rus_fragment
        })
    })
    

    //Присваиваем рассчитанные размеры фрагментам образа
    calcDataForVisualization.forEach(gr => {
        switch (gr.fragment) {
            case "shoulder_right":
                ugvaData.shoulder_right_width += gr.estimate;
                break;
            
            case "forearm_right":
                 ugvaData.forearm_right_width += gr.estimate;
                break;
                            
            case "thorax":
                 ugvaData.thorax_width += gr.estimate;
                //  ugvaData.thorax_height += gr.estimate;
            break;
                        
            case "abdomen":
                 ugvaData.abdomen_width += gr.estimate;
                //  ugvaData.abdomen_height += gr.estimate;
                break;
                            
            case "shoulder_left":
                 ugvaData.shoulder_left_width += gr.estimate;
            break;
                        
            case "forearm_left":
                 ugvaData.forearm_left_width += gr.estimate;
                break;
                            
            case "hat":
                ugvaData.hat_size += gr.estimate;
            break;
                        
            case "pelvis_l1":
                 ugvaData.pelvis_l1_width += gr.estimate;
                 ugvaData.pelvis_l1_height += gr.estimate;
                break;
          
            default:
                alert("Хммм, возникла проблема, у программиста руки не из того места:( Просим понять и простить");
                break;
        }
    })

    return (              
                <Curriculums_visualization  valuesGroupsSkills={calcDataForVisualization}
                                            id={id} curriculums={curriculums} disciplines={disciplines}
                                            skills={skills} estimates={estimates} proportionsUGVA={ugvaData} 
                                            colorsUGVA={colors} max={max} min={min}
                />
    )
}

export default Above_curriculums_visualization; 