import { Datagrid, DatagridProps, List, ListViewProps as RaListViewProps, SearchInput } from 'react-admin';

export type ListViewProps = Omit<RaListViewProps, 'children'> & DatagridProps;

export default function ListView({ children, rowClick = 'edit', ...props }: ListViewProps) {
  return (
    <List filters={[<SearchInput source="name" alwaysOn />]} {...props}>
      <Datagrid rowClick={rowClick} size="medium" stickyHeader>
        {children}
      </Datagrid>
    </List>
  );
}
