function Profile(props) {
  function logout() {
    localStorage.removeItem('token');
    window.location.reload();
  }

  return (
    <div>
      <button onClick={logout}>Выйти</button>
    </div>
  );
}

export default Profile;
