import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import TagFilter from "./TagFilter";

export default {
  title: "Tag Filter",
  parameters: {
    component: TagFilter
  }
};

const items = [
  {
    id: "cbse",
    name: "CBSE",
    category: {
      name: "Title 1",
      id: "title-1"
    }
  },
  {
    id: "icse",
    name: "ICSE",
    category: {
      name: "Title 1",
      id: "title-1"
    }
  },
  {
    id: "jk",
    name: "J&K State Board",
    category: {
      name: "Title 2",
      id: "title-2"
    }
  },
  {
    id: "jharkand",
    name: "Jharkand",
    category: {
      name: "Title 2",
      id: "title-2"
    }
  },
  {
    id: "manipur",
    name: "Manipur Board",
    category: {
      name: "Title 1",
      id: "title-1"
    }
  },
  {
    id: "meghalaya",
    name: "Meghalaya Board",
    category: {
      name: "Title 1",
      id: "title-1"
    }
  },
  {
    id: "mizoram",
    name: "Mizoram Board",
    category: {
      name: "Title 2",
      id: "title-2"
    }
  },
  {
    id: "tn",
    name: "TN State Board",
    category: {
      name: "Title 2",
      id: "title-2"
    }
  },
  {
    id: "maharashtra",
    name: "Maharashtra State Board",
    category: {
      name: "Title 2",
      id: "title-2"
    }
  },
  {
    id: "punjab",
    name: "Punjab Board",
    category: {
      name: "Title 1",
      id: "title-1"
    }
  },
  {
    id: "goa",
    name: "Goa Board",
    category: {
      name: "Title 1",
      id: "title-1"
    }
  }
];

export const DefaultTagFilter = () => {
  const [data, setData] = useState(
    items.map(item => {
      return {
        ...item,
        isChecked: false
      };
    })
  );

  return (
    <TagFilter
      data={data}
      setData={setData}
      onCancel={action("Cancel")}
      onSubmit={action("Submit")}
    />
  );
};
