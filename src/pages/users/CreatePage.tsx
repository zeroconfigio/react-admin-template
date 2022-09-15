import { BooleanInput, TextInput, required } from 'react-admin';

import CreateView from '@app/components/views/CreateView';

export default function CreatePage() {
  return (
    <CreateView>
      <TextInput source="name" validate={[required()]} />
      <TextInput source="email" validate={[required()]} />
      <BooleanInput source="isActive" defaultValue={true} />
    </CreateView>
  );
}
