import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-[#110229] group-[.toaster]:border-[#f0effb] group-[.toaster]:shadow-lg group-[.toaster]:font-['Plus_Jakarta_Sans:Medium',sans-serif]",
          description: "group-[.toast]:text-[#8f90a6]",
          actionButton:
            "group-[.toast]:bg-[#7065f0] group-[.toast]:text-white",
          cancelButton:
            "group-[.toast]:bg-[#f0effb] group-[.toast]:text-[#8f90a6]",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
