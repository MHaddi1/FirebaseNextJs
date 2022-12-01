import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import {database} from "../../firebase"
import { useRouter } from "next/router"
import { useState } from "react";


function Update() {
    const router = useRouter();
    const id = router.query.id;
    const [name, setName] = useState("");
    const [marks, setMarks] = useState("");
    const updateFields = async (id: any) => {
        let fieldToEdit = doc(database, 'todos', id);
        await updateDoc(fieldToEdit, {
          name: name,
          marks: marks
        })
        .then(() => {
          alert('Data Updated')
        })
        .catch((err) => {
          console.log(err);
        })
    }

    // const getData = async () => {
    //     await getDoc(doc(database, "todos", studentId))
    //     .then((response) => {
    //       setName(response.data().name)
    //       setMarks(response.data().marks)
    //     })
    //   }

    
   
    return (
        <div className='flex flex-col items-center justify-center'>
            <h2>Add Detail</h2>
            <div className='bg-gray-500 w-6/12 gap-3 flex flex-col p-3'>
                <input
                    onChange={(e) => setName(e.target.value)}
                    name={name}
                    type="text"
                    placeholder='Enter Name'
                    className='h-7 px-2 w-full rounded-md'
                />
                <input
                    name={marks}
                    onChange={(e) => setMarks(e.target.value)}
                    type="number"
                    placeholder='Enter Marks'
                    className='h-7 px-2 w-full rounded-md'
                />
                <button
                // onClick={()}
                    className='bg-blue-500 w-full rounded-full py-1 text-white'>
                    Update
                </button>
            </div>
            <button
                className="text-blue-500"
                onClick={() => router.push("/")}>
                Back
            </button>

        </div>
    )
}

export default Update