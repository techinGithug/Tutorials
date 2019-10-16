import React, { Component } from 'react';
import { Header, Modal } from 'semantic-ui-react';

class ModalEditUser extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {

    }
  }
  render() {
    return (
      <Modal trigger={<i className="eye icon cursorPointer"></i>}> {/*<Button>Show Modal</Button>*/}
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your e-mail
              address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalEditUser

// const ModalEditUser = () => (
//   <Modal trigger={<i className="eye icon cursorPointer"></i>}> {/*<Button>Show Modal</Button>*/}
//     <Modal.Header>Select a Photo</Modal.Header>
//     <Modal.Content image>
//       <Modal.Description>
//         <Header>Default Profile Image</Header>
//         <p>
//           We've found the following gravatar image associated with your e-mail
//           address.
//         </p>
//         <p>Is it okay to use this photo?</p>
//       </Modal.Description>
//     </Modal.Content>
//   </Modal>
// )

// export default ModalEditUser