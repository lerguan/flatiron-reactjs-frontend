import { useParams } from "react-router-dom";

function AddressSearchLink({ address }) {
  return <h3>https://www.google.com/{address}</h3>;
}

export default AddressSearchLink;
