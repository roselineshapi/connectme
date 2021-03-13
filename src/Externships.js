
import styled from 'styled-components';
import React, {useMemo, useState, useEffect } from "react";
import Table from "./Table.js";
import axios from 'axios';

const GridWrapper = styled.div`
//   display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 

// Custom component to render Genres 
const Classification = ({ values }) => {
    // Loop through the array and create a badge-like component instead of a comma-separated string
    return (
      <>
        {values.map((genre, idx) => {
          return (
            <span key={idx} className="badge">
              {genre}
            </span>
          );
        })}
      </>
    );
  };


function Externships() {
    
    const columns = useMemo(
        () => [
          {
            // first group - TV Show
            Header: "Externships",
            // First group columns
            columns: [
              {
                Header: "Company",
                accessor: "show.name"
              },
              {
                Header: "Name",
                accessor: "show.type"
              }
            ]
          },
          {
            // Second group - Details
            Header: "Details",
            // Second group columns
            columns: [
              {
                Header: "Industry",
                accessor: "show.language"
              },
              {
                Header: "Classification",
                accessor: "show.genres",
                // Cell method will provide the cell value; we pass it to render a custom component
                Cell: ({ cell: { value } }) => <Classification values={value} />

              },
              {
                Header: "Diversity",
                accessor: "show.runtime"
                
              },
              {
                Header: "Status",
                accessor: "show.status"
              }
            ]
          }
        ],
        []
      );
    // data state to store the TV Maze API data. Its initial value is an empty array
    const [data, setData] = useState([]);
  
    // Using useEffect to call the API once mounted and set the data
    useEffect(() => {
      (async () => {
        const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
        setData(result.data);
      })();
    }, []);
    return (
      <div className="Externships">
          <Table columns={columns} data={data} />
      </div>
    );
  }

  export default Externships;