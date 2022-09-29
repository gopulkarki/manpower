class MyFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <!-- ======= Footer ======= -->
        <section class="top-footer">
     
        <div class="container">
           <div class="row">
              <div class="col-md-6 col-lg-2 address order-1  ">
                 <h2>Address</h2>
                 <p>Sifal<br>Kathmandu, Nepal<br>
                 Email: contact@gmail.com</p>
              </div>
              <div class="col-md-6 col-lg-5 order-2 useful-link  ">
                 <h3>Useful Links</h3>
                 <ul style="padding-left:0;">
                    <li>About</li>
                    <li>Hire employee</li>
                    <li>Contractor & Interim Solution</li>
                    <li>Project Solution</li>
                 </ul>
              </div>
              <div class="col-md-6 col-lg-3 order-3 useful-link  ">
                 <h3>Useful Links</h3>
                 <ul style="padding-left:0;">
                    <li>Blog</li>
                    <li>Pricing</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Condition</li>
                 </ul>
              </div>
              <div class="col-md-6 col-lg-2 social-media order-4  ">
                 <p class="mb-0"> Follow us on: </p>
                 <a href="#" class="twitter"><i class="fa-brands fa-twitter"></i></a>
                 <a href="#" class="facebook"> <i class="fa-brands fa-facebook"></i></a>
                  <a href="#" class="instagram"><i class="fa-brands fa-instagram"></i></a>
                 <a href="#" class="linkedin"><i class="fa-brands fa-linkedin"></i></a>
              </div>
           </div>
        </div>
  </section>
  <footer class="footer pt-4 pb-4">
     <div class="container">
        <div class="row">
           <div class="col-md-12">
              <div class="copyright">
                 &copy;2022 Copyright <strong><span>CubixTech</span></strong>. All Rights Reserved
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