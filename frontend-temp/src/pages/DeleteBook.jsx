import React,{useState} from 'react'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const DeleteBook = () => {

  const[loading,setLoading] = useState(false);
  const navigate=useNavigate()
  const {id} = useParams()
  const {enqueueSnackbar} = useSnackbar()
  const handleDeleteBook  = ()=>{
          setLoading(true)
          axios.delete(`http://localhost:5555/books/${id}`).then((response)=>{
            setLoading(false)
            enqueueSnackbar('Book deleted successfully',{variant:'success'})
            navigate('/')
          }).catch((error)=>{
            setLoading(false)
            console.log(error)
            enqueueSnackbar("An error occured",{variant:'error'})

          })
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner/>:''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
          <h3 className='text-2xl'>Are you sure you want to delete this book?</h3>
          <button className='p-4 text-white bg-red-600 mt-8 rounded-xl' onClick={handleDeleteBook} >Delete</button>
      </div>
      
    </div>
  )
}

export default DeleteBook
