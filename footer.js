class MyFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <!-- ======= Footer ======= -->

        <section>
        <div class="container-fluid top-footer">
           <div class="container p-3">
           <div class="row">
          
           <div class="col-md-12 d-none d-md-block d-lg-block useful-link">
              <ul>
                 <li>Hire Employee</li>
                 <li>Contract & Interim Solution</li>
                 <li>Project Solutions</li>
              </ul>
           </div> 
           
           <div class="col-sm-12  d-md-none  d-lg-none useful-link">
              <ul>
                 <li>Hire Employee</li>
              </ul>
           </div> 
           <div class="col-sm-12 d-md-none  d-lg-none useful-link">
              <ul>
                 <li>Contract & Interim Solution</li>
              </ul>
           </div> 
           <div class="col-sm-12 d-md-none  d-lg-none useful-link">
              <ul>
                 <li>Global Manges Payroll</li>
              </ul>
           </div> 
          
           <div class="col-lg-12 social-media">
           <p class="text-center text-white">Follow Us On</p>
              <a href="#" class="twitter"><i class="fa-brands fa-twitter"></i></a>
              <a href="#" class="facebook"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="#" class="instagram"><i class="fa-brands fa-instagram"></i></a>
              <a href="#" class="linkedin"><i class="fa-brands fa-linkedin"></i></a>
           </div>
           <div class="col-md-12 text-center pt-2">
              <a href="#" class="policy" >Privacy Policy</a><br>
              <a href="#" class="policy"> Terms & Condition</a>
           </div>
           </div>
        </div>
        </div>
      </section>
      
      
      <footer class="footer p-2">
        <div class="container">
           <div class="row">
              <div class="col-md-12">
           <div class="copyright">
             &copy; Copyright <strong><span>CubixTech</span></strong>. All Rights Reserved
           </div>
        </div>
        <div class="col-md-12">
           <div class="credits">
             Designed by <a href="">CubixTech</a>
           </div>
        </div>
         </div>
        </div>
      </footer>
       <!-- End Footer -->
        `
    }
  }
  customElements.define('my-footer', MyFooter)