import React from 'react';
import ToastPage from './index';

export default {
  title: 'Pages/ToastPage',
  component: ToastPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <ToastPage />;
