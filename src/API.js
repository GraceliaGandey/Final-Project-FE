// src/API.js

// URL Endpoints dari JSON Server yang berjalan di port 5000
const CAKES_API_URL = 'http://localhost:5000/cakes';
const CUSTOMERS_API_URL = 'http://localhost:5000/customers'; // URL baru
const ORDERS_API_URL = 'http://localhost:5000/orders';       // URL baru

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
 * Menggunakan Number(id) untuk mengatasi masalah tipe data ID yang gagal diubah.
 */
export const updateCake = async (id, updatedData) => {
  // ✅ PERUBAHAN UTAMA: Konversi ID ke Number
  const numericId = Number(id); 
  
  const response = await fetch(`${CAKES_API_URL}/${numericId}`, {
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
 * Menggunakan Number(id) untuk mengatasi masalah tipe data ID yang gagal dihapus.
 */
export const deleteCake = async (id) => {
  // ✅ PERUBAHAN UTAMA: Konversi ID ke Number
  const numericId = Number(id); 
  
  const response = await fetch(`${CAKES_API_URL}/${numericId}`, {
    method: 'DELETE',
  });
  if (!response.ok) { 
    throw new Error(`Gagal menghapus kue. Status: ${response.status}`); 
  }
};

// =======================================================
//               CUSTOMERS & ORDERS (BARU DITAMBAHKAN)
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