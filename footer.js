class MyFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <footer id="footer">

        <div class="footer-top">
          <div class="container">
            <div class="row">
    
              <div class="col-lg-4 col-md-4 footer-contact">
                <h3>Address</h3>
                <p>
                  sifal <br>
                 kathmandu<br>
                 Nepal<br><br>
                  <strong>Phone:</strong>0123456789<br>
                  <strong>Email:</strong> info@example.com<br>
                </p>
              </div>
    
              <div class="col-lg-4 col-md-4 footer-links">
                <h4>Solution</h4>
                <ul>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Hire Complaintly</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Make Easy Payments</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Finance Team</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Legal Team</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Hiring managers</a></li>
                </ul>
              </div>
    
              <div class="col-lg-4 col-md-4 footer-links">
                <h4>Useful links</h4>
                <ul>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Hire employee</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Run Global Payroll</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Compliance</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy & policy</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#"></a></li>
           
                </ul>
              </div>
    
    
            </div>
          </div>
        </div>
    
        <div class="container">
    
          <div class="copyright-wrap d-md-flex py-4">
            <div class="me-md-auto text-center text-md-start">
              <div class="copyright">
                &copy; Copyright <strong><span>CubixTechNepal</span></strong>. All Rights Reserved
              </div>
            </div>
            <div class="social-links text-center text-md-right pt-3 pt-md-0">
              <a href="#" class="facebook"><i class="fa-brands fa-facebook"></i></a>
              <a href="#" class="twitter"><i class="fa-brands fa-twitter"></i></a>
              <a href="#" class="instagram"><i class="fa-brands fa-instagram"></i></a>
              <a href="#" class="linkedin"><i class="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
    
        </div>
      </footer>
        `
    }
  }
  customElements.define('my-footer', MyFooter)