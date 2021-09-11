import React, { useEffect, useState  } from 'react'
import Axios from "axios";
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

export default function Vmaster() {
    const [nameList,setNameList]= useState([])
    Axios.defaults.withCredentials = true;
    useEffect(() => {
      Axios.get("http://localhost:3001/vehicle").then((response) => {
      setNameList(response.data);
        // console.log(response.data);
      // if (response.data.loggedIn == true) {
        //   setRole(response.data.user[0].role);
        // }
      });
    }, []);
  let history = useHistory();

    const deleteEmployee1 = (id) => {
      Axios.delete(`http://localhost:3001/vehicle/${id}`).then((response) => {
        setNameList(
          nameList.filter((val) => {
            return val.id = id;
          })
          
          );
          history.push("/vmaster");
        });
    };









    return (

  <div className="row ">
     <div className="col-12 grid-margin">
     <Link
                to="/form-elements/Add_data"
                className="btn btn-primary btn-fw"
              >
                Add
              </Link>
       {/* <button type="button" className="btn btn-primary btn-fw">Primary</button> */}
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Order Status</h4>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>
                          <div className="form-check form-check-muted m-0">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input" />
                              <i className="input-helper"></i>
                            </label>
                          </div>
                        </th>
                        <th> Client Name </th>
                        <th> Order No </th>
                        <th> Product Cost </th>
                        <th> Project </th>
                        <th> Payment Mode </th>
                        <th> Payment Mode </th>
                        <th> Delete </th>
                      </tr>
                    </thead>
                    <tbody>
                    {nameList.map((val,key)=>{
   return (
                      <tr>
                  
                        <td>{val.regno}</td>
                        <td>{val.make}</td>
                        <td>{val.model}</td>
                        <td>{val.enginno}</td>
                        <td>{val.chasisno}</td>
                        <td>{val.auto}</td>
                        <td> <button className="btn btn-primary mr-2"
                    onClick={() => {  deleteEmployee1(val.id);
                  }}
              >
                  Delete
                </button>

                </td>
                     
                        <td>
                        <Link
                to={"/form-Elements/edit_data/" + val.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
                
                        </td>
                      </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            </div>
          </div>


          
    )

  }
