import {useRouter} from "next/router"
import { collection, getDocs } from 'firebase/firestore'
import { database } from "../firebase";
import { useState } from "react";

function Index() {
 

const [studentsData, setStudentsData] = useState([]);

const getData = async () => {
    await getDocs(collection(database, 'todos'))
    .then((response) => {
      return setStudentsData(response.docs);
    })
  }
  const router = useRouter();
  const id = router.query.id;
  console.log(id);
  
   return (
    <div className='w-8/12 mx-auto pt-2'>
      <button 
      onClick={()=>router.push("/insert")}
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
          <tr className="border-b">
            <td>Haddi</td>
            <td>99</td>
            <td>
              <button 
              onClick={()=>router.push("/update/id"+"e1")}
              className='bg-green-500 py-1 px-1 rounded-md text-white hover:bg-green-600'>Update</button>
              <button className='bg-red-500 py-1 px-1 rounded-md text-white hover:bg-red-600 mx-1'>Delete</button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default Index