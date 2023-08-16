import { useState } from "react";

function Product(props) {
  // 需要傳入的參數
  const { id, name, detail, price, stock, onDeleteProduct, onSetProducts } =
    props;
  // 設定編輯狀態
  const [edit, setEdit] = useState(false);
  // 設定暫存編輯資料
  const [editProduct, setEditProduct] = useState({
    id,
    name,
    detail,
    price,
    stock,
  });

  // 設定input的onChange事件
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditProduct((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // 設定stock加、減按鈕事件
  const handleStock = (type) => {
    setEditProduct((prev) => {
      return {
        ...prev,
        stock: type === "add" ? prev.stock + 1 : prev.stock - 1,
      };
    });
  };

  // 取消編輯事件，需要將product設為原始狀態
  const handleCancel = () => {
    setEdit(false);
    setEditProduct({ id, name, detail, price, stock });
  };

  // 儲存編輯的資料
  const handleSubmit = () => {
    const { id, name, detail, price, stock } = editProduct;
    // 如果有資料為空，就呼叫handleCancel function來關閉編輯和重置編輯資料
    if ((name === "") | (detail === "") | (price === "")) {
      handleCancel();
      return;
    }
    onSetProducts((prev) => {
      return prev.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            name,
            detail,
            price,
            stock,
          };
        }
        return product;
      });
    });
    setEdit(false);
  };

  return edit ? (
    <tr>
      <td>
        <input
          type="text"
          value={editProduct.name}
          name="name"
          onChange={(e) => handleChange(e)}
          style={{ width: `90%` }}
        />
      </td>
      <td>
        <input
          type="text"
          value={editProduct.detail}
          name="detail"
          onChange={(e) => handleChange(e)}
          style={{ width: `90%` }}
        />
      </td>
      <td>
        <input
          type="text"
          value={editProduct.price}
          name="price"
          onChange={(e) => handleChange(e)}
          style={{ width: `90%` }}
        />
      </td>
      <td className="btn">
        <button onClick={() => handleStock()}>-</button>
        {editProduct.stock}
        <button onClick={() => handleStock("add")}>+</button>
      </td>
      <td className="action-area">
        <button className="action-btn edit-btn" onClick={() => handleSubmit()}>
          完成
        </button>
        <button
          className="action-btn delete-btn"
          onClick={() => handleCancel()}
        >
          取消
        </button>
      </td>
    </tr>
  ) : (
    <tr>
      <td>{name}</td>
      <td>{detail}</td>
      <td>{price}</td>
      <td>{stock}</td>
      <td className="action-area">
        <button className="action-btn edit-btn" onClick={() => setEdit(true)}>
          編輯
        </button>
        <button
          className="action-btn delete-btn"
          onClick={() => onDeleteProduct(id)}
        >
          刪除
        </button>
      </td>
    </tr>
  );
}

// 顯示頁面
export default function DataTable() {
  const data = [
    {
      id: 1,
      name: "珍珠奶茶",
      detail: "香濃奶茶搭配QQ珍珠",
      price: 50,
      stock: 20,
      completed: true,
    },
    {
      id: 2,
      name: "冬瓜檸檬",
      detail: "清新冬瓜配上新鮮檸檬",
      price: 45,
      stock: 18,
      completed: true,
    },
    {
      id: 3,
      name: "翡翠檸檬",
      detail: "綠茶與檸檬的完美結合",
      price: 55,
      stock: 34,
      completed: true,
    },
    {
      id: 4,
      name: "四季春茶",
      detail: "香醇四季春茶，回甘無比",
      price: 45,
      stock: 10,
      completed: true,
    },
    {
      id: 5,
      name: "阿薩姆奶茶",
      detail: "阿薩姆紅茶搭配香醇鮮奶",
      price: 50,
      stock: 25,
      completed: true,
    },
    {
      id: 6,
      name: "檸檬冰茶",
      detail: "檸檬與冰茶的清新組合",
      price: 45,
      stock: 20,
      completed: true,
    },
    {
      id: 7,
      name: "芒果綠茶",
      detail: "芒果與綠茶的獨特風味",
      price: 55,
      stock: 18,
      completed: true,
    },
    {
      id: 8,
      name: "抹茶拿鐵",
      detail: "抹茶與鮮奶的絕配",
      price: 60,
      stock: 20,
      completed: true,
    },
  ];

  // 設定初始data state
  const [products, setProducts] = useState(data);

  // 刪除product
  const deleteProduct = (id) => {
    setProducts((prev) => {
      return prev.filter((product) => product.id !== id);
    });
  };

  //   const handleStock = (id, type) => {
  //     const newStock = todo.map((item) =>
  //       item.id === id
  //         ? { ...item, stock: type === "add" ? item.stock + 1 : item.stock - 1 }
  //         : item
  //     );
  //     setTodo(newStock);
  //   };

  //   const handleEdit = (e, id) => {
  //     setTodo((prev) => {
  //       return prev.map((item) =>
  //         item.id === id ? { ...item, name: e.target.value } : item
  //       );
  //     });
  //   };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">品項</th>
            <th scope="col">描述</th>
            <th scope="col">價格</th>
            <th scope="col">庫存</th>
            <th scope="col">編輯</th>
          </tr>
        </thead>
        <tbody>
          {/* 使用迴圈動態產生product，並將每一筆product的資料傳入Product component裡面 */}
          {products.map((product) => {
            const { id, name, detail, price, stock } = product;
            return (
              <Product
                key={id}
                id={id}
                name={name}
                detail={detail}
                price={price}
                stock={stock}
                onDeleteProduct={deleteProduct}
                onSetProducts={setProducts}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}
