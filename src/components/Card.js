import React from 'react';

class Card extends React.Component {
    
    state={
        selected:this.props.selectedProduct.includes(this.props.data.name)
    }

     renderOverlayWhenSelected() {

        if (this.props.selectedProduct.includes(this.props.data.name)) {
            return (
                <div className="card-overlay">
                    <div>
                        <button className="btn btn-light" onClick={(e) => {
                             let selectedArr = this.props.selectedProduct;
                             selectedArr.splice( selectedArr.indexOf(this.props.data.name), 1 );
                             this.props.displayTableOff();
                             this.setState({selected:false});
                        }}>Remove</button>
                    </div>
                </div>
            )
        }
    }
     renderOverlayWhenHovered(){
        if (!this.props.selectedProduct.includes(this.props.data.name) && this.props.hoveredProduct===this.props.data.name) {
            return (
                <div className="card-overlay">
                    <div>
                        <button className="btn btn-light" onClick={(e) => {
                            
                            let selectedArr = this.props.selectedProduct;
                            selectedArr.push(this.props.data.name);
                            this.props.displayTableOff();
                            this.setState({selected:true});
                        }}>Compare</button>
                    </div>
                </div>
            )
        }
    }
    render(){
        const { data } = this.props;
        return (
            <div className="col-sm-12 col-md-12 col-lg-3 card-wrapper" onMouseEnter={(e) => { this.props.setHoveredProduct(data.name) }} onMouseLeave={(e) => { this.props.setHoveredProduct("") }}>
            <div className={`card ${this.props.selectedProduct.includes(this.props.data.name)?"selected":null}`} >
                {this.renderOverlayWhenSelected()}
                {this.renderOverlayWhenHovered()}
                <img src={process.env.PUBLIC_URL + data.image} className="card-img-top" alt={data.title} />
                <div className="card-body flex space-between">
                    <div>
                        <h4>{data.name}</h4>
                        <p className="light">{data.description}</p>
                    </div>
                    <div>
                        <span className="price">{data.price}</span>
                    </div>
                </div>
            </div>
        </div>
        )
    }
  
}

export default Card;