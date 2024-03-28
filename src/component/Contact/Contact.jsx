import "../About/About.css";
import "./contact.css"
const Contact = () => {
  return (
    <>
      <div className="About">
        <div className="container gx-0">
          <div className="row gx-0">
            <div className="col-12">
              <div className="About_col">
                <h1>Contact Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact">
  <div className="container-fluid fluid contact_main gx-0">
    <div className="row gx-0 align-items-center">
      <div className="col-md-6 text-center">
        <div className="contact_sec1">
          <div className="contact_h4">
            <h4>Contact Information</h4>
            <p>Fill the form below or write us. We will help you as soon as possible</p>
            <div className="row gx-0">
              <div className="col-md-6">
                <div className="contact_fm_1">
                  <i className="fa-solid fa-phone"></i>
                  <h4>phone no</h4>
                  <h6>91 808888888</h6>
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact_fm_2">
                  <i className="fa-solid fa-envelope"></i>
                  <h4>Email</h4>
                  <h6>shopee@shoppe.com</h6>
                </div>
              </div>
            </div>
            <div className="row gx-0">
              <div className="col-md-12">
                <div className="contact_fm_3">
                  <i className="fa-solid fa-location-dot"></i>
                  <h4>Address</h4>
                  <h6>Noida sector 6</h6>
                  <iframe src="https://www.google.com/maps/d/embed?mid=1x3-eSXrS2RYZOwNj3bHWcxCu6R0&hl=en&ehbc=2E312F"></iframe>                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="contact_sec2">
          <form   action="https://formspree.io/f/xleqpjwl" method="post">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Name</label>
              <input type="text" name="username" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" autoComplete="off" required />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput2" className="form-label">Email</label>
              <input type="email" name="email" className="form-control" id="exampleFormControlInput2" placeholder="Enter Your Email" autoComplete="off" required />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput3" className="form-label">Subject*</label>
              <input type="text" name="subject" className="form-control" id="exampleFormControlInput3" placeholder="Your Subject Here" autoComplete="off" required />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput4" className="form-label">Message</label>
              <textarea className="form-control" name="textarea" id="exampleFormControlInput4" placeholder="Type Your Message Here" rows="3" required></textarea>
              <button type="submit" className="contact_btn">Send Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Contact;
