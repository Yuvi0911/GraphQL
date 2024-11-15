import { useLazyQuery, useMutation } from '@apollo/client';
import { FormEvent, useState } from 'react';
import { addUser, getUsers } from './graphql/query/query';

type UserType = {
  name: string;
  age: number;
  gender: string;
}
const App = () => {
  // query ki help se hum data server se access kr skte h.
  // useQuery ki help se hum bina kisi trigger ki help se data ko access kr skte h, mtlb data continuous load hona start ho jaiye ga jab bhi is component pr aaye ge.
  // useLazyQuery ki help se hum kisi trigger like button click pr data ko server se access kr skte h.
  // const {loading, data, error } = useQuery(gql(getUsers));
  const [viewUsers, {loading, data, error } ]= useLazyQuery<{sampleUsers: UserType[]}>(getUsers);

  const [add, { data: addUserResponse }] = useMutation<{newUser: string;},{name:string,age:number,gender:string}>(addUser)

  console.log(addUserResponse);

  const [name, setName] = useState("");
  const [age, setAge] = useState(1);
  const [gender, setGender] = useState("");


  if(error) return <h1>Some Error Occured</h1>

  console.log(data);

  const submitHandler = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    add({
      variables: {
        name,
        age,
        gender
      }
    })
    
  }

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <h1>Course Below</h1>
      {
        data?.sampleUsers.map((sampleUser) => (
          <div key={sampleUser.name}>
            <p>{sampleUser.name}</p>
            <p>{sampleUser.age}</p>
            <p>{sampleUser.gender}</p>
          </div>
        )
      )
      }
      <button onClick={() => viewUsers()}>View Users</button>
      <form onSubmit={submitHandler} style={{
        display: "flex",
        flexDirection:"column",
        gap:"1rem",
        maxWidth:"300px",
        margin:"auto"
      }}>
        <input 
          type='text' 
          placeholder='Name' 
          value={name}  
          onChange={(e)=>setName(e.target.value)}
        />
        <input 
        type='number' 
        placeholder='Age' 
        value={age}  
        onChange={(e)=>setAge(Number(e.target.value))}
        />
        <input 
        type='text' 
        placeholder='Gender' 
        value={gender}  
        onChange={(e)=>setGender(e.target.value)}
        />
        <button type='submit'>Add User</button>
      </form>
    </div>
  )
}

export default App
