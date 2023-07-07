import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from "react";

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts
				posts={props.state.posts}
				addPost={props.addPost}
				newPostText={props.state.newPostText}
				updateNewPostText={props.updateNewPostText}
			/>
		</div>
	)
}

export default Profile;