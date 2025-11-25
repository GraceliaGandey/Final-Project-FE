// src/API.js

// URL Endpoints dari JSON Server yang berjalan di port 5000
const CAKES_API_URL = 'http://localhost:5000/cakes';
const CUSTOMERS_API_URL = 'http://localhost:5000/customers'; 
const ORDERS_API_URL = 'http://localhost:5000/orders';       

// =======================================================
//                    CAKES CRUD (Diperbaiki)
// =======================================================

/**
 * Mendapatkan semua kue dari API.
 */
export const getCakes = async () => {
  const response = await fetch(CAKES_API_URL);
  if (!response.ok) { 
    throw new Error(`Gagal mengambil data kue. Status: ${response.status}`); 
  }
  return response.json();
};

/**
 * Menambahkan kue baru ke API.
 */
export const addCake = async (newCake) => {
  const response = await fetch(CAKES_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCake),
  });
  if (!response.ok) { 
    throw new Error(`Gagal menambahkan kue baru. Status: ${response.status}`); 
  }
  return response.json();
};

/**
 * Memperbarui data kue berdasarkan ID.
 */
export const updateCake = async (id, updatedData) => {
  // ✅ PERBAIKAN: GUNAKAN ID (string) SECARA LANGSUNG
  const response = await fetch(`${CAKES_API_URL}/${id}`, { 
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });
  if (!response.ok) { 
    throw new Error(`Gagal mengubah data kue. Status: ${response.status}`); 
  }
  return response.json();
};

/**
 * Menghapus kue berdasarkan ID.
 */
export const deleteCake = async (id) => {
  // ✅ PERBAIKAN: GUNAKAN ID (string) SECARA LANGSUNG
  const response = await fetch(`${CAKES_API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) { 
    throw new Error(`Gagal menghapus kue. Status: ${response.status}`); 
  }
};

// =======================================================
//                CUSTOMERS & ORDERS (READ ONLY)
// =======================================================

/**
 * Mendapatkan semua pelanggan.
 */
export const getCustomers = async () => {
  const response = await fetch(CUSTOMERS_API_URL);
  if (!response.ok) { 
    throw new Error(`Gagal mengambil data pelanggan. Status: ${response.status}`); 
  }
  return response.json();
};

/**
 * Mendapatkan semua pesanan.
 */
export const getOrders = async () => {
  const response = await fetch(ORDERS_API_URL);
  if (!response.ok) { 
    throw new Error(`Gagal mengambil data pesanan. Status: ${response.status}`); 
  }
  return response.json();
};