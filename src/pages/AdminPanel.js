import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  ref,
  get,
  push,
  remove,
} from 'firebase/database';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const firebaseConfig = {
    apiKey: "AIzaSyBBBa1TJvSommbAIxktHVABrO5fMaGNJBg",
    authDomain: "ecom-1c958.firebaseapp.com",
    projectId: "ecom-1c958",
    storageBucket: "ecom-1c958.appspot.com",
    messagingSenderId: "46656968657",
    appId: "1:46656968657:web:a8070386f8cf19614772f0",
    databaseURL: "https://ecom-1c958-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const AdminPanel = () => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemImage, setItemImage] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      console.log('Fetching items...');
      const itemsRef = ref(db, 'productData');
      const snapshot = await get(itemsRef);
      const itemsData = [];
      snapshot.forEach((childSnapshot) => {
        itemsData.push({ id: childSnapshot.key, ...childSnapshot.val() });
      });
      setItems(itemsData);
    } catch (error) {
      console.error('Error fetching items:', error.message);
    }
  };

  const addItem = async () => {
    try {
      const itemsRef = ref(db, 'productData');
      const newItemRef = push(itemsRef);
      await newItemRef.set({
        productName: itemName,
        price: itemPrice,
        description: itemDescription,
        catImg: itemImage,
      });
      toast.success('Item added successfully!');
      fetchItems();
      setItemName('');
      setItemPrice('');
      setItemDescription('');
      setItemImage('');
    } catch (error) {
      console.error('Error adding item:', error.message);
      toast.error('Failed to add item. Please try again.');
    }
  };

  const deleteItem = async (id) => {
    try {
      const itemRef = ref(db, `productData/${id}`);
      await remove(itemRef);
      toast.success('Item deleted successfully!');
      fetchItems();
    } catch (error) {
      console.error('Error deleting item:', error.message);
      toast.error('Failed to delete item. Please try again.');
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Admin Panel</h2>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Form>
                <Form.Group controlId="itemName">
                  <Form.Label>Item Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter item name"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="itemPrice">
                  <Form.Label>Item Price</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter item price"
                    value={itemPrice}
                    onChange={(e) => setItemPrice(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="itemDescription">
                  <Form.Label>Item Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter item description"
                    value={itemDescription}
                    onChange={(e) => setItemDescription(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="itemImage">
                  <Form.Label>Item Image URL</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter item image URL"
                    value={itemImage}
                    onChange={(e) => setItemImage(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" onClick={addItem}>
                  Add Item
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h3>Existing Items</h3>
          {items.map((item) => (
            <Card key={item.id} className="mb-2">
              <Card.Body>
                <Row>
                  <Col md={8}>
                    <Card.Title>{item.productName}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Col>
                  <Col md={4} className="text-right">
                    <Button variant="danger" onClick={() => deleteItem(item.id)}>
                      Delete
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>

      <ToastContainer />
    </Container>
  );
};

export default AdminPanel;




// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Button, Form } from 'react-bootstrap';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './AdminPanel.css'

// const AdminPanel = () => {
//   const [itemName, setItemName] = useState('');
//   const [itemPrice, setItemPrice] = useState('');
//   const [itemDescription, setItemDescription] = useState('');
//   const [itemImage, setItemImage] = useState('');

//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     // Fetch existing items when the component mounts
//     fetchItems();
//   }, []);

//   const fetchItems = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/productData');
//       setItems(response.data);
//     } catch (error) {
//       console.error('Error fetching items:', error.message);
//     }
//   };

//   const addItem = async () => {
//     try {
//       await axios.post('http://localhost:5000/productData', {
//         productName: itemName,
//         price: itemPrice,
//         description: itemDescription,
//         catImg: itemImage,
//         // Add other required fields
//       });
//       toast.success('Item added successfully!');
//       fetchItems(); // Fetch updated items
//       // Reset form fields
//       setItemName('');
//       setItemPrice('');
//       setItemDescription('');
//       setItemImage('');
//     } catch (error) {
//       console.error('Error adding item:', error.message);
//       toast.error('Failed to add item. Please try again.');
//     }
//   };

//   const deleteItem = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/productData/${id}`);
//       toast.success('Item deleted successfully!');
//       fetchItems(); // Fetch updated items
//     } catch (error) {
//       console.error('Error deleting item:', error.message);
//       toast.error('Failed to delete item. Please try again.');
//     }
//   };

//   return (
//     <Container>
//       <h2 className="mt-5 mb-4">Admin Panel</h2>
//       <Row>
//         <Col md={6}>
//           <Form>
//             <Form.Group controlId="itemName">
//               <Form.Label>Item Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter item name"
//                 value={itemName}
//                 onChange={(e) => setItemName(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="itemPrice">
//               <Form.Label>Item Price</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter item price"
//                 value={itemPrice}
//                 onChange={(e) => setItemPrice(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="itemDescription">
//               <Form.Label>Item Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 placeholder="Enter item description"
//                 value={itemDescription}
//                 onChange={(e) => setItemDescription(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="itemImage">
//               <Form.Label>Item Image URL</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter item image URL"
//                 value={itemImage}
//                 onChange={(e) => setItemImage(e.target.value)}
//               />
//             </Form.Group>

//             <Button variant="primary" onClick={addItem}>
//               Add Item
//             </Button>
//           </Form>
//         </Col>
//       </Row>

//       <Row className="mt-5">
//         <Col>
//           <h3>Existing Items</h3>
//           <ul>
//             {items.map((item) => (
//               <li key={item.id}>
//                 {item.productName} -{' '}
//                 <Button variant="danger" onClick={() => deleteItem(item.id)}>
//                   Delete
//                 </Button>
//               </li>
//             ))}
//           </ul>
//         </Col>
//       </Row>

//       <ToastContainer />
//     </Container>
//   );
// };

// export default AdminPanel;
