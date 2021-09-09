import withAuth from '../auth/withAuth';
import { useUser } from '../auth/useUser';

const Private = () => {
  const { user, logout } = useUser();

  return (
    <div >
      <div>Private</div>
      {
        user?.email &&
        <div>
          <div>Email: {user.email}</div>
          <button onClick={() => logout()}>Logout</button>
         
          
          <div><a href="/">retour accueil</a></div>
        </div> 
      }
    </div>
  )
}

export default withAuth(Private);