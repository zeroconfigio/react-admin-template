import { Edit, EditProps, SimpleForm, SimpleFormProps } from 'react-admin';

export type EditViewProps = Omit<EditProps, 'children'> & SimpleFormProps;

export default function EditView({ children, ...props }: EditViewProps) {
  return (
    <Edit redirect="list" {...props}>
      <SimpleForm>{children}</SimpleForm>
    </Edit>
  );
}
