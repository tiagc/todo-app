// src/firestoreService.js
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebaseConfig";

const todoCollectionRef = collection(db, "todos");

export const addTodo = async (todo) => {
  return await addDoc(todoCollectionRef, todo);
};

export const getTodos = async () => {
  const data = await getDocs(todoCollectionRef);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const deleteTodo = async (id) => {
  return await deleteDoc(doc(db, "todos", id));
};
