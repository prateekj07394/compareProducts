import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class AttributeModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAttributes:this.props.selectedAttributes,
            error:"",
            selectAll:false
        }
    }
    checkIfChecked=(e)=> {
        let selectedAttributes = [...this.state.selectedAttributes];
        if (e.target.checked) {
            let selectedAttribute = e.target.attributes.id.value;
            selectedAttributes.push(selectedAttribute);
        } else {
            let selectedAttribute = e.target.attributes.id.value;

            const index = selectedAttributes.indexOf(selectedAttribute);
            if (index > -1) {
                selectedAttributes.splice(index, 1);
            }
        }
        this.setState({ selectedAttributes: selectedAttributes,error:"" });
    }
    renderAttributes() {
        
        
        return this.props.attributes.map((attribute,index) => {
            if(this.state.selectAll){
                
                return (
                    <Form.Check
                    key={index}
                    type="checkbox"
                    label={attribute}
                    name="attributes"
                    id={attribute}
                    checked={true}
                    defaultChecked={true}
                />
                )
            }
            if (this.state.selectedAttributes.includes(attribute)) {
              
                
                return (
                    <Form.Check
                    key={index}
                    type="checkbox"
                    label={attribute}
                    name="attributes"
                    id={attribute}
                    defaultChecked={true}
                    onClick={this.checkIfChecked}
                />
                )
            }
         
            
            return (
                <Form.Check
                    type="checkbox"
                    key={index}
                    label={attribute}
                    name="attributes"
                    id={attribute}
                    defaultChecked={false}
                    onClick={this.checkIfChecked}
                />
            )
        })
    }
    setSelectedAttributes(){
        if(this.state.selectedAttributes.length===0){
            this.setState({error:"Please select an attribute"});
        }else{
            this.props.setSelectedAttributes(this.state.selectedAttributes);
            this.props.onHide();
        }
    }
    selectAll=(e)=>{
        if(e.target.checked){
            
            this.setState({selectAll:true,selectedAttributes:this.props.attributes},()=>{
                console.log(this.state.selectedAttributes);
                
            });
        }else{
            this.setState({selectAll:false,selectedAttributes:this.props.selectedAttributes});
        }
    }
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title><i className="fas fa-pencil"></i>Edit Attributes</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={12}>
                                <h6>Select Attributes to add/remove</h6>
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Check
                    type="checkbox"
                    label={"Select All"}
                    name="attributes"
                    id={"selectAll"}
                    onClick={this.selectAll}
                />
                                {this.renderAttributes()}
                            </Col>
                        </Form.Group>
                    </Form>
                    <span className="error">{this.state.error}</span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onHide}>
                        Close
          </Button>
                    <Button variant="primary" onClick={(e)=>{this.setSelectedAttributes()}}>
                        Save Changes
          </Button>
       
                </Modal.Footer>
            </Modal>
        );
    }
}

export default AttributeModal;