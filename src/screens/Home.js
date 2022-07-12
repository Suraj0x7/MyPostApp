import React from 'react'
import './Home.css'

function Home() {
  return (
    <div>
      <section className='hero-section'>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
      <div className="carousel-caption d-none d-md-block">
        <h5 >First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </section>

      <section className='featured-posts container pt-2'>
           <h3 className='text-center text-uppercase py-4'>Featured posts</h3>
           <div className='row'>
                <div className='col-lg4 col-md-4 col-sm-12'>
                          <div className="card">
                          <img src="https://images.unsplash.com/photo-1510082460461-62a0f312e2e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className='d-grid'>
                            <a href="#" className="btn btn-warning">Read More</a>
                            </div>
                          </div>
                        </div>
                </div>
                <div className='col-lg4 col-md-4 col-sm-12'>
                          <div className="card">
                          <img src="https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className='d-grid'>
                            <a href="#" className="btn btn-warning">Read More</a>
                            </div>
                          </div>
                        </div>
                </div>
                <div className='col-lg4 col-md-4 col-sm-12'>
                          <div className="card">
                          <img src="https://images.unsplash.com/photo-1601758003122-53c40e686a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className='d-grid'>
                            <a href="#" className="btn btn-warning">Read More</a>
                            </div>
                          </div>
                        </div>
                </div>
           </div>
      </section>

      <section className='latest-posts container pt-2'>
           <h3 className='text-center text-uppercase py-4'>Lastest posts</h3>
           <div className='row'>
                <div className='col-lg4 col-md-4 col-sm-12'>
                          <div className="card">
                          <img src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ0fHxob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className='d-grid'>
                            <a href="#" className="btn btn-warning">Read More</a>
                            </div>
                          </div>
                        </div>
                </div>
                <div className='col-lg4 col-md-4 col-sm-12'>
                          <div className="card">
                          <img src="https://images.unsplash.com/photo-1526363269865-60998e11d82d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ3fHxob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className='d-grid'>
                            <a href="#" className="btn btn-warning">Read More</a>
                            </div>
                          </div>
                        </div>
                </div>
                <div className='col-lg4 col-md-4 col-sm-12'>
                          <div className="card">
                          <img src="https://images.unsplash.com/photo-1580229064033-d6cf020b2cf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ5fHxob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className='d-grid'>
                            <a href="#" className="btn btn-warning">Read More</a>
                            </div>
                          </div>
                        </div>
                </div>
           </div>
      </section>
      <section className=' container-fluid bg-primary bg-gradient mt-4' style={{minHeight:"180px"}}>
             <div className='d-flex flex-column justify-content-center align-items-center'>
             <i className="fs-1 text-warning my-3 fa-solid fa-location-dot"></i>
              <h2 className='text-white text-uppercase'>We Have Wide Variety Of Posts</h2>
              <button className='btn  btn-warning my-2 text-uppercase fw-bold'>View All Posts</button>
              </div>
      </section>

      <section className='our-portfolio container'>
            <h3 className='text-center text-uppercase py-4'>Our Portfolio</h3>
                    <div className="container">
                    <div className="row g-2">
                      <div className="col-6">
                        <div className="p-1 border bg-light">
                        <img src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTgxfHxob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />

                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-3 border bg-light">
                        <img src="https://images.unsplash.com/photo-1584738766473-61c083514bf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkzfHxob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-3 border bg-light">
                        <img src="https://images.unsplash.com/photo-1463741408080-b210ee5227dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA3fHxob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-3 border bg-light">
                        <img src="https://images.unsplash.com/photo-1514894780887-121968d00567?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjEyfHxob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
                        </div>
                      </div>
                    </div>
                  </div>
      </section>
    </div>
  )
}

export default Home