import React, { useState, useEffect } from 'react';
import firebase from "../firebase";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for changes to the user authentication state
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    // Cleanup function to unsubscribe from the listener
    return unsubscribe;
  }, []);

  return user;
};

const useFirestore = (a3mdev1005w23) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Get a reference to the Firestore collection
    const collectionRef = firebase.firestore().collection(a3mdev1005w23);

    // Listen for changes to the collection data
    const unsubscribe = collectionRef.onSnapshot((snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log(documents);
      setData(documents);
    });

    // Cleanup function to unsubscribe from the listener
    return unsubscribe;
  }, [a3mdev1005w23]);

  return data;
};

const handleSignOut = () => {
  firebase.auth().signOut().then(() => {
    // Do something after sign out if needed
  }).catch(error => {
    console.error(error);
  });
};

// Example usage
const Home = () => {
  const user = useAuth();
  const users = useFirestore("users");

  return (
    <div className='container'>

      <h2 className="fs-1 text-center">ReWebDev</h2>
      <hr></hr>

      <section className="mt-3">
        <p>Welcome to the MDEV1005-Assignment03-W23 website developed by group ReWebDev, formed by MAHFUZ AFTAB and RABIH NADER. The report is available in the website, outlines the functional components, Getsalt principle etc. used in the website development along with divergent react hooks used for various features, such as the Calculator/Checklist Tools Page and newsfeed, IBM stock update and country details  on the API Page. </p>
      </section>
      {user ? (
        <div className="user-profile-container">
          <div className="user-profile-header">
            <h3>User Profile</h3>
          </div>
          <div className="user-profile-info">
            <div className="profile-details">
              <h6>Hey, Welcome {user.email}!</h6>

              <p>Email: {user.email}</p>
              <p>User ID: {user.uid}</p>
            </div>
          </div>
          <button type="button" class="btn btn-danger" onClick={handleSignOut}>Log Out</button>
        </div>
      ) : (
        <h5>Please sign up/login following the Account tab to continue.</h5>
      )}
      <ul>
        {users.map((user) => (

          <li key={user.uid}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;