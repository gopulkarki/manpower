class MyHeader extends HTMLElement {
  connectedCallback(){
      this.innerHTML = `
      <header id="top-nav" class="sticky-top">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html"><img src="images/logo.png" alt="">logo</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
             
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Product
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="hire-employee.html">Hire employee</a></li>
                  <li><a class="dropdown-item" href="global-contracter.html">Global Contractor</a></li>
                  <li><a class="dropdown-item" href="global-payroll.html">Global Manages Payroll</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Solutions
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                 
                  <li><a class="dropdown-item" href="#">Hire Complaintly</a></li>
                  <li><a class="dropdown-item" href="#">Make Easy Payments</a></li>
    
                  <li><a class="dropdown-item" href="#">Finance Team</a></li>
                  <li><a class="dropdown-item" href="#">Legal Team</a></li>
                  <li><a class="dropdown-item" href="#">Hiring managers</a></li>
    
                  <li><a class="dropdown-item" href="#">Startup</a></li>
                  <li><a class="dropdown-item" href="#">Enterprise</a></li>
                
                </ul>
              </li>
           
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Requirement
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Hire employee</a></li>
                  <li><a class="dropdown-item" href="#">Run Global Payroll</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             About Us
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Hire employes</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Partner Program
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Compliance</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    
    
      `
  }
}
customElements.define('my-header', MyHeader)