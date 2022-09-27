class MyHeader extends HTMLElement {
  connectedCallback(){
      this.innerHTML = `
      <header id="top-nav" class="sticky-top">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html"><img src="images/logo.png" height="50" width="50" alt=""></a>
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
                  <li><a class="dropdown-item" href="hire-employee.html#contractor">Contract And Interim Solutions </a></li>
                  <li><a class="dropdown-item" href="hire-employee.html#project-solution">Project Solution</a></li>
                </ul>
              </li>
            
              <li class="nav-item">
              <a class="nav-link" href="pricing.html">Pricing</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="about.html">About</a>
          </li>
            
              <li class="nav-item">
                <a class="nav-link" href="blog.html">Blog</a>
              </li>
              <li class="nav-item">
              <a class="nav-link" href="#contact-us">Contact</a>
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