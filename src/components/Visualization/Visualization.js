import React from 'react'
import {Grid, Table, Form, Input, Button} from 'semantic-ui-react'

import './Visualization.css' 

import UGVA_man from '../common/UGVA-man/UGVA-man'

class Visualization extends React.Component {

    state = {
        proportionsUGVA: {...this.props.proportions.Average},
        colorsUGVA: {...this.props.colors},
    }

    handleSizeChangeClick = (size) => {
        this.setState(({
            proportionsUGVA: {...this.props.proportions[size]}
        }))
    }

    handleColorDel() {
        this.setState(({
            colorsUGVA: {...this.props.colors}
        }))
    }

    handleProportionsChange = (param, e) => {
        this.setState(prevState => ({
            proportionsUGVA:
                {
                    ...prevState.proportionsUGVA,
                    [param]: e.target.value
                }
        }))
    }

    handleColorChange = (color, e) => {
        this.setState(prevState => ({
            colorsUGVA:
                {
                    ...prevState.colorsUGVA,
                    [color]: e.target.value
                }
        }))
    }

    handleColorsThreeChange = (color1, color2, color3, e) => {
        this.setState(prevState => ({
            colorsUGVA:
                {
                    ...prevState.colorsUGVA,
                    [color1]: e.target.value,
                    [color2]: e.target.value,
                    [color3]: e.target.value,
                }
        }))
    }

