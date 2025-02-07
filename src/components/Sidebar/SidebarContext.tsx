import { createContext, useContext } from 'react'

/**
 * Represents the context for the Sidebar component.
 * @interface SidebarContext
 */
export type SidebarContext = {
  /**
   * Indicates whether the sidebar is collapsed or not.
   * @type {boolean}
   * @default false
   */
  isCollapsed: boolean
}

export const SidebarContext = createContext<SidebarContext | undefined>(undefined)

export function useSidebarContext(): SidebarContext {
  const context = useContext(SidebarContext)

  if (!context) {
    throw new Error('useSidebarContext should be used within the SidebarContext provider!')
  }

  return context
}
