import React from "react";

const CommentsBody = ({ avatar, author, date, commentText }) => {
	return (
		<div className="comment">
			<a className="avatar">
				<img alt="avatar" src={avatar} />
			</a>
			<div className="content">
				<a className="author">{author}</a>
				<div className="metadata">
					<span className="date">{date}</span>
				</div>
				<div className="text">{commentText}</div>
				<div className="actions">
					<a className="reply">Reply</a>
				</div>
			</div>
		</div>
	);
};

export default CommentsBody;
