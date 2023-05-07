import { Button } from "bootstrap";

function ImageShow({ image }) {
  //   return <img style={{ width: "250px" }} src={image.urls.full} alt="Kuh bhi" />;

  return (
    <div>
      <img alt={image.id} src={image.urls.small} />
      <br />
    </div>
  );
}

export default ImageShow;
