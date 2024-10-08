import React from "react";

export default function Table({ users }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nomor</th>
          <th>Nama</th>
          <th>Usia</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
