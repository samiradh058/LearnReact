import PageNav from "../components/PageNav";

import { useAuth } from "../contexts/FakeAuthContext";

function Homepage() {
  const { isAuthenticated } = useAuth();

  console.log(isAuthenticated);
  return (
    <main>
      <PageNav />
      <h1>It is homepage.</h1>;
    </main>
  );
}

export default Homepage;
