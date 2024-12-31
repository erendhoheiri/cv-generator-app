import { ReactNode } from 'react'
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { LucideIcon } from 'lucide-react'

interface FormSectionProps {
  value: string
  icon: LucideIcon
  title: string
  children: ReactNode
}

export function FormSection({ value, icon: Icon, title, children }: FormSectionProps) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="hover:no-underline">
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5" />
          <span>{title}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="space-y-4 pt-4">
          {children}
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}