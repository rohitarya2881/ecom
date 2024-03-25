import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <>

    <div className="NewsLetter">
        <div className="container gx-0">
            <div className="row gx-0">
                <div className="col-md-6">
                    <div className="NewsLetter_col1">
                        <h2>Join Us and Get Updates</h2>
                        <p>Sign Up for exclusive Offer, latest news and updates</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="NewsLetter_col2"></div>
                    <form action="">
                        <div className="form-input d-flex">
                            <input type="email" className="form-control"  placeholder="Enter Your Email"  ></input>
                            <button type="submit" className="btn btn-submit">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    
    
    </>
  )
}

export default NewsLetter