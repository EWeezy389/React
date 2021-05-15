import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
class CampsiteInfo extends Component {
    renderCampsite(campsite) {
        return (<div className= "col-md-5 m-1"> <Card onClick={() => this.onCampsiteSelect(campsite)}>
        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
        <CardImgOverlay>
            <CardTitle>{campsite.name}</CardTitle>
        </CardImgOverlay>
    </Card></div>)
    }
    render() {
        //only display the data of the campsite if data exists
        if(this.props.campsite) {
            return <div className="row">
                {this.renderCampsite(this.props.campsite)}
            </div>}
            //if user hasn't clicked on a campsite, then display nothing
        return <div></div>
            
    }
}

export default CampsiteInfo;