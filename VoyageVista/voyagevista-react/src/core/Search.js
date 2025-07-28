import React, { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import View4 from './../image/View4.jpg'

function SearchComponent() {
  const [selectedTab, setSelectedTab] = useState('flights');
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);

  const handleTabChange = (key) => {
    setSelectedTab(key);
  };
  const renderContent = () => {
    switch (selectedTab) {
      case 'flights':
        return (
            <><div className="row pt-4">
                <div className="mx-3">
                        Travellers
                </div>
                <div className="col-2">
                        <select className="form-control">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="4">5</option>
                            <option value="4">6</option>
                            <option value="4">7</option>
                            <option value="4">8</option>
                            <option value="4">9</option>
                            <option value="4">10</option>
                            <option value="4">11</option>
                            <option value="4">12</option>
                            <option value="4">13</option>
                            <option value="4">14</option>
                            <option value="4">15</option>
                        </select>
                    </div>
                </div>
            <div className="row mb-2">
            <div className="form-group col-3 pt-4 mt-2">
                            <input type="text" className="form-control" placeholder="&#xf041; Origin" style={{ fontFamily: 'FontAwesome', fontSize: '12px' }} />
                        </div>
                        <div className="form-group col-3 pt-4 mt-2">
                            <input type="text" className="form-control" placeholder="&#xf041; Destination" style={{ fontFamily: 'FontAwesome', fontSize: '12px' }} />
                        </div>
                    

                    <div className="form-group col-3">
                        <label>Departure Date</label>
                        <DatePicker selected={departureDate} onChange={(date) => setDepartureDate(date)} />
                    </div>

                    <div className="group mt-3">
                        <button className="btn btn-dark">
                            <i className="fa fa-search text-white" aria-hidden="true"></i>
                        </button>
                    </div>
                </div></>
            
        );
      case 'hotels':
        return (
          <div>
            <div className="row my-2">
                <div className="col-2">
                    <div className="form-group">
                        <label>Rooms</label>
                        <select className="form-control">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="4">5</option>
                            <option value="4">6</option>
                            <option value="4">7</option>
                        </select>
                    </div>
                </div>
                <div className="col-2">
                    <div className="form-group">
                        <label>Guests</label>
                        <select className="form-control">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="4">5</option>
                            <option value="4">6</option>
                            <option value="4">7</option>
                            <option value="4">8</option>
                            <option value="4">9</option>
                            <option value="4">10</option>
                            <option value="4">11</option>
                            <option value="4">12</option>
                            <option value="4">13</option>
                            <option value="4">14</option>
                            <option value="4">15</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row mb-2">
            <div className="form-group col-3 pt-4 mt-2">
                            <input type="text" className="form-control" placeholder="&#xf041; Destination" style={{ fontFamily: 'FontAwesome', fontSize: '12px' }} />
                        </div>

                    
                        <div className="form-group col-3">
                        <label>Check-In Date</label>
                        <DatePicker selected={arrivalDate} onChange={(date) => setArrivalDate(date)} />
                    </div>
                    

                    <div className="form-group col-3">
                        <label>Check-Out Date</label>
                        <DatePicker selected={departureDate} onChange={(date) => setDepartureDate(date)} />
                    </div>

                    <div className="group mt-3">
                        <button className="btn btn-dark">
                            <i className="fa fa-search text-white" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
      case 'flightsHotels':
        return (
          <div>
            <div className="row">
                <div className="col-2">
                    <div className="form-group">
                        <label>Rooms</label>
                        <select className="form-control">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="4">5</option>
                            <option value="4">6</option>
                            <option value="4">7</option>
                        </select>
                    </div>
                </div>
                <div className="col-2">
                    <div className="form-group">
                        <label>Travellers</label>
                        <select className="form-control">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="4">5</option>
                            <option value="4">6</option>
                            <option value="4">7</option>
                            <option value="4">8</option>
                            <option value="4">9</option>
                            <option value="4">10</option>
                            <option value="4">11</option>
                            <option value="4">12</option>
                            <option value="4">13</option>
                            <option value="4">14</option>
                            <option value="4">15</option>
                        </select>
                    </div>
                </div>
                <div className="col-2">
                    <div className="form-group">
                        <label>Guests</label>
                        <select className="form-control">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="4">5</option>
                            <option value="4">6</option>
                            <option value="4">7</option>
                            <option value="4">8</option>
                            <option value="4">9</option>
                            <option value="4">10</option>
                            <option value="4">11</option>
                            <option value="4">12</option>
                            <option value="4">13</option>
                            <option value="4">14</option>
                            <option value="4">15</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row mb-2">
            <div className="form-group col-4 pt-4 mt-2">
                            <input type="text" className="form-control" placeholder="&#xf041; Origin" style={{ fontFamily: 'FontAwesome', fontSize: '12px' }} />
                        </div>
                        <div className="form-group col-4 pt-4 mt-2">
                            <input type="text" className="form-control" placeholder="&#xf041; Destination" style={{ fontFamily: 'FontAwesome', fontSize: '12px' }} />
                        </div>
                    

                    <div className="form-group col-4">
                        <label>Flight Departure Date</label>
                        <DatePicker selected={departureDate} onChange={(date) => setDepartureDate(date)} />
                    </div>
                    <div className="form-group col-3">
                        <label>Check-In Date</label>
                        <DatePicker selected={arrivalDate} onChange={(date) => setArrivalDate(date)} />
                    </div>
                    

                    <div className="form-group col-3">
                        <label>Check-Out Date</label>
                        <DatePicker selected={departureDate} onChange={(date) => setDepartureDate(date)} />
                    </div>
                    <div className="group mt-3">
                        <button className="btn btn-dark">
                            <i className="fa fa-search text-white" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
          </div>
        );
      case 'cars':
        return (
          <div>
            <div className="row mt-4">
              <div className="col-3">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="&#xf041; Pick-Up Location" style={{ fontFamily: 'FontAwesome', fontSize: '12px' }}/>
                </div>
              </div>
              <div className="col-3">
              <div className="form-group">
                  <DatePicker selected={arrivalDate} onChange={(date) => setArrivalDate(date)} placeholderText="Pick-Up Date"/>
                </div>
              </div>
              <div className="col-3">
              <div className="form-group">
                  <DatePicker selected={departureDate} onChange={(date) => setDepartureDate(date)} placeholderText="Return Date"/>
                </div>
              </div>
              <div className="group">
                        <button className="btn btn-dark">
                            <i className="fa fa-search text-white" aria-hidden="true"></i>
                        </button>
              </div>
            </div>
          </div>
        );
      case 'cruises':
        return (
          <div>
            <div className="row my-3">
              <div className="col-3">
                <div className="form-group">
                  <select className="form-control">
                  <option value="allCruiseLines">All Cruise Lines</option>
                  <option value="carnival">Carnival</option>
                  <option value="royalCaribbean">Royal Caribbean</option>
                  <option value="norwegian">Norwegian</option>
                  <option value="disney">Disney</option>
                  <option value="amaWaterways">AMA Waterways</option>
                  <option value="avalonWaterways">Avalon Waterways</option>
                  <option value="azamara">Azamara</option>
                  <option value="celebrity">Celebrity</option>
                  <option value="crystal">Crystal</option>
                  <option value="cunard">Cunard</option>
                  <option value="hollandAmerica">Holland America</option>
                  <option value="mscCruises">MSC Cruises</option>
                  <option value="oceania">Oceania</option>
                  <option value="princess">Princess</option>
                  <option value="regentSevenSeas">Regent Seven Seas</option>
                  <option value="seabourn">Seabourn</option>
                  <option value="silversea">Silversea</option>
                  <option value="tauckRiverCruising">Tauck River Cruising</option>
                  <option value="uniworld">Uniworld</option>
                  <option value="vikingRiverCruises">Viking River Cruises</option>
                  <option value="windstar">Windstar</option>
                  </select>
                </div>
              </div>
              <div className="col-3">
                <div className="form-group">
                <select className="form-control">
                <option value="allDestinations">All Destinations</option>
                  <option value="africa">Africa</option>
                  <option value="alaska">Alaska</option>
                  <option value="alaskaCruiseTours">Alaska Cruise Tours</option>
                  <option value="antarctic">Antarctic</option>
                  <option value="asia">Asia</option>
                  <option value="asiaCruiseTours">Asia Cruise Tours</option>
                  <option value="australiaNewZealand">Australia/New Zealand</option>
                  <option value="bahamas">Bahamas</option>
                  <option value="bermuda">Bermuda</option>
                  <option value="canadaNewEngland">Canada/New England</option>
                  <option value="caribbean">Caribbean</option>
                  <option value="caribbeanEastern">Caribbean (Eastern)</option>
                  <option value="caribbeanExotic">Caribbean (Exotic)</option>
                  <option value="caribbeanSouthern">Caribbean (Southern)</option>
                  <option value="caribbeanWestern">Caribbean (Western)</option>
                  <option value="eastCoast">East Coast</option>
                  <option value="europe">Europe</option>
                  <option value="europeMediterranean">Europe (Mediterranean)</option>
                  <option value="europeNorthern">Europe (Northern)</option>
                  <option value="europeWestern">Europe (Western)</option>
                  <option value="europeCruiseTours">Europe Cruise Tours</option>
                  <option value="farEast">Far East</option>
                  <option value="hawaii">Hawaii</option>
                  <option value="mexicanBajaRiviera">Mexican Baja/Riviera</option>
                  <option value="middleEast">Middle East</option>
                  <option value="nowhere">Nowhere</option>
                  <option value="pacificCoastal">Pacific Coastal</option>
                  <option value="panamaCanal">Panama Canal</option>
                  <option value="riverCruiseEuropeEgypt">River Cruise (Europe/ Egypt)</option>
                  <option value="southAmerica">South America</option>
                  <option value="southPacific">South Pacific</option>
                  <option value="southeastAsia">Southeast Asia</option>
                  <option value="transatlantic">Transatlantic</option>
                  <option value="transpacific">Transpacific</option>
                  <option value="worldCruise">World Cruise</option>
                </select>
                </div>
              </div>
              <div className="col-3 mt-1">
                <div className="form-group">
                  <DatePicker selected={departureDate} onChange={(date) => setDepartureDate(date)} placeholderText="Departure Date"/>
                </div>
              </div>
              <div className="col-2">
                    <div className="form-group">
                        <select className="form-control">
                            <option value="alldurations">All Durations</option>
                            <option value="2-6nights">2-6 Nights</option>
                            <option value="7-9nights">7-9 Nights</option>
                            <option value="10-14nights">10-14 Nights</option>
                            <option value="15+nights">15+ Nights</option>
                        </select>
                    </div>
                </div>
              <div className="group">
                        <button className="btn btn-dark">
                            <i className="fa fa-search text-white" aria-hidden="true"></i>
                        </button>
                </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{
      backgroundImage: `url(${View4})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      minHeight: '50vh'
    }}>
    <div className="container col-10 pt-5">
      <div className="card p-2" style = {{opacity: "80%"}}>
      <Tab.Container activeKey={selectedTab} onSelect={handleTabChange}>
        <Nav variant="tabs" style = {{fontFamily : "Roboto", fontSize: "15px", fontWeight: "bold"}}>
          <Nav.Item>
            <Nav.Link eventKey="flights">✈️ Flights</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="hotels">🏩 Hotels</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="flightsHotels">🛍️ Flights + Hotels</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="cars">🚔 Cars</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="cruises">🛳️ Cruises</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="flights">
            {renderContent()}
          </Tab.Pane>
          <Tab.Pane eventKey="hotels">
            {renderContent()}
          </Tab.Pane>
          <Tab.Pane eventKey="flightsHotels">
            {renderContent()}
          </Tab.Pane>
          <Tab.Pane eventKey="cars">
            {renderContent()}
          </Tab.Pane>
          <Tab.Pane eventKey="cruises">
            {renderContent()}
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
    </div>
    </div>
  );
}

export default SearchComponent;