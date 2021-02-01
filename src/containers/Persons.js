import React, { Component } from "react";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import * as actionTypes from "../store/actions";
import { connect } from "react-redux";

class Persons extends Component {
	render() {
		return (
			<div>
				<AddPerson personAdded={this.props.onAddedPerson} />
				{this.props.persons.map((person) => (
					<Person
						key={person.id}
						name={person.name}
						age={person.age}
						clicked={() => this.props.onremovedPerson(person.id)}
					/>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		persons: state.persons,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAddedPerson: () => dispatch({ type: actionTypes.ADD_PERSON }),
		onremovedPerson: (id) =>
			dispatch({ type: actionTypes.REMOVE_PERSON, personId: id }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
