import React from 'react';


import './IranMap.css';

import CityModal from './CityModal';


class IranMap extends React.Component {

    state = {
        citiesData: null,
        selectedCity: null,
        isModalOpen: false,
    };

    

    cityClicked = (id) => (event) => {
        event.preventDefault();
        fetch(`http://localhost:9000/cities/ ${id}`,
    {
        
        method: "get",
        dataType: 'json',
    })
    .then(res=>res.json())
    .then((data) => {
      
      console.log(data);
      this.setState({selectedCity:data,isModalOpen:true})
    
    })
    .catch(err => console.log(err))
 
    };

    closeModal = () => {
        this.setState({
            isModalOpen: false,
        });
    };


    componentWillMount(){
        fetch('http://localhost:9000/cities/',
        {           
            method: "get",
            dataType: 'json',
        })
        .then((res) => res.json())
        .then((data) => {
          
          this.setState({citiesData:data})
          console.log(this.state.citiesData);
        })
        .catch(err => console.log(err))
      }
    
    render() {
        
        return (
            <div>
                <div className="map-container">
                    {(this.state.citiesData || []).map((record) => (
                        <div
                            key={record.id}
                            className="city-name"
                            style={{
                                top: `${record.top}%`,
                                left: `${record.left}%`,
                            }}
                            onClick={this.cityClicked(record.id)}
                        >
                            {record.name}
                        </div>
                    ))}
                </div>
                <CityModal
                    city={this.state.selectedCity}
                    isOpen={this.state.isModalOpen}
                    onClose={this.closeModal}
                />
            </div>
        );
    }
}

export default IranMap;
