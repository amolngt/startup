import React  from 'react';

const Home=()=>{
  return(
    <div className="main">
        <div className="w-50 p-4">
        <h4 className="post_heading">This is home page</h4>
        <p>Some random text..</p>
        </div>
        <div className="row">
  <div className="column">
    <div className="card">
      <h3>Total categories</h3>
      <p>100</p>
      {/* <p>Some text</p> */}
    </div>
  </div>

  <div className="column">
    <div className="card">
      <h3>Total subcategories</h3>
      <p>100</p>
      {/* <p>Some text</p> */}
    </div>
  </div>
  
  <div className="column">
    <div className="card">
      <h3>Total products</h3>
      <p>100</p>
      {/* <p>Some text</p> */}
    </div>
  </div>
  
  <div className="column">
    <div className="card">
      <h3>Total orders</h3>
      <p>100</p>
      {/* <p>Some text</p> */}
    </div>
  </div>
</div>
  </div>
  )
}

export default Home;