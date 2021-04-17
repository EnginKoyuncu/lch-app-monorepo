import { useAuth } from "../../Auth/AuthProvider";

const Home = () => {
    const {user, token} = useAuth();
    console.log(user);
    console.log(token);
    return (
        <>
        <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Welcome to the library of computer hardwares</h1>
        <p class="lead text-muted">Go check some parts or some brands</p>
        <p>
          <a href="/parts" class="btn btn-primary my-2">Parts</a>
          <a href="/brands" class="btn btn-secondary my-2">Brands</a>
        </p>
      </div>
    </div>
  </section>

  </>

    )

};



export default Home;