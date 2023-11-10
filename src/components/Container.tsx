const Container = ({ children }: { children: string }) => {
  return (
    <div class="container container-lg mx-auto px-8 md:px-10">{children}</div>
  );
};

export default Container;
