import React from "react";
import faker from "faker";
import moment from "moment";
import CommentsBody from "../commentsBody/CommentsBody";
import ApprovalCard from "../ApprovalCard/ApprovalCard";

const Comments = () => {
	return (
		<div className="comments">
			<div className="ui container comments">
				<h3 className="ui dividing header">Comments</h3>
				<ApprovalCard>
					<div>
						<h4>Warning!</h4>
						<p>Are you sure want to do this?</p>
					</div>
				</ApprovalCard>
				<br />
				<ApprovalCard>
					<CommentsBody
						avatar={faker.image.avatar()}
						author={faker.internet.userName()}
						date={moment(faker.date.recent(), "YYYYMMDD").fromNow()}
						commentText={faker.lorem.sentences()}
					/>
				</ApprovalCard>
				<br />
				<ApprovalCard>
					<CommentsBody
						avatar={faker.image.avatar()}
						author={faker.internet.userName()}
						date={moment(faker.date.recent(), "YYYYMMDD").fromNow()}
						commentText={faker.lorem.sentences()}
					/>
				</ApprovalCard>
				<br />
				<ApprovalCard>
					<CommentsBody
						avatar={faker.image.avatar()}
						author={faker.internet.userName()}
						date={moment(faker.date.recent(), "YYYYMMDD").fromNow()}
						commentText={faker.lorem.sentences()}
					/>
				</ApprovalCard>
				<br />
			</div>
		</div>
	);
};

export default Comments;
