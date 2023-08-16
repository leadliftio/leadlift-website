import React from "react";
import moment from "moment";

const PostSnippet = (props: any) => {
  return (
    <div className="post-snippet">
      <h3>{props.title}</h3>
      <p>{props.summary}</p>
      <div>
        <div>
          By{" "}
          <strong>
            {props.author.first_name} {props.author.last_name}
          </strong>
        </div>
        <span className="publication-date">
          Published on {moment(props.published).format("YYYY-MM-DD")}
        </span>
      </div>
    </div>
  );
};

export default PostSnippet;
