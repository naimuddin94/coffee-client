import { useContext, useState } from "react";
import { AuthContext } from "./Provider";
import Swal from "sweetalert2";

const Register = () => {
  const [selectedGender, setSelectedGender] = useState("male");

  const { createUser } = useContext(AuthContext);

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        fetch("https://coffee-server-ep32z2ezb-naimuddin94.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email,
            gender: selectedGender,
            creationTime: user.metadata.creationTime,
            lastSignInTime: user.metadata.lastSignInTime,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "User created successfully",
                icon: "success",
                confirmButtonText: "Ok",
              });
            }
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <div className="card shadow-2xl min-w-[400px] bg-base-100">
          <form onSubmit={handleForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <h4>Gender</h4>
            <div className="flex justify-around">
              <label>
                <input
                  type="radio"
                  value="male"
                  checked={selectedGender === "male"}
                  onChange={handleGenderChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  value="female"
                  checked={selectedGender === "female"}
                  onChange={handleGenderChange}
                />
                Female
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
