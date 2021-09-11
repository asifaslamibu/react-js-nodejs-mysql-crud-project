// import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
// import DatePicker from "react-datepicker";

import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import Axios from "axios";
// import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'


export default function Edit_data() {
const params = useParams();

const [regno, setRegno] = useState(0);
const [make, setMake] = useState(0);
// const [model, setModel] = useState(0);
// const [name, setName] = useState(0);
// const [enginno, setEnginno] = useState(0);
// const [chasisno, setChasisno] = useState(0);
// const [auto, setAuto] = useState(0);
const [nameList,setNameList]= useState([])


// let history = useHistory();
const vupdate = (id) => {
    // make:make,model:model,name:name,enginno:enginno,chasisno:chasisno,auto:auto,
  
  console.log(id)
  console.log(regno)
  console.log(make)
  Axios.put("http://localhost:3001/vupdate",{ regno:regno, make:make, id: id }).then(
    (response) => {
        setNameList(
        nameList.map((val) => {
        //   history.push("/vmaster");
          return val.id = id
            ? {
                regno: val.regno,
                make: val.make,
                // model: val.model,
                // name:val.name,
                // enginno: val.enginno,
                // chasisno: val.chasisno,
                // auto: val.auto
              }
            : val;
        })
  )
    }
  );
};




  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get(`http://localhost:3001/editform/${params.id}`).then((response) => {
    setNameList(response.data);
      console.log(response.data);
    // if (response.data.loggedIn == true) {
    //     setRole(response.data.user[0].role);
    //   }
    });
  }, []);




      return (
        <div>
        <div className="page-header">
      
          <h3 className="page-title"> Form elements </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Forms</a></li>
              <li className="breadcrumb-item active" aria-current="page">Form elements</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
            {nameList.map((val)=>{
    return <>
              <div className="card-body">
                <h4 className="card-title">Default form</h4>
                <p className="card-description"> Basic form layout </p>
        
                <Form.Group>
                    <label htmlFor="exampleInputUsername1">Reg No.</label>
                    <Form.Control type="text" id="exampleInputUsername1"placeholder={val.regno}  onChange={(event) => {
            setRegno(event.target.value);
          }}/>
          
                  </Form.Group>
               <Form.Group>
                    <label htmlFor="exampleInputEmail1">Make</label>
                    <Form.Control type="text" className="form-control" placeholder={val.make}  onChange={(event) => {
            setMake(event.target.value);
          }} />
                  </Form.Group>
                   {/*   <Form.Group>
                    <label htmlFor="exampleInputUsername1">Model</label>
                    <Form.Control type="text" id="exampleInputUsername1"placeholder={val.model} onChange={(event) => {
            setModel(event.target.value);
          }}/>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Vehicle Name</label>
                    <Form.Control type="text" className="form-control" placeholder={val.name}  onChange={(event) => {
            setName(event.target.value);
          }} />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Engin No.</label>
                    <Form.Control type="text" id="exampleInputUsername1"placeholder={val.enginno} onChange={(event) => {
            setEnginno(event.target.value);
          }}/>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Chasis No.</label>
                    <Form.Control type="text" className="form-control" placeholder={val.chasisno}  onChange={(event) => {
            setChasisno(event.target.value);
          }}/>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Auto / Menual</label>
                    <Form.Control type="text" className="form-control" placeholder={val.auto}  onChange={(event) => {
            setAuto(event.target.value);
          }} />
                  </Form.Group> */}
                 
                  <button
                  onClick={() => {
                    vupdate(val.id);
                  }}
                >
                 {" "}
                 
                  Update
                </button>

                    <Link
                to="/Vmaster"
                className="btn btn-dark">
Cancel              </Link>
                  {/* <button className="btn btn-dark">Cancel</button> */}
           
              </div>
              
              </>
            })}
            </div>
            </div>
          </div>
   
      </div>
    );
  }
