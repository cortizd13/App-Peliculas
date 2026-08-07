import { createContext } from 'react'
import type { MoviesContextValue } from '../types/movieContext'

export const MoviesContext = createContext<MoviesContextValue | null>(null)