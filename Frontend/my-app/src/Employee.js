import React, { Component } from 'react';
import { Variables } from './Variables.js';

export class Employee extends Component{

    constructor(props){
        super(props);
        this.state = {
            employees:[]
        }
    }

    refreshList(){
        fetch(Variables.API_URL+'employee')
        .then(response=>response.json())
        .then(data=>{
            this.setState({employees:data});
        })
    }

    componentDidMount(){
        this.refreshList();
    }

    render(){

        const{
            employees
        }=this.state;
        
        
        return(
            <div>
                <table className='table table-stripped'>
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Employee Name</th>
                            <th>Date of Joining</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(emp=>
                            <tr key={emp.employeeId}>
                                <td>{emp.employeeId}</td>
                                <td>{emp.employeeName}</td>
                                <td>{emp.doj}</td>
                                <td>
                                    <button className='btn btn-primary m-2'>Edit</button>
                                    <button className='btn btn-danger m-2'>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
