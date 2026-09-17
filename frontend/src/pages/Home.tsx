import { Link } from "react-router-dom"

function Home() {
  return (
    <main>
      <section>
        <h1>
          Application Manager
        </h1>
      </section>

      <section>
        <h2>Key features</h2>

        <ul>
          <li>
            <h3>All applications in one place</h3>
            <p>Keep your job and study applications organized in one place.</p>
          </li>

          <li>
            <h3>Track application status</h3>
            <p>
              Keep track of where you are in the application process, from
              interested to accepted or rejected.
            </p>
          </li>

          <li>
            <h3>Never miss a deadline</h3>
            <p>Keep crucial deadlines visible and easy to track.</p>
          </li>

          <li>
            <h3>Keep important details together</h3>
            <p>
              Store requirements, links, notes, contacts and other useful
              information alongside each application.
            </p>
          </li>
        </ul>
</section>

      <section>
        <h2>How to use</h2>

        <ol>
          <li>Create an account</li>
          <li>Add an application</li>
          <li>Track it status</li>
          <li>Enjoy your new job / university!</li>
        </ol>
      </section>

      <section>
        <h2>Get started</h2>

        <p>Ready to organize your applications? Try it out for yourself, totally for free!</p>

        <Link to='/login'>Log In</Link>
        <Link to='/register'>Register</Link>
      </section>
    </main>
  )
}

export default Home