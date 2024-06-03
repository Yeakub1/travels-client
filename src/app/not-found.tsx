import NotFound from "@/component/NotFound/NotFound";

import React from "react";

const NotFoundPage = () => {
  return (
    <div>
      {" "}
      <NotFound
        title=" 404"
        semiTitle=" Something's missing."
        paragraph=" Sorry, we can't find that page. You'll find lots to explore on the
          home page."
        button={true}
      />
    </div>
  );
};

export default NotFoundPage;
