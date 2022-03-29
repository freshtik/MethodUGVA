import {Grid, Table, Form, Input, Button} from 'semantic-ui-react'

const tableValuesGroupsSkills = (tableBody) => {
    
    return(
        <Table basic='very'>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Group skills</Table.HeaderCell>
                    <Table.HeaderCell>Estimate</Table.HeaderCell>
                    <Table.HeaderCell>Fragment</Table.HeaderCell>
                    <Table.HeaderCell>Color</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {tableBody}
            </Table.Body>
        </Table>
    )
}

export default tableValuesGroupsSkills;