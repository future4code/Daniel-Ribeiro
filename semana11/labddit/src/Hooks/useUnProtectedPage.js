import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToPosts } from '../Router/Coordinator'

const useUnProtectedPage = () => {
  const history = useHistory()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      goToPosts(history)
    }
  }, [history])
}

export default useUnProtectedPage;