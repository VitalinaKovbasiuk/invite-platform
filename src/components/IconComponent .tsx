import { LucideIcon } from "lucide-react";

interface IconProps {
  name: LucideIcon | React.ComponentType<any>;
  color?: string;
  size?: string;
  className?: string;
  pathname?: string;
}

const Icon = ({ name: Icon, color, size, className }: IconProps) => {
  return <Icon color={color} size={size} className={className} />;
};

export default Icon;
