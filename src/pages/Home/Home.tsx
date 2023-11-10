import Form from "../../components/LoginForm";

const Home = () => {
  return (
    <>
      <section class="grid md:grid-cols-2 py-8 gap-4">
        <div>
          <p class="text-white">hello</p>
        </div>
        <aside class="flex flex-col items-center justify-center">
          <div class="flex flex-col">
            <Form formData={{}} />
          </div>
        </aside>
      </section>
    </>
  );
};

export default Home;
