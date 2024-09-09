import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import { getDocs,collection,updateDoc,doc, where, query, deleteDoc} from "firebase/firestore";
import { deleteUser, signInWithEmailAndPassword } from "firebase/auth";

const credentials = {
  username: "privateunited",
  password: "PrivatePass@13",
};

const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState();
  const navigate = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const shots = await getDocs(collection(db, "users"));

    let users = [];

    shots.forEach((s) => {
      users = [...users, s.data()];
    });

    setUsers(users);
  };

  const deleteAUser = async (user)=>{
    if(confirm('Are you sure you want to delete this user')){

      try {
      let id;
      const s = await getDocs(query(collection(db,'users'),where('email','==',user.email)))
      s.forEach(s=>id=s.id)
      const deleteRef = doc(db, "users", id); 
      
      await signInWithEmailAndPassword(auth,user.email,user.firstname+user.lastname+(user.referralCode || '13'))
      await deleteUser(auth.currentUser)
      await deleteDoc(deleteRef)

      alert(`you deleted ${user.email}`)
      await getUsers()
      } catch (error) {
        alert(error.message)  
      }   
    }
  }

  const addCashFunc = async (user) => {
    const amount = prompt("Enter amount to add");
     if(isNaN(Number(amount)))return alert('cash must be in nummber')
    try {

      let id;
      const s = await getDocs(query(collection(db,'users'),where('email','==',user.email)))

      s.forEach(s=>id=s.id)
      const updateRef = doc(db, "users", id);

      await updateDoc(updateRef, {
        canCashOut: true,
      });
      alert("amount changed");
      await getUsers()
    } catch (error) {
      alert(error.message);
    }

    
  };
  const addCanCashOut = async (user) => {
    const amount = prompt("Enter amount to add");
     if(isNaN(Number(amount)))return alert('cash must be in nummber')
    try {

      let id;
      const s = await getDocs(query(collection(db,'users'),where('email','==',user.email)))

      s.forEach(s=>id=s.id)
      const updateRef = doc(db, "users", id);

      await updateDoc(updateRef, {
        cash: Number(user.cash) + Number(amount),
      });
      alert("amount changed");
      await getUsers()
    } catch (error) {
      alert(error.message);
    }

    
  };

  useEffect(() => {
    isAdmin && getUsers();
  }, [isAdmin]);

  if (isAdmin === undefined) {
    return (
      <div
        style={{ display: "grid", placeContent: "center", minHeight: "100vh" }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (!username || !password)
              return alert("Please fill username and password field");
            if (
              username !== credentials.username &&
              password !== credentials.password
            )
              return navigate.replace("/");

            setIsAdmin(true);
          }}
          style={{
            maxWidth: "40rem",
            padding: "2rem",
            borderRadius: "2rem",
            background: "#fff",
            boxShadow: "-2rem 2rem 1rem #dd05, 0 0 2rem #3333",
          }}
        >
          <input
            style={{
              display: "block",
              width: "100%",
              marginTop: "1rem",
            }}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="username"
          />
          <input
            style={{
              display: "block",
              width: "100%",
              marginTop: "1rem",
            }}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />

          <button
            style={{
              background: "#00d",
              color: "white",
              width: "100%",
              borderRadius: "100vw",
              marginTop:'1rem',
              paddingBlock: ".5rem",
            }}
          >
            Log in
          </button>
        </form>
      </div>
    );
  }
  return (
    <div style={{ minHeight: "100vh", paddingTop: "10rem" }}>
      {users?.map((u) => (
        <div
          style={{
            maxWidth: '40rem',
            marginInline: 'auto',
            marginBottom: '2rem',
            padding: "1.5rem",
            borderRadius: "2rem",
            background: "#fff",
            boxShadow: "-1rem 1rem .5rem #3333",
          }}
        >
          <h4>
            {u.firstname} {u.lastname}
          </h4>
          <div>Current Cash: ${u.cash}</div>
          <button style={{padding: '.5rem 1rem',borderRadius:'100vw',margin:'.5rem'}} onClick={() => addCashFunc(u)}>Add Cash</button>
          <button style={{padding: '.5rem 1rem',borderRadius:'100vw',margin:'.5rem'}} onClick={() => deleteAUser(u)}>Delete User</button>
          <button style={{padding: '.5rem 1rem',borderRadius:'100vw',margin:'.5rem'}} onClick={()=>{
            alert(`
              First Name: ${u.firstname} \n
              Last Name: ${u.lastname} \n
              Email: ${u.email} \n
              ReferralCode: ${u.referralCode} \n
              Cash: $${u.cash} \n
              Phone: ${u.phone} \n
              `)
          }}>View User Details</button>
          <button style={{padding: '.5rem 1rem',borderRadius:'100vw',margin:'.5rem'}} onClick={()=>addCanCashOut(u)}>Make Cash Out</button>
        </div>
      ))}
    </div>
  );
};

export default AdminPage;
