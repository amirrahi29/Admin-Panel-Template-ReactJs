import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

const ViewStore = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

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

  const handleSelectedRowsChange = (state) => {
    setSelectedRows(state.selectedRows);
  };

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true
    },
    {
      name: "IMAGE",
      selector: (row) => <img width={60} height={60} src={row.image} alt={row.title} />
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
      cell: (row) => <button className='btn btn-danger' style={{ color: 'white' }} onClick={() => alert(row.title)}>Delete</button>
    }
  ];

  const conditionalRowStyles = [
    {
      when: (row) => row.title === "Mens Casual Slim Fit",
      style: {
        backgroundColor: 'grey',
        color: 'white',
      },
    },
  ];

  return (
    <div>
      {selectedRows.length > 0 ?
        <p style={{ marginLeft: 20, marginBottom: 0 }}>
          SELECTED ITEMS<hr style={{ margin: 0, padding: 0 }} />
        </p>
        : null}
      <ul>
        {selectedRows.length > 0 ?
          <>
            {selectedRows.map(row => (
              <li key={row.id}>{row.title}</li>
            ))}
          </>
          : null}
      </ul>

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
        conditionalRowStyles={conditionalRowStyles}
        onSelectedRowsChange={handleSelectedRowsChange}
      />

    </div>
  )
}

export default ViewStore;
