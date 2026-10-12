export interface Category {
  id: string
  name: string
}

export interface Project {
  id: string
  name: string
  budget: number 
  category?: Category
  cost: number
  services?: unknown[]
}
