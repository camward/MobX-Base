import React, { useState } from "react";
import { Modal, Button, Input } from "antd";
import { observer } from "mobx-react-lite";
import store from "../store";

const Controls = observer(() => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [sp, setSP] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
    setName("");
    setSP("");
  };

  const handleOk = () => {
    store.users.addDeveloper({ name, sp });
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onSearch = ({ target: { value } }) => {
    store.users.updateFilter(value);
  };

  const onChange = (e, code) => {
    switch (code) {
      case "name":
        setName(e.target.value);
        break;
      case "sp":
        setSP(e.target.value);
        break;
      default:
        return;
    }
  };

  const clearList = () => {
    store.users.clearList();
  };

  return (
    <div className="action-block">
      <Input
        placeholder="Search Name"
        onChange={onSearch}
        style={{ width: 300 }}
        allowClear
      />
      <div className="action-controls">
        <Button onClick={clearList}>Clear Table</Button>
        <Button type="primary" onClick={showModal}>
          Add Record
        </Button>
      </div>

      <Modal
        title="Add User"
        visible={isModalVisible}
        onOk={handleOk}
        okText="Add"
        okButtonProps={{ disabled: !name || !sp }}
        onCancel={handleCancel}
      >
        <div className="field field-input">
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => onChange(e, "name")}
          />
        </div>
        <div className="field ">
          <Input
            placeholder="Story Points"
            value={sp}
            type="number"
            onChange={(e) => onChange(e, "sp")}
          />
        </div>
      </Modal>
    </div>
  );
});

export default Controls;
