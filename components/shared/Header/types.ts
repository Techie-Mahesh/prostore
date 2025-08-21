type ButtonVariant = "default" | "ghost";

export type NavigationMenu = {
  id: string;
  variant: ButtonVariant;
  icon: React.ReactNode;
  label: string;
};
