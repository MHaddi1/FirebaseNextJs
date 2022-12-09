import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/router"
import { useState } from "react";
import { database } from "../../firebase";

function Insert() {
    const [name, setName] = useState("");
    const [marks, setMarks] = useState("");

    const AddValue = () => {

        addDoc(collection(database, 'todos'), {
            name: name,
            marks: marks
        })
            .then(() => {
                alert('Data Saved');
                setName('');
                setMarks('');
            })
            .catch((err) => {
                console.log(err);
            })
        // console.log(name);
        // console.log(marks);

    }

    const router = useRouter();
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
                    onClick={() => AddValue()}
                    className='bg-blue-500 w-full rounded-full py-1 text-white'>
                    Add
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

export default Insert