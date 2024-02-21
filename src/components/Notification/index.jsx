import React from 'react';

import { NotificationMessage } from './Notification.styled';

const Notification = ({ message }) => (
  <NotificationMessage>{message}</NotificationMessage>
);

export default Notification;