    render() {
        const min = {...this.props.proportions.Minimum}
        const max = {...this.props.proportions.Maximum}
        console.log(this.props)

        // Выводим все на экран
        return (
            <div className='app_content_visualization'>
                <h2 className='header'>Свободная визуализация</h2>
                <div className='visualization_container'>
                    <div className='visualization_content_left'>
                        <Form widths='equal'>
                            <Form.Group widths='5' className='visualzation_form-input'>
                                <Form.Input label='Шляпа' type='number'
                                            value={this.state.proportionsUGVA.hat_size}
                                            min={min.hat_size} max={max.hat_size}
                                            onChange={this.handleProportionsChange.bind(this, 'hat_size')}/>
                                <Form.Field>
                                    <label>Цвет</label>
                                    <input type='color' value={this.state.colorsUGVA.hat_color}
                                        onChange={this.handleColorChange.bind(this, 'hat_color')}/>
                                </Form.Field>

                                <Form.Input label='Голова' type='number'
                                            value={this.state.proportionsUGVA.head_radius}
                                            min={min.head_radius} max={max.head_radius}
                                            onChange={this.handleProportionsChange.bind(this, 'head_radius')}/>

                                <Form.Field>
                                    <label>Цвет</label>
                                    <input type='color' value={this.state.colorsUGVA.head_color}
                                        onChange={this.handleColorChange.bind(this, 'head_color')}/>
                                </Form.Field>

                                <Form.Input label='Улыбка' type='number'
                                            value={this.state.proportionsUGVA.smile_coef}
                                            min={min.smile_coef} max={max.smile_coef}
                                            onChange={this.handleProportionsChange.bind(this, 'smile_coef')}/>
                            </Form.Group>
                        </Form>
                        
                        <div className='visualization_table'>
                            <Table basic='very'>
                                <Table.Header>
                                    <Table.Row textAlign='center'>
                                        <Table.HeaderCell>Часть "тела"</Table.HeaderCell>
                                        <Table.HeaderCell>Ширина</Table.HeaderCell>
                                        <Table.HeaderCell>Высота</Table.HeaderCell>
                                        <Table.HeaderCell>Цвет</Table.HeaderCell>
                                        <Table.HeaderCell>Общий цвет</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>Правое плечо</Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <Input type='number'
                                                value={this.state.proportionsUGVA.shoulder_right_width}
                                                min={min.shoulder_right_width} max={max.shoulder_right_width}
                                                onChange={this.handleProportionsChange.bind(this, 'shoulder_right_width')}/>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <Input type='number'
                                                value={this.state.proportionsUGVA.arm_right_height}
                                                min={min.arm_right_height} max={max.arm_right_height}
                                                onChange={this.handleProportionsChange.bind(this, 'arm_right_height')}/>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <input type='color' value={this.state.colorsUGVA.shoulder_right_color}
                                                onChange={this.handleColorChange.bind(this, 'shoulder_right_color')}/>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <input type='color' value={this.state.colorsUGVA.arm_right_color}
                                                onChange={this.handleColorsThreeChange.bind(this, 'forearm_right_color',
                                                    'shoulder_right_color', 'arm_right_color')}/>
                                        </Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>Правое предплечье</Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <Input type='number'
                                                value={this.state.proportionsUGVA.forearm_right_width}
                                                min={min.forearm_right_width} max={max.forearm_right_width}
                                                onChange={this.handleProportionsChange.bind(this, 'forearm_right_width')}/>
                                        </Table.Cell>
                                        <Table.Cell/>
                                        <Table.Cell textAlign='center'>
                                            <input type='color' value={this.state.colorsUGVA.forearm_right_color}
                                                onChange={this.handleColorChange.bind(this, 'forearm_right_color')}/>
                                        </Table.Cell>
                                        <Table.Cell/>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>Левое плечо</Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <Input type='number'
                                                value={this.state.proportionsUGVA.shoulder_left_width}
                                                min={min.shoulder_left_width} max={max.shoulder_left_width}
                                                onChange={this.handleProportionsChange.bind(this, 'shoulder_left_width')}/>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <Input type='number'
                                                value={this.state.proportionsUGVA.arm_left_height}
                                                min={min.arm_left_height} max={max.arm_left_height}
                                                onChange={this.handleProportionsChange.bind(this, 'arm_left_height')}/>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <input type='color' value={this.state.colorsUGVA.shoulder_left_color}
                                                onChange={this.handleColorChange.bind(this, 'shoulder_left_color')}/>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <input type='color' value={this.state.colorsUGVA.arm_left_color}
                                                onChange={this.handleColorsThreeChange.bind(this, 'forearm_left_color',
                                                    'shoulder_left_color', 'arm_left_color' )}/>
                                        </Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>Левое предплечье</Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <Input type='number'
                                                value={this.state.proportionsUGVA.forearm_left_width}
                                                min={min.forearm_left_width} max={max.forearm_left_width}
                                                onChange={this.handleProportionsChange.bind(this, 'forearm_left_width')}/>
                                        </Table.Cell>
                                        <Table.Cell/>
                                        <Table.Cell textAlign='center'>
                                            <input type='color' value={this.state.colorsUGVA.forearm_left_color}
                                                onChange={this.handleColorChange.bind(this, 'forearm_left_color')}/>
                                        </Table.Cell>
                                        <Table.Cell/>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>Туловище 1 уровень</Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <Input type='number'
                                                value={this.state.proportionsUGVA.thorax_width}
                                                min={min.thorax_width} max={max.thorax_width}
                                                onChange={this.handleProportionsChange.bind(this, 'thorax_width')}/>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <Input type='number'
                                                value={this.state.proportionsUGVA.thorax_height}
                                                min={min.thorax_height} max={max.thorax_height}
                                                onChange={this.handleProportionsChange.bind(this, 'thorax_height')}/>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <input type='color' value={this.state.colorsUGVA.thorax_color}
                                                onChange={this.handleColorChange.bind(this, 'thorax_color')}/>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <input type='color' value={this.state.colorsUGVA.body_color}
                                                onChange={this.handleColorsThreeChange.bind(this, 'thorax_color',
                                                    'abdomen_color', 'body_color')}/>
                                        </Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>Туловище 2 уровень</Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <Input type='number'
                                                value={this.state.proportionsUGVA.abdomen_width}
                                                min={min.abdomen_width} max={max.abdomen_width}
                                                onChange={this.handleProportionsChange.bind(this, 'abdomen_width')} />
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <Input type='number'
                                                value={this.state.proportionsUGVA.abdomen_height}
                                                min={min.abdomen_height} max={max.abdomen_height}
                                                onChange={this.handleProportionsChange.bind(this, 'abdomen_height')} />
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <input type='color' value={this.state.colorsUGVA.abdomen_color}
                                                onChange={this.handleColorChange.bind(this, 'abdomen_color')}/>
                                        </Table.Cell>
                                        <Table.Cell/>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>Таз 1 уровень</Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <Input type='number'
                                                value={this.state.proportionsUGVA.pelvis_l1_width}
                                                min={min.pelvis_l1_width} max={max.pelvis_l1_width}
                                                onChange={this.handleProportionsChange.bind(this, 'pelvis_l1_width')}/>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <Input type='number'
                                                value={this.state.proportionsUGVA.pelvis_l1_height}
                                                min={min.pelvis_l1_height} max={max.pelvis_l1_height}
                                                onChange={this.handleProportionsChange.bind(this, 'pelvis_l1_height')}/>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <input type='color' value={this.state.colorsUGVA.pelvis_l1_color}
                                                onChange={this.handleColorChange.bind(this, 'pelvis_l1_color')}/>
                                        </Table.Cell>
                                        <Table.Cell/>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>Таз 2 уровень</Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <Input type='number'
                                                value={this.state.proportionsUGVA.pelvis_l2_width}
                                                min={min.pelvis_l2_width} max={max.pelvis_l2_width}
                                                onChange={this.handleProportionsChange.bind(this, 'pelvis_l2_width')}/>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <Input type='number'
                                                value={this.state.proportionsUGVA.pelvis_l2_height}
                                                min={min.pelvis_l2_height} max={max.pelvis_l2_height}
                                                onChange={this.handleProportionsChange.bind(this, 'pelvis_l2_height')}/>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <input type='color' value={this.state.colorsUGVA.pelvis_l2_color}
                                                onChange={this.handleColorChange.bind(this, 'pelvis_l2_color')}/>
                                        </Table.Cell>
                                        <Table.Cell/>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>Нога 1</Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <Input type='number'
                                                value={this.state.proportionsUGVA.leg1_width}
                                                min={min.leg1_width} max={max.leg1_width}
                                                onChange={this.handleProportionsChange.bind(this, 'leg1_width')}/>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <Input type='number'
                                                value={this.state.proportionsUGVA.leg1_height}
                                                min={min.leg1_height} max={max.leg1_height}
                                                onChange={this.handleProportionsChange.bind(this, 'leg1_height')}/>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <input type='color' value={this.state.colorsUGVA.leg1_color}
                                                onChange={this.handleColorChange.bind(this, 'leg1_color')}/>
                                        </Table.Cell>
                                        <Table.Cell/>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>Нога 2</Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <Input type='number'
                                                value={this.state.proportionsUGVA.leg2_width}
                                                min={min.leg2_width} max={max.leg2_width}
                                                onChange={this.handleProportionsChange.bind(this, 'leg2_width')}/>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <Input type='number'
                                                value={this.state.proportionsUGVA.leg2_height}
                                                min={min.leg2_height} max={max.leg2_height}
                                                onChange={this.handleProportionsChange.bind(this, 'leg2_height')}/>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <input type='color' value={this.state.colorsUGVA.leg2_color}
                                                onChange={this.handleColorChange.bind(this, 'leg2_color')}/>
                                        </Table.Cell>
                                        <Table.Cell/>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>Нога 3</Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <Input type='number'
                                                value={this.state.proportionsUGVA.leg3_width}
                                                min={min.leg3_width} max={max.leg3_width}
                                                onChange={this.handleProportionsChange.bind(this, 'leg3_width')}/>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <Input type='number'
                                                value={this.state.proportionsUGVA.leg3_height}
                                                min={min.leg3_height} max={max.leg3_height}
                                                onChange={this.handleProportionsChange.bind(this, 'leg3_height')}/>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <input type='color' value={this.state.colorsUGVA.leg3_color}
                                                onChange={this.handleColorChange.bind(this, 'leg3_color')}/>
                                        </Table.Cell>
                                        <Table.Cell/>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </div>
                    </div>

                    <div className='visualization_content_right'>
                        <Button.Group attached='top' color="blue">
                            <Button onClick={this.handleSizeChangeClick.bind(this, 'Minimum')}>Минимум</Button>
                            <Button onClick={this.handleSizeChangeClick.bind(this, 'Average')}>По умолчанию</Button>
                            <Button onClick={this.handleSizeChangeClick.bind(this, 'Maximum')}>Максимум</Button>
                            <Button onClick={this.handleColorDel.bind(this)}>Сброс цвета</Button>
                        </Button.Group>

                        <UGVA_man proportionsUGVA={this.state.proportionsUGVA} colorsUGVA={this.state.colorsUGVA}
                                max={this.props.proportions.Maximum}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Visualization;
