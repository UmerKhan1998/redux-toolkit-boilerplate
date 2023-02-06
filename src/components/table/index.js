import React from "react";
import { Space, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../redux/userDataSlice";
const { Column } = Table;

const TableComp = ({
  showModalEdit,
  editStateIndex,
  setEditStateIndex,
  userDataReducer,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <Table dataSource={userDataReducer}>
        <Column title="First Name" dataIndex="firstName" key="firstName" />
        <Column title="Last Name" dataIndex="lastName" key="lastName" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Phone" dataIndex="phone" key="phone" />
        <Column
          title="Action"
          key="action"
          render={(_, record, index) => (
            <Space size="middle">
              <a
                onClick={() => {
                  showModalEdit();
                  setEditStateIndex(index);
                }}
              >
                Edit
              </a>
              <a onClick={() => dispatch(deleteUser(index))}>Delete</a>
            </Space>
          )}
        />
      </Table>
    </>
  );
};

export default TableComp;
