const Report = () => {
  return (
    <div className="container">
     <h1>Report</h1>
      <hr></hr>
<h6>The following report for the Assignment-03 is presented by group ReWebDev, formed by MAHFUZ AFTAB - #200499643 and RABIH NADER - #200506633</h6>
        

        <div className="col">
          <h4 className="fs-2">Research</h4>
          <p>ReWebDev gone through an extensive research on avialble online resources about react react components, hooks and best coding practice to implement them accordingly.</p>
        </div>

        <div className="col">
          <h4 className="fs-2">Functional Components</h4>
          <ul>
            <li>Newsfeed API</li>
            <li>Stock API</li>
            <li>Country API</li>
            <li>CheckList Tool</li>
            <li>Calculator Tool</li>
            <li>Sign Up</li>
            <li>Login</li>
          </ul>
        </div>

        <div className="col">
          <h4 className="fs-2">Color Pallete</h4>
          <p>Following the recent trend of minimalistic website with sleeck and clean UI, ReWebDev used primarily 2 colors - yellow and white.</p>
        </div>

        <div className="col">
          <h4 className="fs-2">Getsalt Principles</h4>
          <ul>
            <li>Continuation</li>
            <li>Proximity</li>
            <li>Similarity</li>
          </ul>
        </div>

      <section className="row flex-column mt-4">
        <div className="col">
          <h2 className="fs-2">Hooks</h2>
          <ol>
            <li>useEffect</li>
            <li>useHistory</li>
            <li>useState</li>
          </ol>
        </div>
      </section>

      
        <div className="col">
          <h4 className="fs-2">APIs</h4>
          <p>The 03 different APIs are as follows, </p>
          <ol>
            <li>News - https://newsapi.org</li>
            <li>Stock Updates - https://www.alphavantage.co</li>
            <li>Country Details - https://restcountries.com</li>
          </ol>
        </div>

        <div className="col">
          <h4 className="fs-2">Participation Report</h4>
          <p>Both the group members contributed equally for the development of the Assignment 03 website starting from project planning, web UI design fixing to solving problems during development. RABIH NADER worked on User Authentication, Firebase Setup, Checklist Tools and MAHFUZ AFTAB worked on Calculator Tool, News Feed, IBM Stock Updates, Country Details API.</p>
        </div>
    </div>
  )
}

export default Report