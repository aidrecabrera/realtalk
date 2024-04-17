import StyledOutlet from '@/components/common/styled-outlet'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public')({
  component: StyledOutlet
})