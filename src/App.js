import React, { useState } from "react";
import todo from "./image/todo.svg";

const App = () => {
  const [data, setData] = useState("");
  const [items, setItems] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const addItem = () => {
    if (!data) {
      alert("plz fill the data");
    } else if (data && !toggleSubmit) {
      setItems(
        items.map((value) => {
          if (value.id === isEditItem) {
            return { ...value, name: data };
          }

          return value;
        })
      );

      setToggleSubmit(true);
      setData("");
      setIsEditItem(null);
    } else {
      const allInputData = { id: new Date().getTime().toString(), name: data };
      // console.log(allInputData);
      setItems([...items, allInputData]);
      setData("");
    }
  };

  const deleteItem = (id) => {
    const updateItems = items.filter((value) => {
      return id !== value.id;
    });
    setItems(updateItems);
  };

  const removeAll = () => {
    setItems([]);
  };

  const editItem = (id) => {
    const editItem = items.find((value) => {
      return value.id === id;
    });
    // console.log(editItem);
    setToggleSubmit(false);
    setData(editItem.name);
    setIsEditItem(id);
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo} alt="todologo" />
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="write add items ....."
              id=""
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
            {toggleSubmit ? (
              <i
                className="fa fa-plus add-btn"
                title="addItems"
                onClick={addItem}
              ></i>
            ) : (
              <i
                className="fa fa-edit add-btn"
                title="updateItems"
                onClick={editItem}
              ></i>
            )}
          </div>

          <div className="showItems">
            {items.map((value) => {
              return (
                <div className="eachItem" key={value.id}>
                  <h3>{value.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      title="edit Items"
                      onClick={() => editItem(value.id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      title="delete Items"
                      onClick={() => deleteItem(value.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={() => removeAll()}
            >
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

// import React from "react";
// import Button from "./button";

// const App = () => {
//   const data = {
//     backgroundColor: "blue",
//   };

//   return (
//     <>
//       <Button icon={data}>fgsdfgdfg</Button>
//       <Button icon={data}>Hello24</Button>
//     </>
//   );
// };

// export default App;
