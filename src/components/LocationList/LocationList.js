import React from "react";
import Location from "./Location";
import { useSelector } from "react-redux";
import {
  Jumbotron,
  Container,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input
} from "reactstrap";

const LocationList = props => {
  const locations = useSelector(state => state.locations);
  const [search, setSearch] = React.useState("");

  const searchLocations = e => {
    setSearch(e.target.value);
  };

  //////////////FILTER LOCATION///////////////////
  let filteredLocations = [];

  let unfilteredLocations = locations.map(location => (
    <Location
      location={location}
      key={location.id}
      displayFilter={props.displayFilter}
    />
  ));

  if (search == "") {
    filteredLocations.push(unfilteredLocations);
  } else {
    locations.filter(location => {
      if (location.address.charAt(0).includes(search)) {
        return filteredLocations.push(
          <Location
            location={location}
            key={location.id}
            displayFilter={props.displayFilter}
          />
        );
      } else if (location.address.charAt(0) !== search) {
        return ["Nada"];
      }
    });
  }

  ///////////////////////////////

  return (
    <Jumbotron fluid className="m-3">
      <Container fluid>
        <h4 className="display-4">Find a Location:</h4>
        <InputGroup className="p-2" size="sm">
          <Input name="search" onChange={searchLocations} />
          <InputGroupAddon addonType="append">
            <InputGroupText>Search for Location</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <div className="lead">{filteredLocations}</div>
      </Container>
    </Jumbotron>
  );
};

export default LocationList;
