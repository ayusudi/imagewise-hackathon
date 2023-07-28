import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const forbiddenAccess = () => {
  return MySwal.fire({
    title: <p>Forbidden</p>,
    text: "You don't have any credit",
    icon: 'error',
    confirmButtonText: 'OK'
  })
}

export default forbiddenAccess