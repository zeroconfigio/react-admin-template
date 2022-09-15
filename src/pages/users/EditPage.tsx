import { BooleanInput, TextInput, required } from 'react-admin';

import EditView from '@app/components/views/EditView';

export default function EditPage() {
  return (
    <EditView>
      <TextInput source="name" validate={[required()]} />
      <TextInput source="email" validate={[required()]} />
      <BooleanInput source="isActive" />
    </EditView>
  );
}
