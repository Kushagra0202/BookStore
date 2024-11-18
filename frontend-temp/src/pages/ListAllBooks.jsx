import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Spinner from '../components/Spinner'
import  {useParams} from 'react-router-dom'
import BackButton from '../components/BackButton'



const ListAllBooks = () => {

  const[book,setBook] = useState([])
  const[loading,setLoading] = useState(false)
  const {id}=useParams()
  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:5555/books/${id}`).then((response)=>{
      console.log(response.data)
      setBook(response.data)
      setLoading(false)
    }).catch((error)=>{
      console.log(error)
      setLoading(false)
    })
  },[id])

  
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl'>Show Book</h1>
      {loading ? (<Spinner/>):(
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fill p-4'>
          <div className='my-4'> 
            <span className='text-xl mr-4 text-gray-500'>ID</span>
            <span>{book._id}</span>
          </div>
          <div className='my-4'> 
            <span className='text-xl mr-4 text-gray-500'>Title</span>
            <span>{book.title}</span>
          </div>
          <div className='my-4'> 
            <span className='text-xl mr-4 text-gray-500'>Author</span>
            <span>{book.author}</span>
          </div>
          <div className='my-4'> 
            <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
            <span>{book.publishYear}</span>
          </div>
        </div>
      )}
      
    </div>
  )
}

export default ListAllBooks
