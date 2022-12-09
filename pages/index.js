import { useRouter } from "next/router"
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { database } from "../firebase";
import { useState, useEffect } from "react";

function Index() {
  const router = useRouter();
  const [studentsData, setStudentsData] = useState([]);

  useEffect(() => {
    if (!sessionStorage.getItem("username")) {
      router.push('/auth/login')
    }
  }, []);

  useEffect(() => {
    getData();
  }, [])


  const getData = async () => {
    await getDocs(collection(database, 'todos'))
      .then((response) => {
        return setStudentsData(response.docs);
      })
  }

  const deleteStudent = async (id) => {
    let fieldToDelete = doc(database, 'todos', id);
    await deleteDoc(fieldToDelete)
      .then(() => {
        alert('Data Deleted')
      })
      .catch((err) => {
        console.log(err);
      })

  }

  // const id = router.query.id;
  // console.log(id);
  const logout = () => {
    sessionStorage.removeItem('username');
    router.push('/auth/login')
  }

  return (
    <div className='w-8/12 mx-auto pt-2'>
      <button className='bg-blue-500 py-2 px-1 rounded-md my-1 text-white hover:bg-blue-600'
        onClick={logout}>
        Logout
      </button>
      <button
        onClick={() => router.push("/students/insert")}
        className='bg-blue-500 py-2 px-1 rounded-md my-1 text-white hover:bg-blue-600'>Insert</button>
      <table className='w-full'>
        <thead className='h-10 w-full'>
          <tr className='bg-gray-500'>
            <th>Name</th>
            <th>Marks</th>
            <th>Action</th>
          </tr>

        </thead>
        <tbody className='bg-white h-10 text-center'>
          {
            studentsData.map((item) => (
              <tr key={item.id} className="border-b" >
                <td>{item.data().name}</td>
                <td>{item.data().marks}</td>
                <td>
                  <button
                    onClick={() => router.push("/students/update/" + item.id)}
                    className='bg-green-500 py-1 px-1 rounded-md text-white hover:bg-green-600'>Update</button>
                  <button onClick={() => deleteStudent(item.id)}
                    className='bg-red-500 py-1 px-1 rounded-md text-white hover:bg-red-600 mx-1'>Delete</button>
                </td>
              </tr>
            ))}


        </tbody>
      </table>
    </div >
  )
}

export default Index