// import React, { useState } from 'react';
// import { getAuth, getUser } from 'firebase/auth';
// import { app } from '../../../firebase/firebase.config';

// const FetchUserDataByEmail = () => {
//   const [email, setEmail] = useState('');
//   const [userData, setUserData] = useState(null);
//   const [error, setError] = useState(null);

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const fetchUserData = async () => {
//     const auth = getAuth(app);
//     try {
//       const userRecord = await getUser(auth, email);
//       setUserData(userRecord.toJSON());
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Fetch User Data by Email</h2>
//       <label>
//         Email:
//         <input type="email" value={email} onChange={handleEmailChange} />
//       </label>
//       <button onClick={fetchUserData}>Fetch User Data</button>

//       {userData && (
//         <div>
//           <h3>User Data</h3>
//           <pre>{JSON.stringify(userData, null, 2)}</pre>
//         </div>
//       )}

//       {error && <p>Error: {error}</p>}
//     </div>
//   );
// };

// export default FetchUserDataByEmail;
 import React from 'react'
 
 function UserList() {
   return (
     <div>UserList</div>
   )
 }
 
 export default UserList;