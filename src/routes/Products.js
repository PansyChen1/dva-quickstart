import React, { useState } from "react";
import { connect } from "dva";
import ProductList from '../components/ProductList';
import {Button, Icon, Modal, Input, Form} from "antd";

const Products =  ({ dispatch, products}) => {

  const [visible, setVisible] = useState(false);


  function handleCancel() {
    setVisible(!visible);
  }

  function handleOk(id) {
    dispatch({
      type: 'products/add',
      payload: id,
    });
  }

  const AddProducts = ({visible}) => {

    return (
      <Modal
        title={'Add a new products'}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <span>Product Name : </span>

      </Modal>
    )
  };

  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }

  return (
    <div>
      <h2>List of Products</h2>
      <Button onClick={() => { setVisible(!visible) }}><Icon type={"plus"}/>Add</Button>
      <AddProducts visible={visible} />
      <ProductList onDelete={ handleDelete } products={ products }/>
    </div>
  );
};

export default connect(({ products }) => ({
  products,
}))(Products);
