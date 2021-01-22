import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './allUsers.css';
import { addUserTask } from '../../../redux/actions';

const AllUsers = () => {
  const users = useSelector((state) => state.users.allUsers);
  const columns = useSelector((state) => state.listColumn.allListColumns);
  const issues = useSelector((state) => state.issues.allIssues);
  // const allId = useSelector((state) => state.users.arrayForId);
  const issuesId = useSelector((state) => state.issues.idArray);
  console.log('AllUsers -> users', users);

  const dispatch = useDispatch();

  const setTask = (selectedUserId) => {
    // console.log('setTask -> selectedUserId', selectedUserId);

    dispatch(addUserTask(selectedUserId));
  };

  const issuesIds = useSelector((state) => state.issues.idArray);

  return (
    <div className="wrapAvatars">
      {users.map((user) => (
        <img
          onClick={() => {
            setTask(user.value);
          }}
          className={
            issuesIds.includes(user.value) ? 'avatarImageSelect' : 'avatarImage'
          }
          alt=""
          src={user.avatarImageUrl}
        />
      ))}
      {/* {console.log('AllUsers -> issues', issuesId)} */}
    </div>
  );
};

export default AllUsers;
