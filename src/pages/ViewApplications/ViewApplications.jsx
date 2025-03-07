import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewApplications = () => {
    const applications=useLoaderData()
    const handleStatus=(e, id)=>{
        console.log(e.target.value, id)
        const data = {
            status:e.target.value
        }

        fetch(`http://localhost:3000/job-application/${id}`, {
            method: "PATCH",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.modifiedCount>0) {
                    Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You have Successfully changed status",
                    showConfirmButton: false,
                    timer: 1500,
                    });
                    }
        })
    }
    return (
        <div>
            <h2 className="text-3xl">Application for this job: {applications?.length}</h2>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>SL No</th>
                    <th>e-mail</th>
                    <th>Status</th>
                    <th>Update Status</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {
                    applications.map((application, idx)=>(
                    <tr key={idx}>
                        <th>{idx+1}</th>
                        <td>{application.applicant_email}</td>
                        <td>Quality Control Specialist</td>
                        <td>
                        <select 

                        onChange={(e)=>handleStatus(e, application._id)}
                        defaultValue={application.status || "Change Status"} className="select select-sm">
                            <option disabled={true}>Change Status</option>
                            <option>Under Review</option>
                            <option>Set Interview</option>
                            <option>Hired</option>
                            <option>Rejected</option>
                        </select>
                        </td>
                    </tr>))
                }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ViewApplications;