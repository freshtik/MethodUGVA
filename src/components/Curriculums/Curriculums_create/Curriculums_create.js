import React from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react'

class Curriculums_create extends React.Component {
    render(){
        return (
            <div className="app_content_text">
                <h1>Создание УП</h1>
                <Form>
                    <Form.Field>
                        <label>Наименование</label>
                        <input placeholder='Наименование' />
                    </Form.Field>
                    <Form.Field>
                        <label>Полное наименование</label>
                        <input placeholder='Полное наименование' />
                    </Form.Field>
                    <Form.Field>
                        <label>Об учебном плане</label>
                        <input placeholder='Об учебном плане' />
                    </Form.Field>
                    <Form.Field>
                        <label>Год начала обучения</label>
                        <input placeholder='Год начала обучения' />
                    </Form.Field>
                    <Form.Field>
                        <label>Специализация</label>
                        <input placeholder='Специализация' />
                    </Form.Field>
                    <Form.Field>
                        <label>Ступень обучения</label>
                        <input placeholder='Ступень обучения' />
                    </Form.Field>
                    <Form.Field>
                        <label>Университет</label>
                        <input placeholder='Университет' />
                    </Form.Field>
                    <Button type='submit'>Создать</Button>
                </Form>
            </div>
            
        )
    }
}

export default Curriculums_create;
