import React, { useLayoutEffect, useState } from "react";
import "./App.css";
import TableComp from "./components/table";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input, Modal } from "antd";
import styled from "styled-components";
import { addUser, editUser } from "./redux/userDataSlice";

function App() {
  const userDataReducer = useSelector((state) => state?.userData);
  console.log(userDataReducer, "userDataReducer");

  const dispatch = useDispatch();
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
    phone: "",
  };

  const [addUserState, setAddUserState] = useState(initialState);
  const inputHandler = (e) =>
    setAddUserState({ ...addUserState, [e.target.name]: e.target.value });
  console.log("addUserState", addUserState);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    dispatch(addUser(addUserState));
    // setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const showModalEdit = () => {
    setIsModalOpenEdit(true);
  };
  const handleOkEdit = () => {
    dispatch(editUser(addUserState));
  };
  const handleCancelEdit = () => {
    setIsModalOpenEdit(false);
  };
  const [editStateIndex, setEditStateIndex] = useState();

  console.log(
    "userDataReducerEdit",
    userDataReducer[editStateIndex]?.firstName
  );

  const initialStateEdit = {
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
    phone: "",
  };

  const [addUserEditState, setAddUserEditState] = useState(initialStateEdit);
  const inputHandlerEdit = (e) =>
    setAddUserEditState({
      ...addUserEditState,
      [e.target.name]: e.target.value,
    });
  console.log("addUserEditState", addUserEditState);

  useLayoutEffect(() => {
    setAddUserEditState({
      ...addUserEditState,
      firstName: userDataReducer[editStateIndex]?.firstName,
      lastName: userDataReducer[editStateIndex]?.lastName,
      email: userDataReducer[editStateIndex]?.email,
      age: userDataReducer[editStateIndex]?.age,
      phone: userDataReducer[editStateIndex]?.phone,
    });
  }, [userDataReducer, editStateIndex]);

  return (
    <div className="App">
      <Modal
        title="Edit User Modal"
        open={isModalOpenEdit}
        onOk={handleOkEdit}
        okText={"Add User"}
        onCancel={handleCancelEdit}
      >
        <StyledForm>
          <Input
            type="text"
            placeholder="First Name"
            name={"firstName"}
            onChange={inputHandlerEdit}
            value={addUserEditState?.firstName}
          />
          <Input
            type="text"
            placeholder="Last Name"
            name={"lastName"}
            onChange={inputHandlerEdit}
            value={addUserEditState?.lastName}
          />
          <Input
            type="email"
            placeholder="Email Address"
            name={"email"}
            onChange={inputHandlerEdit}
            value={addUserEditState?.email}
          />
          <Input
            type="number"
            placeholder="Age"
            name={"age"}
            onChange={inputHandlerEdit}
            value={addUserEditState?.age}
          />
          <Input
            type="number"
            placeholder="Phone"
            name={"phone"}
            onChange={inputHandlerEdit}
            value={addUserEditState?.phone}
          />
        </StyledForm>
      </Modal>
      <Modal
        title="Add User Modal"
        open={isModalOpen}
        onOk={handleOk}
        okText={"Add User"}
        onCancel={handleCancel}
      >
        <StyledForm>
          <Input
            type="text"
            placeholder="First Name"
            name={"firstName"}
            onChange={inputHandler}
          />
          <Input
            type="text"
            placeholder="Last Name"
            name={"lastName"}
            onChange={inputHandler}
          />
          <Input
            type="email"
            placeholder="Email Address"
            name={"email"}
            onChange={inputHandler}
          />
          <Input
            type="number"
            placeholder="Age"
            name={"age"}
            onChange={inputHandler}
          />
          <Input
            type="number"
            placeholder="Phone"
            name={"phone"}
            onChange={inputHandler}
          />
        </StyledForm>
      </Modal>
      <header className="App-header">
        <StyledDiv>
          <Button onClick={showModal}>Add New User</Button>
        </StyledDiv>
        <TableComp
          showModalEdit={showModalEdit}
          editStateIndex={editStateIndex}
          setEditStateIndex={setEditStateIndex}
          userDataReducer={userDataReducer}
        />
      </header>
    </div>
  );
}

export default App;

const StyledDiv = styled.div`
  width: 53%;
  margin-block: 10px;
  display: flex;
  justify-content: end;
`;

const StyledForm = styled.div`
  .ant-input {
    margin-bottom: 15px;
  }
`;
