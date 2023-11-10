import Container from "../Container";
import { NavItem } from "./components/NavItem";

const Navigation = () => {
  return (
    <>
      <div class="bg-sky-400 p-1 mb-6"></div>
      <Container>
        <nav>
          <ul class="flex flex-row gap-8">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/posts">Posts</NavItem>
          </ul>
        </nav>
      </Container>
    </>
  );
};

export default Navigation;
