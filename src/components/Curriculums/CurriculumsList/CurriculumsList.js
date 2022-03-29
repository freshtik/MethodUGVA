import React from "react";
import "./CurriculumsList.css"
import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";

const CurriculumsList = (props) => {

    let curriculums = props.curriculums;
    let estimates = props.estimates;
    let disciplines = props.disciplines;
  
    let curriculumsTable = curriculums.map(el => {
      return (
        <tr key={el.id} border='1'>
          <td>{el.id}</td>
          <td>{el.name}</td>
          <td>{el.year}</td>
          <td>{el.speciality_id}</td>
          <td>{el.university_id}</td>
          <td className="table_td_icon">
            <NavLink className="table_td_navlink" exact to={`/curriculums/review/${el.id}`}>
              <Icon name="info" />
            </NavLink>
          </td>
          <td className="table_td_icon">
            <NavLink className="table_td_navlink" exact to={`/curriculums/visualization/${el.id}`}>
              <Icon name="child" />
              </NavLink>
          </td>
        </tr>
      )
    })
  
    return (
      <div>
          <table className="app_table curriculums-list_table">
            <thead>
                <tr border='1'>
                    <th>id</th>
                    <th>name</th>
                    <th>year</th>
                    <th>speciality</th>
                    <th>university</th>
                    <th>review</th>
                    <th>UGVA man</th>
                </tr>
            </thead>
            <tbody>
                {curriculumsTable}  
            </tbody>
          </table> 
      </div>
    );
  }

  export default CurriculumsList;