import "./App.css";

const MyComponent = () => {
  return <h1>Hello JSX!</h1>;
};

const Gretting = () => {
  const name = "John";
  return <h1>Hello {name}!!</h1>;
};

const LinkTag = () => {
  const url = "https://example.com";
  return (
    <a href={url} target="_blank">
      Visit ExampleWebsite{" "}
    </a>
  );
};

const ImageTag = () => {
  const ImageUrl = "https://via.placeholder.com/150";
  return (
    <div>
      <img src={ImageUrl} alt="placeHolder" />
    </div>
  );
};

const ProfileDetails = () =>{
  const details = {
    name: "John Doe",
    age: "25",
    email: 'jhonDoe@gmail.com',
    bio: "A Passinate Software Developer."
  }

  return(
    <>
      <h2>Profile Details</h2>
    <p>Name: {details.name}</p>
    <p>age: {details.age}</p>
    <p>email: {details.email}</p>
    <p>bio: {details.bio}</p>
    </>
  )
  
}

export default function App() {
  return (
    <div>
      {/* rendering Jsx */}
      <MyComponent />
      <Gretting />
      <LinkTag />
      <ImageTag />
      <ProfileDetails/>
    </div>
  );
}
