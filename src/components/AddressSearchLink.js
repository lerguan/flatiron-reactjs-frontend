function AddressSearchLink({ address }) {
  const linkAddress = `https://www.google.com/search?q=${address}`;

  return (
    <div>
      <h2>Use following link to get more information about the property</h2>
      <a href={linkAddress}>{address}</a>
    </div>
  );
}

export default AddressSearchLink;
