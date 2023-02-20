

export interface Props {
  title: string;
  icon: any;
  isOpen: boolean;
}

const NavItem = (props: Props) => {
    const Icon = props.icon;
  return (
    <li className="flex  mb-4">
        <Icon className="w-6 h-6 ml-6 mr-8"/>
        {props.isOpen && <h3 className="text-gray-800 self-center">{props.title}</h3>}
    </li>
  );
};

export default NavItem;
