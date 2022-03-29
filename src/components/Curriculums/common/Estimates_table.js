import React from 'react';
import { Icon } from 'semantic-ui-react';

const Estimates_table = ({ skills, estimates, disciplinesOurCurriculum }) => {

        const skillsHeader = skills.map(skill => {
            return <th key={skill.id}>{skill.name}</th>
        })

        const estimatesTable = disciplinesOurCurriculum.map (el => {
            const disciplineEstimates = skills.map(skill => {
                let estimate = 0;
                estimates.forEach(est => {
                    if (est.discipline_id == el.id && est.skill_id == skill.id) estimate = est.estimate;
                })
                return <td key={skill.id}>{estimate}</td>
            })

            return (
                <tr key={el.id} border='1'>
                    <td>{el.name}</td>
                    {disciplineEstimates}
                </tr>
            )
        })

        const sumEstimates = skills.map(skill => {
            let sum = 0;
            disciplinesOurCurriculum.forEach(el =>{
                estimates.forEach(est => {
                    if (est.discipline_id == el.id && est.skill_id == skill.id) sum += est.estimate;
                })
            })
            return <td key={skill.id}>{sum}</td>
        })
    
        return (
                    <table className="app_table app_table_small curriculums-review_table">
                        <thead>
                            <tr>
                                <th>Дисциплина</th>
                                {skillsHeader}
                            </tr>
                        </thead>
                        <tbody>
                            {estimatesTable}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Сумма</td>
                                {sumEstimates}
                            </tr>
                        </tfoot>
                    </table>
        )
}

export default Estimates_table;