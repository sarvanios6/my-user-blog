import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { PATHS } from '../../App'

const Landing = () => {
    const history = useHistory()
    useEffect(() => {
        if (localStorage.getItem('formData')) {
            history.push(PATHS.HOME)
        } else {
            history.push(PATHS.LOGIN)
        }
    }, [])
    return (
        <div>Loading...</div>
    )
}
export default Landing