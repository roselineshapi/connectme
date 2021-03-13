
import styled from 'styled-components';
import React, {useMemo, useState, useEffect, Component } from "react";
import Table from "./Table.js";

const GridWrapper = styled.div`
//   display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 


class Externships extends Component{

  constructor(props){
    super(props)
    this.state = {
      externships: [],
      isLoading: false,
      isError: false
    }
  }
 // async function get request
 async componentDidMount(){
   this.setState({isLoading:true})

   const response = await fetch("")

   if(response.ok){
     this.setState({externships, isloading:false})
   }else{
     this.setState({isError:true, isloading:false})
   }
 }

 renderTableHeader = () => {
    return  Object.keys(this.state.externships[0]).map(attr => <th key = {attr}></th> )

 }
 render(){
   const {externships,isLoading, isError} = this.state

   if(isLoading){
    return <div>Loading...</div>
   }
   if(isError){
     return<div>Error...</div>
   }

   return externships.length > 0
   ?(

    <table>
      <thead>
        <tr>
          {this.renderTableHeader()}
        </tr>
      </thead>
      <tbody>
        {this.renderTableRow}
      </tbody>
    </table>
   ):(
     <div> No externships</div>
   )

 }

}

  export default Externships;