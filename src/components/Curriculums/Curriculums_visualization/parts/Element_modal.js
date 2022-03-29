import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

const Element_modal = ({element, name}) => {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
          centered={false}
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          trigger={<Button>{name}</Button>}
        >
          <Modal.Header>{name}</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              {element}
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => setOpen(false)}>Закрыть</Button>
          </Modal.Actions>
        </Modal>
      )
}

export default Element_modal;