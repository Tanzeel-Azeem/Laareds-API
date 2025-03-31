// "use client";

// import { useEffect, useState } from "react";


// interface IComment{
//   "userId": number,
//     "id": number,
//     "title": string

// }



// const Comment = () => {

//     const [ commentData , setCommentData ] = useState<IComment[]>([])

//     useEffect( () => { 
//         async function fetchData() {

//             const res = await fetch ('https://jsonplaceholder.typicode.com/albums')

//             const data = await res.json()
            
//             setCommentData(data)
            
            
//         }
//         fetchData()
//     })


//   return (
//     <div>
//         <h1 className="text-4xl text-center bg-black text-white py-7 font-semibold">Comments</h1>

//         <ul >

//             { commentData.map( (comment) => {
//                 return (
//                     <li className="my-4 bg-black  text-white py-10" key={comment.id}>
//                         <div>
//                             <h1>
//                                Id :  {comment.id}
//                             </h1>
//                             <h1>
//                                Album Tittle :  {comment.title}
//                             </h1>
                            
                          
//                         </div>
//                     </li>
//                 )
//             } ) }


//         </ul>


//     </div>
//   )
// }

// export default Comment