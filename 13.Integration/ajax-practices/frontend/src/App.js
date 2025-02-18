import React, { useEffect, useState, useRef } from "react";

import Modal from "react-modal";
import ReactModal from "react-modal";
import styled from "styled-components";
import serialize from "form-serialize";
import axios from "axios";
import update from "react-addons-update";

import "./assets/scss/App.scss";
import * as stylesModal from "./assets/scss/Modal.scss";
import data from "./assets/json/data.js";

const CreateForm = styled.form``;
const UpdateForm = styled.form``;
const ItemList = styled.ul``;
const Item = styled.li``;

ReactModal.setAppElement("body");

function App() {
  const refCreateForm = useRef(null);
  const [items, setItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [updateItem, setUpdateItem] = useState({ type: "", name: "" });
  const [modalData, setModalData] = useState({
    modalOpen: false,
    item: {
      type: "",
      name: "",
    },
  });

  const addItem = async (item) => {
    try {
      const response = await fetch("/item", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      const jsonResult = await response.json();
      if (!response.ok || jsonResult.result === "fail") {
        throw new Error(`${response.status} ${jsonResult.message}`);
      }
      setItems([jsonResult.data, ...items]);
      refCreateForm.current.reset();
    } catch (err) {
      console.error(err);
    }
  };

  const fetchItems = async () => {
    try {
      const response = await fetch("/item", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: null,
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const jsonResult = await response.json();

      if (!response.ok || jsonResult.result !== "success") {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      setItems(jsonResult.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteItem = async (id) => {
    try {
      const response = await axios.delete(`/item/${id}`);
      const jsonResult = response.data;

      setItems(items.filter((e) => e.id != jsonResult.data));
    } catch (err) {
      console.error(
        err.response
          ? `${err.response.status} ${err.response.data.message}`
          : err
      );
    }
  };

  const clickItemName = async (id) => {
    try {
      const response = await axios.get(`/item/${id}`);
      const jsonResult = response.data;

      console.log(jsonResult.data);

      setModalOpen(!modalOpen);
      setUpdateItem(jsonResult.data);
      setModalData(
        update(modalData, {
          open: { $set: true },
          itemType: { $set: jsonResult.data.type },
          itemName: { $set: jsonResult.data.name },
        })
      );
    } catch (error) {
      console.error(
        error.response
          ? `${error.response.status} ${error.response.statusText}`
          : error.message
      );
    }
  };

  useEffect(() => {
    fetchItems();
    console.log("fetchItems() called");
  }, []);

  return (
    <div id="App">
      <h1>AJAX: Restful API</h1>

      <div>
        <form
          ref={refCreateForm}
          onSubmit={(event) => {
            event.preventDefault();
            try {
              /*const item = Array.from(event.target, (el) => {
                if (el.name !== "" && el.value === "") {
                  throw new Error(`Validation ${el.name} is empty`);
                }

                return { name: el.name, value: el.value };
              })
                .filter(({ name }) => name !== "")
                .reduce((res, { name, value }) => {
                  res[name] = value;
                  return res;
                }, {});

                */
              Array.from(event.target, (el) => {
                if (el.name !== "" && el.value === "") {
                  throw new Error(`validation ${el.name} is empty`);
                }
                return null;
              });
              // const querysting = serialize(event.target);
              const item = serialize(event.target, { hash: true });

              addItem(item);
              //console.log(item);
              // }
            } catch (error) {
              console.error(error);
            }
          }}
        >
          <select name={"type"}>
            <option>BOOK</option>
            <option>CLOTHE</option>
            <option>MUSIC</option>
            <option>CAR</option>
            <option>BEAUTY</option>
            <option>MOVIE</option>
            <option>FOOD</option>
          </select>{" "}
          <input type={"text"} name={"name"} placeholder={"name"} />
          <input type={"submit"} value={"[C]reate (post)"} />
        </form>
        <CreateForm>
          <select name={"type"}>
            <option>BOOK</option>
            <option>CLOTHE</option>
            <option>MUSIC</option>
            <option>CAR</option>
            <option>BEAUTY</option>
            <option>MOVIE</option>
            <option>FOOD</option>
          </select>{" "}
          <input type={"text"} name={"name"} placeholder={"name"} />
          <input type={"file"} name={"file"} />
          <input type={"submit"} value={"[C]reate (post)"} />
        </CreateForm>
      </div>

      <h2 title={"[R]ead (get)"} onClick={() => fetchItems()}>
        Items
      </h2>

      <ItemList>
        {items?.map((item, index) => (
          <Item key={item.id}>
            <h4>
              <b title={"[R]ead (get)"} onClick={() => clickItemName(item.id)}>
                {item.name}
              </b>
              <button
                onClick={() => {
                  deleteItem(item.id);
                }}
              >
                {"[D]elete (delete)"}
              </button>
            </h4>
            <div>
              <span>
                <b>{index + 1}</b>
                <i>{item.type}</i>
              </span>
              <img src={item.image || "/assets/images/no-image.png"} />
            </div>
          </Item>
        ))}
      </ItemList>

      <Modal
        isOpen={modalData.open}
        onRequestClose={() =>
          setModalData(update(modalData, { open: { $set: false } }))
        }
        className={stylesModal.Modal}
        overlayClassName={stylesModal.Overlay}
        style={{ content: { width: 280 } }}
      >
        <h3>Update Item</h3>
        <form
          onChange={(e) => {
            console.log("tomorrow~~");
          }}
        >
          <label>TYPE</label>{" "}
          <select
            name={"type"}
            value={modalData.itemType}
            onChange={(e) => {
              setModalData(
                update(modalData, { itemType: { $set: e.target.value } })
              );
            }}
          >
            <option>BOOK</option>
            <option>CLOTHE</option>
            <option>MUSIC</option>
            <option>CAR</option>
            <option>BEAUTY</option>
            <option>MOVIE</option>
            <option>FOOD</option>
          </select>
          <br />
          <br />
          <label>NAME</label>{" "}
          <input
            type={"text"}
            name={"name"}
            value={modalData.itemName}
            onChange={(e) => {
              setModalData(
                update(modalData, {
                  itemName: {
                    $set: e.target.value,
                  },
                })
              );
            }}
          />
          <hr />
          <input type={"submit"} value={"[U]pdate (update)"} />
        </form>
      </Modal>
    </div>
  );
}

export { App };
