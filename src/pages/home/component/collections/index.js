import React from "react";
import Collection from "../../../../components/collection";
import { COLLECTIONS } from "../../../../constant";

const Collections = () => {
  return (
    <div className="collection_list">
      {COLLECTIONS.map((colection, index) => (
        <Collection colection={colection} key={index} />
      ))}
    </div>
  );
};

export default Collections;
