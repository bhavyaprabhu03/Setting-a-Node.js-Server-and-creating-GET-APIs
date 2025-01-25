const express = require('express');
const app = express();
app.use(express.json());
app.get('/api/example', (req, res) => {
  res.json({ status: 'success', data: 'This is the response for route /api/example' });
});
const PORT = 3000;
app.listen(PORT, ()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.get('/api/users', (req, res)=>{
    res.json({status:'success', data:[{id:1, name:'John'}, {id:2, name:'Jane'}] });
});
app.get('/api/time', (req, res)=>{
    res.json({status:'success', data:new Date().toLocaleString()});
});
app.get('/api/products', (req, res)=>{
    res.json({staus:'success', data:[{id:123, product:'Bottle', 'price':800}, {id:124, product:'Container', 'price':1200}, {id:125, product:'Table', 'price':2000}, {id:126, product:'Bag', 'price':1000}, {id:127, product:'Cover', 'price': 500}]});
});
app.get('/api/statistics', (req, res)=>{
    res.json({staus:'success', data:[{'orders': 70000000, 'balance': 1000000, 'completed': 69000000, 'active': 0}]});
});
app.get('/api/orders', (req, res)=>{
    res.json({staus:'success', data:[{'id':11203, 'item':'Bag'}, {'id':12322, 'item':'Sheet'}, {'id':12345, 'item':'Chart'}]});
});
app.get('/api/requirements', (req, res)=>{
    res.json({staus:'success', data:[{'software': 'yes', 'updates': 'yes', 'infrastructure': 'no'}]});
});
app.get('/api/categories', (req, res)=>{
    res.json({status: 'success', data: [{ id: 1, name: 'Electronics' }, { id: 2, name: 'Furniture' }, { id: 3, name: 'Clothing' },]});
});
app.get('/api/status', (req, res)=>{
    res.json({ status: 'success', message: 'System is running smoothly', timestamp: new Date().toISOString() });
  });
app.get('/api/product_reviews', (req, res)=>{
    res.json({status: 'success',data:[{ productId: 123, reviewId: 101, rating: 4, comment: 'Great product!' }, { productId: 124, reviewId: 102, rating: 5, comment: 'Loved it, very useful!' },]});
});
app.get('/api/discounts', (req, res)=>{
    res.json({status: 'success', data: [{ productId: 125, discount: 10, description: '10% off on Table' }, { productId: 126, discount: 5, description: '5% off on Bag' },]});
  });
  

    
