import Concept from "./Concept";

const ConceptsList = (props) => {
  const [comp, state, event] = [
    props.concepts[0],
    props.concepts[1],
    props.concepts[2],
  ];
  return (
    <ul id="concepts">
      <Concept concept={comp} />
      <Concept concept={state} />
      <Concept concept={event} />
    </ul>
  );
};

export default ConceptsList;
