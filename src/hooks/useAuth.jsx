import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export const useAuth = () => {
const  {token}  = useSelector(state => state.user)
const navigate = useNavigate()
useEffect(() => {
if (!token) navigate('/signin')
}, [navigate, token])

  return {token}
}