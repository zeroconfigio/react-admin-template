import { BooleanField, EmailField, TextField } from 'react-admin';

import ListView from '@app/components/views/ListView';

export default function ListPage() {
  return (
    <ListView>
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <BooleanField source="isActive" />
    </ListView>
  );
}
