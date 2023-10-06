const Concept = (props) => {
  const [image, title, desc] = [
    props.concept.image,
    props.concept.title,
    props.concept.desc,
  ];
  return (
    <li className="concept">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
    </li>
  );
};

export default Concept;
