class MyFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <!-- ======= Footer ======= -->
        <footer id="footer">
          <div class="footer-top">
            <div class="container">
              <div class="row">
      
                <div class="col-lg-4 col-md-6">
                  <div class="footer-info">
                    <h3>Address</h3>
                    <p>
                      Sifal,kathmandu <br>
                      Nepal<br><br>
                      <strong>Phone:</strong> +1 5589 55488 55<br>
                      <strong>Email:</strong> info@example.com<br>
                    </p>
                    <div class="social-links mt-3">
                      <a href="#" class="twitter"><i class="fa-brands fa-twitter"></i></a>
                      <a href="#" class="facebook"><i class="fa-brands fa-facebook"></i></a>
                      <a href="#" class="instagram"><i class="fa-brands fa-instagram"></i></a>
                      <a href="#" class="linkedin"><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
      
                <div class="col-lg-2 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li><i class="bx bx-chevron-right"></i> <a href="#">Hire Employee</a></li>
                    <li><i class="bx bx-chevron-right"></i> <a href="#">Global Contractor</a></li>
                    <li><i class="bx bx-chevron-right"></i> <a href="#">Global Payroll</a></li>
                    <li><i class="bx bx-chevron-right"></i> <a href="#">Compliance</a></li>
                    <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                  </ul>
                </div>
      
                <div class="col-lg-3 col-md-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                    <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                    <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                    <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                    <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                  </ul>
                </div>

                <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                </ul>
              </div>
      
             
      
              </div>
            </div>
          </div>
      
          <div class="container">
            <div class="copyright">
              &copy; Copyright <strong><span>CubixTechNepal</span></strong>. All Rights Reserved
            </div>
            <div class="credits">
             
              Designed by <a href="https://bootstrapmade.com/">CubixTechNepal</a>
            </div>
          </div>
        </footer><!-- End Footer -->
        `
    }
  }
  customElements.define('my-footer', MyFooter)