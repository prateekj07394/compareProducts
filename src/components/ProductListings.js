import React from 'react';
import Card from './Card';
import Table from './Tables';
import AttributeModal from './Modal'
class ProductListing extends React.Component {
    state={
        hoveredProduct:"",
        selectedProduct:[],
        attributes:["Price","Colors","Condition","Vendors"],
        selectedAttributes:["Price","Colors","Condition"],
        displayTable:false,
        displayModal:false
    }
    setHoveredProduct=(product)=>{
        if(this.state.hoveredProduct!==product){
            this.setState({hoveredProduct:product});
        }
    }
    renderComparisiontable(){
        const {data} = this.props;
        const {displayTable,selectedProduct,selectedAttributes} = this.state;
        if(displayTable){
            let selectedProductDetails = [];
            for(let i = 0 ; i < data.length; i++){
             
                
                if(selectedProduct.includes(data[i].name)){
                    selectedProductDetails.push(data[i]);
                }
            }
            
            return (
                <React.Fragment>
                     <div className="row">
                        <div className="col-12">
                        <div className="py-3 float-right" onClick={(e)=>{this.setState({displayModal:true})}}><i className="fas fa-edit"></i><span>Edit Attributes</span></div>
                        </div>
                     </div>
                <Table selectedProduct={selectedProduct} selectedAttributes={selectedAttributes} selectedProductDetails={selectedProductDetails}/>
                </React.Fragment>
            )
        }
    }
    displayTableOff=()=>{
        this.setState({displayTable:false});
    }
    turnModalOff=()=>{
        this.setState({displayModal:false});
    }
    setSelectedAttributes = (arr) => {
        this.setState({selectedAttributes:arr})
    }
    render(){
        return (
            <div >
                <AttributeModal setSelectedAttributes={this.setSelectedAttributes} attributes={this.state.attributes} selectedAttributes={this.state.selectedAttributes} show={this.state.displayModal} onHide={this.turnModalOff}/>
                <div className="flex align-center space-between my-4">
                    <h3 className="my-3">Compare Products</h3>
                    {this.state.selectedProduct.length>=2?<button className="btn btn-alma" onClick={(e)=>{this.setState({displayTable:true})}}>Compare</button>:null}
                </div>
                <div className="row">
                    {this.props.data.map((data, index) => {
                        return <Card data={data} key={index}
                            selectedProduct={this.state.selectedProduct}
                            hoveredProduct={this.state.hoveredProduct}
                            setHoveredProduct={this.setHoveredProduct}
                            displayTableOff={this.displayTableOff} />
                    })}
                </div>
               
                   {this.renderComparisiontable()}
            </div>
        )
    }
   
}


export default ProductListing;