import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const User = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers || []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-server-ebwvq7sv5-naimuddin94.vercel.app/users/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remainUser = users.filter((user) => user._id !== id);
              setUsers(remainUser);
            }
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto border border-slate-700 mt-5 mx-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Email</th>
            <th>Gender</th>
            <th>Creation Time</th>
            <th>Last Login Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <th>{user.email}</th>
              <td>{user.gender}</td>
              <td>{user.creationTime}</td>
              <td>{user.lastSignInTime}</td>
              <td>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="btn-sm btn-outline"
                >
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
