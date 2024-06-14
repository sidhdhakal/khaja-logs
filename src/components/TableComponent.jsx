import React from "react";

export default function TableComponent({ data, row, tableHead }) {
  // tablehead = [{name:"",colSpan:2}]
  // data = [data]
  // row = (details,key)=>{
  //    return <tr><td>{details.name}</td></tr>
  // }
  return (
    <table>
      <thead>
        <tr>
          {tableHead?.map((e, key) => {
            return (
              <th key={key} colSpan={e?.colSpan || 1}>
                {e?.name}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data?.map((item, index) => {
          return row(item, index);
        })}
      </tbody>
    </table>
  );
}
