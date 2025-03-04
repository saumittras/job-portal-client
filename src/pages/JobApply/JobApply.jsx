import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const naviget = useNavigate();
  console.log(id, user);
  const submitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;
    // console.log(linkedIn, github, resume);

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      github,
      resume,
    };

    fetch("http://localhost:5000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())

      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        naviget("/myApplications");
      });
  };
  return (
    <div className="">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold text-center py-6">
          Apply now! Good Luck
        </h1>
      </div>
      <div className="card bg-base-100 w-full  shadow-2xl">
        <form onSubmit={submitJobApplication} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Linkedin URL</span>
            </label>
            <input
              type="url"
              name="linkedIn"
              placeholder="Linkedin URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">GitHub URL</span>
            </label>
            <input
              type="url"
              name="github"
              placeholder="GitHub URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Resume URL</span>
            </label>
            <input
              type="url"
              name="resume"
              placeholder="Resume URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Apply</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
