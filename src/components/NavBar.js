const NavBar = () => {
    return (
      <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ICS2608</a>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a className="nav-link" href="/myfirstreact">Home</a>
        <a className="nav-link" href="/myfirstreact/employee">Employee</a>
        <a className="nav-link" href="/myfirstreact/add">Add Employee</a>
        <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>
</div>
    );
}

export default NavBar;