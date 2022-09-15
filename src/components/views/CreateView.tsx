import { Create, CreateProps, SimpleForm, SimpleFormProps } from 'react-admin';

export type CreateViewProps = Omit<CreateProps, 'children'> & SimpleFormProps;

export default function CreateView({ children, ...props }: CreateViewProps) {
  return (
    <Create redirect="list" {...props}>
      <SimpleForm>{children}</SimpleForm>
    </Create>
  );
}
