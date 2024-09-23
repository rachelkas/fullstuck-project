// // src/store/hooks.ts

// import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// import type { RootState, AppDispatch } from './index';  // Make sure the path points to your store's index file

// // Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;















import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store/index';  // Make sure this points to the store's index file

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;













// src/hooks.ts
// import { useDispatch } from 'react-redux';
// import { AppDispatch } from './store/';

// export const useAppDispatch: () => AppDispatch = useDispatch;
