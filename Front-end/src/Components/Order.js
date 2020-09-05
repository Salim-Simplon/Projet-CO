import React, { Component } from "react";
import { Table, Thead, Tr, Th } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

export default class Order extends Component {
  render() {
    return (
      <div>
        <h1>TOUT LES CLIENTS</h1>

        <div className="T-T">
          <Table className="table">
            <Thead>
              <Tr>
                <Th className="table">Date</Th>
                <Th className="table">Vendeur</Th>
                <Th className="table">Acheteur</Th>
                <Th className="table">Article</Th>
              </Tr>
            </Thead>
            {/*  
            <Tbody>
              {this.props.user.map((el) => (
                <Tr>
                  <Td className="table"> {el.name} </Td>
                  <Td className="table"> {el.cin} </Td>
                  <Td className="table"> {el.mail} </Td>
                  <Td className="table"> {el.tel} </Td>
                </Tr>
              ))}
            </Tbody>
             */}
          </Table>
        </div>
      </div>
    );
  }
}
