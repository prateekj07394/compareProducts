import React, { Component } from 'react';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    renderHeading() {
        return this.props.selectedProduct.map((data, index) => {
            return <td key={index}>{data}</td>
        })
    }
    renderColors(arr) {
        
        return arr.map((data,index)=>{
        return <div className="colors" key={index} style={{backgroundColor:`${data}`}}></div>
        })
    }
    renderVendors(arr) {
        
        return arr.map((data,index)=>{
            if(index===arr.length-1){
                return <span  key={index} >{data}</span>
            }
        return <span  key={index} >{data} ,</span>
        })
    }
    renderCondition(arr) {
        if(arr==="Frozen"){
            return <div style={{textAlign:"center",padding:"10px", color:"#fff",backgroundColor:"#dc3545eb"}}>{arr}</div>
        }
    return <div style={{textAlign: "center",padding:"10px",color:"#fff",backgroundColor:"#28a745b8"}}>{arr}</div>
    }
    renderAttributesData(attributeName) {
        return this.props.selectedProductDetails.map((data,index) => {
            if (attributeName === "Colors") {
                let arr = data[attributeName.toLowerCase()];
                
                return <td key={index}>
                    {this.renderColors(arr)}
                </td>
            }else if (attributeName === "Condition") {
                let arr = data[attributeName.toLowerCase()];
                return <td key={index}>
                    {this.renderCondition(arr)}
                </td>
            }else if (attributeName === "Vendors") {
                let arr = data[attributeName.toLowerCase()];
                return <td key={index}>
                    {this.renderVendors(arr)}
                </td>
            }
            return <td key={index}>{data[attributeName.toLowerCase()]}</td>
        })
    }
    renderBody() {
        return this.props.selectedAttributes.map((data, index) => {
            return (
                <tr key={index}>
                    <td style={{backgroundColor:"#f1f3f6"}}>{data}</td>
                    {this.renderAttributesData(data)}
                </tr>
            )
        })
    }
    render() {

        return (
            <div className="row ">
                <div className="col-12">
                    
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th ><span style={{ visibility: "hidden" }}>Empty</span> </th>
                                {this.renderHeading()}
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderBody()}

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Table;