export const AuthorCard = () => {
  return (
    <div class="flex flex-col items-center py-4 px-6 space-y-4">
      <div class="inline-block rounded-full w-24 h-24 bg-sky-200"></div>
      <div class="flex flex-col items-center space-y-2">
        <span class="text-white font-bold">Name</span>
        <span class="text-sky-200 text-sm text-center">
            I'm a full stack developer, building stuff.
        </span>
      </div>
    </div>
  );
};
