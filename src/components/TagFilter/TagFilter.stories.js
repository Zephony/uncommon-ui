import React from "react";
import TagFilter from "./TagFilter";

export default {
  title: "Tag Filter",
  parameters: {
    component: TagFilter
  }
};

export const defaultTagFilter = () => {
  return <TagFilter />;
};
