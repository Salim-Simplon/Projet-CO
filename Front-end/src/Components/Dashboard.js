import React, { Component } from "react";
import { connect } from "react-redux";
import { GetUsersFromApi, deleteUserFromApi } from "../Action/userActions";
// import { Link } from "react-router-dom";
import { Table, Thead, Tr, Th, Td, Tbody } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

class Dashboard extends Component {

  componentDidMount() {
    this.props.getAllUser();
  }

  render() {
    
    const { user } = this.props;
    console.log(user)
    const toutUsers = user.length ? (
      user.map((el) => {
        return (

            <Tr>
              <Td className="table"> {el.name} </Td>
              <Td className="table"> {el.adress} </Td>
              <Td className="table"> {el.mail} </Td>
              <Td className="table"> {el.tel} </Td>
              <Td className="table"> <button onClick={() => {
                  this.props.delete(el._id);
                }}>Supprimer</button> </Td>
            </Tr>
        );
      })
    ) : (
      <p>La liste des clients n'est pas encore prête</p>
    );
    return (
      <div>
        <h1>TOUT LES CLIENTS</h1>
        <div className="T-T">
          <Table className="table">
            <Thead>
              <Tr>
                <Th className="table">Client</Th>
                <Th className="table">Adress</Th>
                <Th className="table">Mail</Th>
                <Th className="table">Tel.</Th>
                <Th className="table">Supprimer</Th>
              </Tr>
            </Thead>
             
            <Tbody>
              {toutUsers}
            </Tbody>
             
          </Table>
        </div>        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllUser: () => dispatch(GetUsersFromApi()),
  delete: (_id) => dispatch(deleteUserFromApi(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
