
function BucketCard(props) {
  return (
    <div className='bg-light border p-4 m-2'>
      <h4>{props.list.name}</h4>
    </div>
  );
}

export default BucketCard;