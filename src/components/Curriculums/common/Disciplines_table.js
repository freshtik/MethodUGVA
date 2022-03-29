import React from 'react';
import { Icon } from 'semantic-ui-react';

// import '../Curriculums_review.css';

const Disciplines_table = ({ disciplinesOurCurriculum }) => {
    let totalHours = 0;
    
    const disciplineTable = disciplinesOurCurriculum.map( el => {
        totalHours += el.audit_hours;
        return(
            <tr key={el.id} border='1'>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.part_id}</td>
                <td>{el.control_id}</td>
                <td>{el.audit_hours}</td>
            </tr>
        )
    })

    return (
        <table className="app_table curriculums-review_table">
            <thead>
                <tr border='1'>
                    <th>id</th>
                    <th>name</th>
                    <th>Часть</th>
                    <th>форма контроля</th>
                    <th>audit_hours</th>
                </tr>
            </thead>
            <tbody>
                {disciplineTable}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="4">Итого</td>
                    <td>{totalHours}</td>
                </tr>
            </tfoot>
        </table>
    )
}

export default Disciplines_table;