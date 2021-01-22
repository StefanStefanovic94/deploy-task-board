import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../atom/button';
import AllUsers from '../../organism/allUsers';
import ListColumn from '../../organism/listColumn';

const Board = () => {
  return (
    <div>
      <div className="buttonTask">
        <Link to="/create_task">
          <Button value="Create Task" />
        </Link>
        <div>
          <AllUsers />
        </div>
      </div>
      <ListColumn />
      <div>
        <Link to="/create_column">
          <Button value="Create Column" />
        </Link>

        <Link to="/create_user">
          <Button value="Create User" />
        </Link>
      </div>
    </div>
  );
};

export default Board;
