import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

const ViewStore = () => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllProducts();
  }, []);

  //search
  useEffect(() => {
    const result = products.filter(product => {
      return product.title.toLowerCase().match(search.toLowerCase());
    });
    setFilteredProducts(result);
  }, [search]);

  const getAllProducts = async () => {
    const response = await axios("https://fakestoreapi.com/products");
    setProducts(response.data);
    setFilteredProducts(response.data);
  }

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true
    },
    {
      name: "IMAGE",
      selector: (row) => <img width={60} height={60} src={row.image} />
    },
    {
      name: "TITLE",
      selector: (row) => row.title,
      sortable: true
    },
    {
      name: "EDIT",
      cell: (row) => <button className='btn btn-primary' onClick={() => alert(row.title)}>Edit</button>,
    },
    {
      name: "DELETE",
      cell: (row) => <button className='btn btn-danger' onClick={() => alert(row.title)}>Delete</button>
    }
  ]

  return (
    <DataTable
      title='All Stores'
      data={filteredProducts}
      columns={columns}
      pagination
      fixedHeader
      fixedHeaderScrollHeight='450px'
      selectableRows
      selectableRowsHighlight
      highlightOnHover
      actions={
        <button className="btn btn-sm btn-info">Export</button>
      }
      subHeader
      subHeaderAlign='left'
      subHeaderComponent={
        <input type='text'
          value={search}
          placeholder='Search here'
          className='w-25 form-control'
          onChange={(e) => setSearch(e.target.value)}
        />
      }

    />
  )
}

export default ViewStore