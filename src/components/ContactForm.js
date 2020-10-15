import React from 'react';
import { Button,Modal } from 'react-bootstrap'

class ContactForm extends React.Component {
    constructor(props){     
        super(props);
        this.state = {
            showHide : false,
            name: '',
            email: '',
            message: '',
            submitted: false,
            submittedContent: 'Submit',
            buttonState: true
        }
    }  

    handleModalShowHide() { 
        this.setState({ showHide: !this.state.showHide })
    }
    submitClicked(){
     this.setState({submitted: true});
     this.setState({buttonState: false});
     this.refs.btn.setAttribute("disabled", "disabled");
     this.refs.btn.setAttribute("class", "disabled btn btn-primary");
     this.setState({submittedContent: '<img src="https://benstephan.com/spinner.gif" width="18" alt="Loading" /> Submitting'})
    }

    render(){
        return(
            <div>
                <Button variant="primary" onClick={() => this.handleModalShowHide()}>
                    Send me a Message
                </Button>
                <Modal show={this.state.showHide} centered backdrop="relative">
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title>Send me a Message</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                        </div>
                        <button ref="btn" type="submit" className="btn btn-primary" onClick={this.submitClicked.bind(this)} dangerouslySetInnerHTML={{__html: this.state.submittedContent}}></button>
                        
                    </form>
                    </Modal.Body>
                  
                </Modal>
            </div>
        )
    }
    
    onNameChange(event) {
        this.setState({name: event.target.value})
      }
    
      onEmailChange(event) {
        this.setState({email: event.target.value})
      }
    
      onMessageChange(event) {
        this.setState({message: event.target.value})
      }
    
      handleSubmit(e) {
        e.preventDefault();
        
        fetch('https://benstephan.com/mailer.php', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          }).then(
          (response) => (response.json())
            ).then((response)=> {
          if (response.status === 'success') {
            this.setState({submittedContent: 'Submitted Successfully'});
            this.resetForm()
          } else if(response.status === 'fail') {
            this.setState({submittedContent: 'Error. Please try later.'});
          }
        })
      }

}

export default ContactForm;
