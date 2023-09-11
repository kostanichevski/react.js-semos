// arrow function
// when we create functional components we don't use import
// react takes take of that for us

// react components always start with capital letters because react sees the small letters as html tags

export const Hello = () => {
  return (
    //inside jsx the html elements must always be contained inside a parent element
    // such as div or fragment (<> </>)
    <>
      <h1>Hello</h1>
      <h2>Kosta</h2>
    </>
  );
};
