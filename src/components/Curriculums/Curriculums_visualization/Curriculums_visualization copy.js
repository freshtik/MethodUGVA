// import "./Curriculums_visualization.css"
import React from 'react'


import Curriculums_visualization_static_information from "./parts/Curriculums_visualization_static_information";

import UGVA_man from "../../common/UGVA-man/UGVA-man";

import choiseFragmentForColors from "../common/common_values/choiseNeedColor";
import tableValuesGroupsSkills from './parts/tableValuesGroupsSkills';
import Hidden_content from '../common/Hidden_content';


class Curriculums_visualization extends React.Component {
    state = {
        newProportionsUGVA: {...this.props.proportionsUGVA},
        newColorsUGVA: {...this.props.colorsUGVA},
        showZeroFragments: false,
        saveValueForShowZeroFragments: {}
    }

    handleProportionsChange = (param, e) => {
        this.setState(prevState => ({
           newProportionsUGVA:  { ...prevState.newProportionsUGVA,
                                [param]: e.target.value }
        }))
    }

    handleColorChange = (color, e) => {
        this.setState(prevState => ({
            newColorsUGVA:  { ...prevState.newColorsUGVA,
                            [color]: e.target.value }
        }))
    }

    render() {
        const {valuesGroupsSkills, id, curriculums, disciplines, skills, estimates, max, min} = this.props;
        
        let bodyTableValuesGroupsSkills = valuesGroupsSkills.map(el => {
            const estimate = Math.ceil((el.estimate)*100)/100;
            const color = choiseFragmentForColors(el.fragment);
            return (
                <tr>
                    <td>{el.name}</td>
                    <td>{estimate}</td>
                    <td>{el.rus_fragment}</td>
                    <td><input type='color' value={this.state.newColorsUGVA[color]}
                                            onChange={this.handleColorChange.bind(this, color)}/>
                    </td>
                </tr>
            )
        })
 
         let changeSmileCoef = () => {
            return (
                <input  type='number' value={this.state.newProportionsUGVA.smile_coef}
                        min={min.smile_coef} max={max.smile_coef}
                        onChange={this.handleProportionsChange.bind(this, 'smile_coef')}/>
            )
        }

        const editingUGVATable = () => {
            return (
                <table>
                    <thead>
                        <tr>
                            <th>Часть "тела"</th>
                            <th>Ширина / Размер</th>
                            <th>Высота</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Шляпа</td>
                            <td>
                                <input type='number' value={Math.round(this.state.newProportionsUGVA.hat_size)}
                                        min={0} max={max.hat_size}
                                        onChange={this.handleProportionsChange.bind(this, "hat_size")}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Голова</td>
                            <td>
                                <input type='number' value={Math.round(this.state.newProportionsUGVA.head_radius)}
                                        min={0} max={max.head_radius}
                                        onChange={this.handleProportionsChange.bind(this, "head_radius")}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Правое плечо</td>
                            <td>
                                <input type='number' value={Math.round(this.state.newProportionsUGVA.shoulder_right_width)}
                                        min={0} max={max.shoulder_right_width}
                                        onChange={this.handleProportionsChange.bind(this, "shoulder_right_width")}/>
                            </td>
                            <td>
                                <input type='number' value={Math.round(this.state.newProportionsUGVA.arm_right_height)}
                                        min={0} max={max.arm_right_height}
                                        onChange={this.handleProportionsChange.bind(this, "arm_right_height")}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Правое предплечье</td>
                            <td>
                                <input type='number' value={Math.round(this.state.newProportionsUGVA.forearm_right_width)}
                                        min={0} max={max.forearm_right_width}
                                        onChange={this.handleProportionsChange.bind(this, "forearm_right_width")}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Левое плечо</td>
                            <td>
                                <input type='number' value={Math.round(this.state.newProportionsUGVA.shoulder_left_width)}
                                        min={0} max={max.shoulder_left_width}
                                        onChange={this.handleProportionsChange.bind(this, "shoulder_left_width")}/>
                            </td>
                            <td>
                                <input type='number' value={Math.round(this.state.newProportionsUGVA.arm_left_height)}
                                        min={0} max={max.arm_left_height}
                                        onChange={this.handleProportionsChange.bind(this, "arm_left_height")}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Левое предплечье</td>
                            <td>
                                <input type='number' value={Math.round(this.state.newProportionsUGVA.forearm_left_width)}
                                        min={0} max={max.forearm_left_width}
                                        onChange={this.handleProportionsChange.bind(this, "forearm_left_width")}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Туловище 1</td>
                            <td>
                                <input type='number' value={Math.round(this.state.newProportionsUGVA.thorax_width)}
                                        min={0} max={max.thorax_width}
                                        onChange={this.handleProportionsChange.bind(this, "thorax_width")}/>
                            </td>
                            <td>
                                <input type='number' value={Math.round(this.state.newProportionsUGVA.thorax_height)}
                                        min={0} max={max.thorax_height}
                                        onChange={this.handleProportionsChange.bind(this, "thorax_height")}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Туловище 2</td>
                            <td>
                                <input type='number' value={Math.round(this.state.newProportionsUGVA.abdomen_width)}
                                        min={0} max={max.abdomen_width}
                                        onChange={this.handleProportionsChange.bind(this, "abdomen_width")}/>
                            </td>
                            <td>
                                <input type='number' value={Math.round(this.state.newProportionsUGVA.abdomen_height)}
                                        min={0} max={max.abdomen_height}
                                        onChange={this.handleProportionsChange.bind(this, "abdomen_height")}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Таз 1 уровня</td>
                            <td>
                                <input type='number' value={Math.round(this.state.newProportionsUGVA.pelvis_l1_width)}
                                        min={0} max={max.pelvis_l1_width}
                                        onChange={this.handleProportionsChange.bind(this, "pelvis_l1_width")}/>
                            </td>
                            <td>
                                <input type='number' value={Math.round(this.state.newProportionsUGVA.pelvis_l1_height)}
                                        min={0} max={max.pelvis_l1_height}
                                        onChange={this.handleProportionsChange.bind(this, "pelvis_l1_height")}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Таз 2 уровня</td>
                            <td>
                                <input type='number' value={Math.round(this.state.newProportionsUGVA.pelvis_l2_width)}
                                        min={0} max={max.pelvis_l2_width}
                                        onChange={this.handleProportionsChange.bind(this, "pelvis_l2_width")}/>
                            </td>
                            <td>
                                <input type='number' value={Math.round(this.state.newProportionsUGVA.pelvis_l2_height)}
                                        min={0} max={max.pelvis_l2_height}
                                        onChange={this.handleProportionsChange.bind(this, "pelvis_l2_height")}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Нога 1</td>
                            <td>
                                <input type='number' value={Math.round(this.state.newProportionsUGVA.leg1_width)}
                                        min={0} max={max.leg1_width}
                                        onChange={this.handleProportionsChange.bind(this, "leg1_width")}/>
                            </td>
                            <td>
                                <input type='number' value={Math.round(this.state.newProportionsUGVA.leg1_height)}
                                        min={0} max={max.leg1_height}
                                        onChange={this.handleProportionsChange.bind(this, "leg1_height")}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Нога 2</td>
                            <td>
                                <input type='number' value={Math.round(this.state.newProportionsUGVA.leg2_width)}
                                        min={0} max={max.leg2_width}
                                        onChange={this.handleProportionsChange.bind(this, "leg2_width")}/>
                            </td>
                            <td>
                                <input type='number' value={Math.round(this.state.newProportionsUGVA.leg2_height)}
                                        min={0} max={max.leg2_height}
                                        onChange={this.handleProportionsChange.bind(this, "leg2_height")}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Нога 3</td>
                            <td>
                                <input type='number' value={Math.round(this.state.newProportionsUGVA.leg3_width)}
                                        min={0} max={max.leg3_width}
                                        onChange={this.handleProportionsChange.bind(this, "leg3_width")}/>
                            </td>
                            <td>
                                <input type='number' value={Math.round(this.state.newProportionsUGVA.leg3_height)}
                                        min={0} max={max.leg3_height}
                                        onChange={this.handleProportionsChange.bind(this, "leg3_height")}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            )
        }

    
        return (
            <div className="app_content_visualization visualization_container">
                <div className="visualization_content_left">
                    <Curriculums_visualization_static_information valuesGroupsSkills={valuesGroupsSkills}
                                                    id={id} curriculums={curriculums} disciplines={disciplines}
                                                    skills={skills} estimates={estimates} />
                    <div>
                        <p>Отредактировать "улыбку": </p> 
                        <input type='number' value={this.state.newProportionsUGVA.smile_coef}
                                            min={min.smile_coef} max={max.smile_coef}
                                            onChange={this.handleProportionsChange.bind(this, 'smile_coef')}/>
                    </div>
                    <div>
                        Показать нулевые элементы
                    </div>

                    <div>
                        <Hidden_content content={tableValuesGroupsSkills(bodyTableValuesGroupsSkills)}
                        name='Вычисленные данные по методу UGVA' />
                    </div>

                    <div>
                        <Hidden_content content={editingUGVATable()}
                                name='Таблица редактирования' />
                    </div>
                </div>

                <div className='visualization_content_right'>
                    <UGVA_man proportionsUGVA={this.state.newProportionsUGVA} 
                                colorsUGVA={this.state.newColorsUGVA} max={max}
                    />
                </div>

            </div>
        )
    }
}

export default Curriculums_visualization;